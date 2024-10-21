const logoPath = []
import dark1 from '@/assets/logo/dark1.png'
logoPath.push(dark1)
import dark2 from '@/assets/logo/dark2.png'
logoPath.push(dark2)
import light1 from '@/assets/logo/light1.png'
logoPath.push(light1)
import light2 from '@/assets/logo/light2.png'
logoPath.push(light2)

const imagesPath = []
import portfolio_illu from '@/assets/images/portfolio_illu.png'
imagesPath.push(portfolio_illu)
import cm_illu from '@/assets/images/12cm3_illu.png'
imagesPath.push(cm_illu)
import tomuss_illu from '@/assets/images/tomuss_illu.png'
imagesPath.push(tomuss_illu)

const iconsPath = []
import cv from '@/assets/icons/cv.png'
iconsPath.push(cv)
import linkedin from '@/assets/icons/linkedin.png'
iconsPath.push(linkedin)
import c from '@/assets/icons/c.png'
iconsPath.push(c)
import css from '@/assets/icons/css.png'
iconsPath.push(css)
import html from '@/assets/icons/html.png'
iconsPath.push(html)
import java from '@/assets/icons/java.png'
iconsPath.push(java)
import javascript from '@/assets/icons/javascript.png'
iconsPath.push(javascript)
import php from '@/assets/icons/php.png'
iconsPath.push(php)
import python from '@/assets/icons/python.png'
iconsPath.push(python)
import sql from '@/assets/icons/sql.png'
iconsPath.push(sql)
import symfony from '@/assets/icons/symfony.png'
iconsPath.push(symfony)
import vite from '@/assets/icons/vite.png'
iconsPath.push(vite)
import vuejs from '@/assets/icons/vuejs.png'
iconsPath.push(vuejs)

const filesPath = []
import cv_pdf from '@/assets/files/cv_bordes_lome.pdf'
filesPath.push(cv_pdf)

function getImgPath(type, name) {
  let folder = ''
  switch (type) {
    case 'logo':
      folder = logoPath
      break
    case 'images':
      folder = imagesPath
      break
    case 'icons':
      folder = iconsPath
      break
    case 'files':
      folder = filesPath
      break
  }
  for (let src of folder) {
    let path = src.split('/')
    if (path[path.length - 1].split('.')[0].includes(name))
      return src
  }
}

export { getImgPath }