<script setup>
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
</script>


<template>
  <p style="font-weight: bold;">[Page en cours de construction...]</p>
  <p>Dans le cadre de mes études à l'IUT Informatique de l'Université Lyon 1, j'ai décidé de suivre le parcours RA (Réalisation d'applications : conception, développement, validation).</p>
  <p>Pour celui-ci est proposé un référentiel de compétences dont voici la liste avec, pour chaque compétence, une sous-liste de mes aptitudes correspondantes.</p>
  <div id="grid">
    <div>
      <p>Compétence 1 : Réalisation d'application</p>
      <ul>
        <li>Maîtriser différents types de programmation (itératif, récursif, programmation orientée objet)</li>
        <li>Maîtriser différents langages de programmation (C, Java, Python, PL/SQL, HTML, CSS, PHP, JavaScript)</li>
        <li>Réaliser un programme pour résoudre un problème donné</li>
        <li>Choisir une structure de données adaptée</li>
        <li>Écrire un code lisible et correct</li>
        <li>Réaliser des phases de tests</li>
        <li>Utiliser et créer des API</li>
      </ul>
    </div>
    <div>
      <p>Compétence 2 : Optimiser des applications informatiques</p>
      <ul>
        <li>Analyser un problème</li>
        <li>Utiliser des outils mathématiques dans l'informatique</li>
        <li>Appréhender les différents niveaux de langage</li>
        <li>Utiliser des techniques algorithmiques adaptées</li>
        <li>Comprendre les enjeux et l'impact d'un algorithme</li>
        <li>Anticiper les résultats d'un algorithme</li>
        <li>Optimiser des algorithmes</li>
      </ul>
    </div>
    <div>
      <p>Compétence 3 : Administrer des systèmes informatiques communicants complexes</p>
      <ul>
        <li>Maîtriser l'architecture des systèmes</li>
        <li>Installer et configurer un système d'exploitation et des outils de programmation</li>
        <li>Concevoir des applications communicantes par réseau</li>
        <li>Appliquer les obligations légales, normes et bonnes pratiques</li>
        <li>Mettre en œuvre les corrections et solutions adaptées</li>
        <li>Respecter les contraintes de performances, de coûts et d'éfficacité</li>
        <li>Assurer la pérennité du code</li>
        <li>Rédiger des documentations</li>
      </ul>
    </div>
    <div>
      <p>Compétence 4 : Gérer des données de l'information</p>
      <ul>
        <li>Concevoir efficacement des MCD pour faire des bases de données sécurisées et optimisées</li>
        <li>Mettre à jour des bases de données à travers des requêtes ou un API</li>
        <li>Visualiser des données de manière efficace à l'aide de la programmation</li>
      </ul>
    </div>
    <div>
      <p>Compétence 5 : Conduire un projet</p>
      <ul>
        <li>Identifier les besoins du client / de l'utilisateur</li>
        <li>Planifier et élaborer des processus à mettre en œuvre</li>
        <li>Gérer une équipe et contrôler le travail afin de suivre la planification</li>
        <li>Communiquer de manière efficace avec les acteurs du projet</li>
        <li>Évaluer les performances de l'équipe</li>
      </ul>
    </div>
    <div>
      <p>Compétence 6 : Travailler dans une équipe informatique</p>
      <ul>
        <li>Communiquer avec les membres de son équipe</li>
        <li>Manager une équpe informatique</li>
        <li>Connaître et appliquer les différentes méthodes de développement</li>
        <li>Utiliser des systèmes de gestion de code source pour organiser son travail</li>
        <li>Faire une veille technologique pour être toujours informé sur l'actualité dans l'informatique</li>
      </ul>
    </div>
  </div>
</template>