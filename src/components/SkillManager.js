const skillTab = []
let skillList = ['C', '2',
  'C++', '2',
  'CSS', '4',
  'Docker', '1',
  'Git', '4',
  'HTML', '4',
  'Java', '4',
  'JavaScript', '4',
  'MongoDB', '3',
  'MySQL', '3',
  'NoSQL', '3',
  'PHP', '3',
  'Python', '3',
  'SQL', '3',
  'Symfony', '2',
  'TypeScript', '3',
  'Vite', '3',
  'Vue.js', '4']
skillTab.push(skillList)

skillList = ['Réaliser une application', '4',
  'Maîtriser différents types de programmation', '4',
  'Maîtriser différents langages de programmation', '4',
  'Appréhender les différents niveaux de langage', '3',
  'Réaliser un programme pour résoudre un problème', '4',
  'Choisir une structure de données adaptée', '3']
skillTab.push(skillList)

skillList = ['Optimiser une application', '3',
  'Utiliser des techniques algorithmiques adaptées', '4',
  'Comprendre les enjeux et l\'impact d\'un algorithme', '3',
  'Respecter les contraintes de performance, de coût et d\'éfficacité', '3',
  'Anticiper les résultats d\'un algorithme', '4',
  'Optimiser un algorithme', '3']
skillTab.push(skillList)

skillList = ['Maintenir une application', '3',
  'Écrire un code lisible et correct', '4',
  'Réaliser des phases de tests', '2',
  'Mettre en œuvre les corrections et solutions adaptées', '3',
  'Rédiger une documentation', '3',
  'Appliquer les obligations légales, normes et bonnes pratiques', '3']
skillTab.push(skillList)

skillList = ['Administrer un système', '2',
  'Maîtriser l\'architecture des systèmes', '2',
  'Installer et configurer un système d\'exploitation', '3',
  'Concevoir une application communicante par réseau', '1',
  'Utiliser et créer une API', '3']
skillTab.push(skillList)

skillList = ['Gérer des données', '3',
  'Concevoir une base de données sécurisée et optimisée', '3',
  'Mettre à jour une base de données à travers des requêtes ou un API', '3',
  'Visualiser des données de manière efficace à l\'aide de la programmation', '4']
skillTab.push(skillList)

skillList = ['Concevoir une idée', '4',
  'Imaginer et mettre en place un concept', '4',
  'Créer un prototype', '3',
  'Adapter une idée en fonction des retours', '4',
  'Concevoir une interface utilisateur ergonomique', '3',
  'Améliorer l\'expérience utilisateur', '4']
skillTab.push(skillList)

skillList = ['Conduire un projet', '2',
  'Identifier les besoins du client / de l\'utilisateur', '3',
  'Planifier et élaborer des processus à mettre en œuvre', '3',
  'Gérer une équipe et contrôler le travail afin de suivre la planification', '2',
  'Évaluer les performances de l\'équipe', '2']
skillTab.push(skillList)

skillList = ['Travailler en équipe', '3',
  'Communiquer avec les membres de son équipe', '3',
  'Connaître et appliquer les différentes méthodes de développement', '3',
  'Utiliser un système de gestion de code source', '4',
  'Réaliser une veille technologique', '2']
skillTab.push(skillList)

function getSkillLevelIcons(skillLvl) {
  let starsIcons = ''
  for (let i = 0; i < parseInt(skillLvl); i++)
    starsIcons += String.fromCharCode(9733)
  for (let k = 0; k < 5 - parseInt(skillLvl); k++)
    starsIcons += String.fromCharCode(9734)
  return starsIcons
}

export { skillTab, getSkillLevelIcons }