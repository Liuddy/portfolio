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
import c from '@/assets/icons/c.png'
iconsPath.push(c)
import css from '@/assets/icons/css.png'
iconsPath.push(css)
import cv from '@/assets/icons/cv.png'
iconsPath.push(cv)
import duo from '@/assets/icons/duo.png'
iconsPath.push(duo)
import groupe from '@/assets/icons/groupe.png'
iconsPath.push(groupe)
import html from '@/assets/icons/html.png'
iconsPath.push(html)
import java from '@/assets/icons/java.png'
iconsPath.push(java)
import javascript from '@/assets/icons/javascript.png'
iconsPath.push(javascript)
import linkedin from '@/assets/icons/linkedin.png'
iconsPath.push(linkedin)
import personnel from '@/assets/icons/personnel.png'
iconsPath.push(personnel)
import professionnel from '@/assets/icons/professionnel.png'
iconsPath.push(professionnel)
import php from '@/assets/icons/php.png'
iconsPath.push(php)
import python from '@/assets/icons/python.png'
iconsPath.push(python)
import solo from '@/assets/icons/solo.png'
iconsPath.push(solo)
import sql from '@/assets/icons/sql.png'
iconsPath.push(sql)
import symfony from '@/assets/icons/symfony.png'
iconsPath.push(symfony)
import universitaire from '@/assets/icons/universitaire.png'
iconsPath.push(universitaire)
import vite from '@/assets/icons/vite.png'
iconsPath.push(vite)
import vuejs from '@/assets/icons/vuejs.png'
iconsPath.push(vuejs)

const filesPath = []
import cv_pdf from '@/assets/files/cv_bordes_lome.pdf'
filesPath.push(cv_pdf)
import twelve_cm_cube from '@/assets/files/12cm3_notice.pdf'
filesPath.push(twelve_cm_cube)

function getImgPath(type, name) {
  let folder = ''
  if(type === 'logo')
      folder = logoPath
  else if (type === 'images')
      folder = imagesPath
  else if (type === 'icons')
      folder = iconsPath
  else if (type ===  'files')
      folder = filesPath
  for (let src of folder) {
    let path = src.split('/')
    if (path[path.length - 1].split('.')[0].includes(name.toLowerCase()))
      return src
  }
}

export { getImgPath }