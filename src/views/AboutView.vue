<script setup>
  import cv from '@/assets/icons/cv.png'
  import linkedin from '@/assets/icons/linkedin.png'
  import pdf from '@/assets/files/cv_bordes_lome.pdf'

  document.getElementsByTagName('body')[0].id = ''
  document.getElementsByTagName('header')[0].className = ''
  document.getElementsByTagName('footer')[0].className = ''

  const iconsPath = []
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

  function getIconPath(name) {
    for (let src of iconsPath) {
      let path = src.split('/')
      if (path[path.length - 1].split('.')[0].includes(name))
        return src
    }
  }

  const skillTab = []
  let skillList = ['Compétence 1 : Réalisation d\'application',
                  'Maîtriser différents types de programmation (itératif, récursif, programmation orientée objet)',
                  'Maîtriser différents langages de programmation (C, Java, Python, PL/SQL, HTML, CSS, PHP, JavaScript)',
                  'Réaliser un programme pour résoudre un problème donné',
                  'Choisir une structure de données adaptée',
                  'Écrire un code lisible et correct',
                  'Réaliser des phases de tests',
                  'Utiliser et créer des API']
  skillTab.push(skillList)

  skillList = ['Compétence 2 : Optimiser des applications informatiques',
              'Analyser un problème',
              'Utiliser des outils mathématiques dans l\'informatique',
              'Appréhender les différents niveaux de langage',
              'Utiliser des techniques algorithmiques adaptées',
              'Comprendre les enjeux et l\'impact d\'un algorithme',
              'Anticiper les résultats d\'un algorithme',
              'Optimiser des algorithmes']
  skillTab.push(skillList)

  skillList = ['Compétence 3 : Administrer des systèmes informatiques communicants complexes',
              'Maîtriser l\'architecture des systèmes',
              'Installer et configurer un système d\'exploitation et des outils de programmation',
              'Concevoir des applications communicantes par réseau',
              'Appliquer les obligations légales, normes et bonnes pratiques',
              'Mettre en œuvre les corrections et solutions adaptées',
              'Respecter les contraintes de performances, de coûts et d\'éfficacité',
              'Assurer la pérennité du code',
              'Rédiger des documentations']
  skillTab.push(skillList)

  skillList = ['Compétence 4 : Gérer des données de l\'information',
              'Concevoir efficacement des MCD pour faire des bases de données sécurisées et optimisées',
              'Mettre à jour des bases de données à travers des requêtes ou un API',
              'Visualiser des données de manière efficace à l\'aide de la programmation']
  skillTab.push(skillList)

  skillList = ['Compétence 5 : Conduire un projet',
              'Identifier les besoins du client / de l\'utilisateur',
              'Planifier et élaborer des processus à mettre en œuvre',
              'Gérer une équipe et contrôler le travail afin de suivre la planification',
              'Communiquer de manière efficace avec les acteurs du projet',
              'Évaluer les performances de l\'équipe']
  skillTab.push(skillList)

  skillList = ['Compétence 6 : Travailler dans une équipe informatique',
              'Communiquer avec les membres de son équipe',
              'Manager une équpe informatique',
              'Connaître et appliquer les différentes méthodes de développement',
              'Utiliser des systèmes de gestion de code source pour organiser son travail',
              'Faire une veille technologique pour être toujours informé sur l\'actualité dans l\'informatique']
  skillTab.push(skillList)

  function switchClassList() {
    let list = event.target.parentNode.getElementsByTagName('ul')[0]
    list.className = list.className === 'collapsed' ? 'extended' : 'collapsed'
  }
</script>


<template>
  <p style="font-weight: bold; margin-bottom: 1rem;">[Page en cours de construction...]</p>
  <p>Bienvenue sur mon portfolio en ligne ! Moi, c'est Lomé Bordes, jeune développeur passionné
  de sites web et de jeux vidéo, connaissant aussi un grand intérêt pour la philosophie et
  certaines formes d'art. Actuellement, je suis étudiant à l'IUT Informatique de l'Université
  Lyon 1, en seconde année.</p>
  <p>Le site web que vous consultez présentement (à ce propos, merci beaucoup) a été conçu
  dans le but de présenter chacun de mes projets significatifs et de donner un aperçu de ma
  personne. Les projets retenus ici sont majoritairement informatiques, mais certains projets
  rédactionnels et autres peuvent s'y retrouver si cela me semble pertinent.</p>
  <a href="https://www.linkedin.com/in/lom%C3%A9-bordes-a64a76250" target="_blank"><img :src="linkedin" alt="Logo de LinkedIn"></a>
  <a :href="pdf" target="_blank"><img :src="cv" alt="Icône de CV"></a>
  <p style="font-size: 1.2rem; font-weight: bold; margin-top: 4rem;">Compétences du référentiel</p>
  <p>Dans le cadre de ma formation en BUT Informatique, j'ai décidé de
  suivre le parcours RA (Réalisation d'Applications : conception, développement, validation).
  Pour cette formation est proposé un référentiel national de compétences. Retrouvez ci-dessous
  chacune des 6 compétences existantes avec une sous-liste des aptitudes correspondantes que
  je sais avoir acquis durant ces deux dernières.</p>
  <div id="skillFlex">
    <div v-for="skillList in skillTab">
      <p @click="switchClassList()">{{skillList[0]}}</p>
      <ul class="collapsed">
        <li v-for="skill in skillList.slice(1)">{{skill}}</li>
      </ul>
    </div>
  </div>
</template>


<style scoped>

  P {
    font-size: 1.1rem;
    line-height: 1.25;
    margin: 1rem 0;
  }

  a {

    &:hover {
      background: transparent;
      color: var(--color-link);
    }

    & img {
      height: 90px;
      margin-top: 1rem;
      width: 90px;
    }

  }

  div#skillFlex {
    border: 2px solid var(--color-link);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    padding: 0;
    width: 100%;

    & p {
      border-bottom: 2px solid var(--color-link);
      font-size: 1.3rem;
      font-weight: bold;
      line-height: normal;
      margin: 0;
      padding: 1rem 0;
      text-align: center;

      &:hover {
        text-decoration: underline;
      }

    }

    & div:last-child p { border-bottom: 0px solid var(--color-link); }

    & ul {
      background-color: var(--color-background-darker);
      border-bottom: 2px solid var(--color-link);
      display: grid;
      font-size: 1.2rem;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
      padding: 1rem 3rem;
    }

    & div:last-child ul {
      border-top: 2px solid var(--color-link);
      border-bottom: 0px solid var(--color-link);
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
    }

    & ul.collapsed { display: none; }

    & ul.extended { display: grid; }

  }

</style>