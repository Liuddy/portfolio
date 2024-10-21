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

export { skillTab, switchClassList }