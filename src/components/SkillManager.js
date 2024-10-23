const skillTab = []
let skillList = ['Réaliser une application',
  'Maîtriser différents types de programmation',
  'Maîtriser différents langages de programmation',
  'Appréhender les différents niveaux de langage',
  'Réaliser un programme pour résoudre un problème',
  'Choisir une structure de données adaptée']
skillTab.push(skillList)

skillList = ['Optimiser une application',
  'Utiliser des techniques algorithmiques adaptées',
  'Comprendre les enjeux et l\'impact d\'un algorithme',
  'Respecter les contraintes de performance, de coût et d\'éfficacité',
  'Anticiper les résultats d\'un algorithme',
  'Optimiser un algorithme']
skillTab.push(skillList)

skillList = ['Maintenir une application',
  'Écrire un code lisible et correct',
  'Réaliser des phases de tests',
  'Mettre en œuvre les corrections et solutions adaptées',
  'Rédiger une documentation',
  'Appliquer les obligations légales, normes et bonnes pratiques']
skillTab.push(skillList)

skillList = ['Administrer un système communicant',
  'Maîtriser l\'architecture des systèmes',
  'Installer et configurer un système d\'exploitation',
  'Concevoir une application communicante par réseau',
  'Utiliser et créer une API']
skillTab.push(skillList)

skillList = ['Gérer des données',
  'Concevoir une base de données sécurisée et optimisée',
  'Mettre à jour une base de données à travers des requêtes ou un API',
  'Visualiser des données de manière efficace à l\'aide de la programmation']
skillTab.push(skillList)

skillList = ['Concevoir une idée',
  'Imaginer et mettre en place un concept',
  'Créer un prototype',
  'Adapter une idée en fonction des retours',
  'Concevoir une interface utilisateur ergonomique',
  'Améliorer l\'expérience utilisateur']
skillTab.push(skillList)

skillList = ['Conduire un projet',
  'Identifier les besoins du client / de l\'utilisateur',
  'Planifier et élaborer des processus à mettre en œuvre',
  'Gérer une équipe et contrôler le travail afin de suivre la planification',
  'Évaluer les performances de l\'équipe']
skillTab.push(skillList)

skillList = ['Travailler dans une équipe',
  'Communiquer avec les membres de son équipe',
  'Connaître et appliquer les différentes méthodes de développement',
  'Utiliser un système de gestion de code source',
  'Réaliser une veille technologique']
skillTab.push(skillList)

function switchClassList() {
  let list = event.target.parentNode.getElementsByTagName('ul')[0]
  list.classList.toggle('collapsed')
  list.classList.toggle('extended')
}

export { skillTab, switchClassList }