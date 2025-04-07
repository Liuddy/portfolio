// Iterates through each file path so that the import source can be resolved dinamically.
async function importFilesAndSavePath(importList, pathList) {
  for (let importFn of Object.values(importList)) {
    let mod = await importFn()
    pathList.push(mod.default)
  }
}

const logoPath = []
const logoImport = import.meta.glob('@/assets/logo/*')
await importFilesAndSavePath(logoImport, logoPath)

const imagesPath = []
const imagesImport = import.meta.glob('@/assets/images/*')
await importFilesAndSavePath(imagesImport, imagesPath)

const iconsPath = []
const iconsImport = import.meta.glob('@/assets/icons/*')
await importFilesAndSavePath(iconsImport, iconsPath)

const filesPath = []
const filesImport = import.meta.glob('@/assets/files/*')
await importFilesAndSavePath(filesImport, filesPath)

function getImgPath(type, name) {
  name = name.toLowerCase()

  let folder = ''
  if (type === 'logo')
      folder = logoPath
  else if (type === 'images')
      folder = imagesPath
  else if (type === 'icons')
      folder = iconsPath
  else if (type ===  'files')
      folder = filesPath

  if (name.includes('+'))
    name = name.replaceAll('+', 'plus')
  if (name.includes('.'))
    name = name.replaceAll('.', 'dot')
  if (name === 'c' || name === 'java' || name === 'sql')
    name = name + 'og'

  for (let src of folder) {
    let path = src.split('/')
    if (path[path.length - 1].split('.')[0].includes(name))
      return src
  }
}

export { getImgPath }