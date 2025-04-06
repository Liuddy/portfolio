const logoPath = []
import dark from '@/assets/logo/dark.png'
logoPath.push(dark)
import light from '@/assets/logo/light.png'
logoPath.push(light)
import portfolio from '@/assets/logo/portfolio.png'
logoPath.push(portfolio)

const imagesPath = []
import lome_photo from '@/assets/images/lome_photo.jpg'
imagesPath.push(lome_photo)
import portfolio_illu from '@/assets/images/portfolio_illu.png'
imagesPath.push(portfolio_illu)
import red_panda_icon from '@/assets/images/red_panda_icon.png'
imagesPath.push(red_panda_icon)
import tomuss_illu from '@/assets/images/tomuss_illu.png'
imagesPath.push(tomuss_illu)
import twelve_cm_cube_illu from '@/assets/images/12cm3_illu.png'
imagesPath.push(twelve_cm_cube_illu)

const iconsPath = []
import c from '@/assets/icons/c.png'
iconsPath.push(c)
import cplusplus from '@/assets/icons/cplusplus.png'
iconsPath.push(cplusplus)
import css from '@/assets/icons/css.png'
iconsPath.push(css)
import duo from '@/assets/icons/duo.png'
iconsPath.push(duo)
import docker from '@/assets/icons/docker.png'
iconsPath.push(docker)
import git from '@/assets/icons/git.png'
iconsPath.push(git)
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
import mail from '@/assets/icons/mail.png'
iconsPath.push(mail)
import mongodb from '@/assets/icons/mongodb.png'
iconsPath.push(mongodb)
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
import mysql from '@/assets/icons/mysql.png'
iconsPath.push(mysql)
import nosql from '@/assets/icons/nosql.png'
iconsPath.push(nosql)
import symfony from '@/assets/icons/symfony.png'
iconsPath.push(symfony)
import typescript from '@/assets/icons/typescript.png'
iconsPath.push(typescript)
import universitaire from '@/assets/icons/universitaire.png'
iconsPath.push(universitaire)
import vite from '@/assets/icons/vite.png'
iconsPath.push(vite)
import vuedotjs from '@/assets/icons/vuedotjs.png'
iconsPath.push(vuedotjs)

const filesPath = []
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
  if (name.includes('+'))
    name = name.replaceAll('+', 'plus')
  if (name.includes('.'))
    name = name.replaceAll('.', 'dot')
  for (let src of folder) {
    let path = src.split('/')
    if (path[path.length - 1].split('.')[0].includes(name.toLowerCase()))
      return src
  }
}

export { getImgPath }