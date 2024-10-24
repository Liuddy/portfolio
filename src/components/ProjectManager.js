class Project {
	static id = 0
	name = ''
	type = []
	date = []
	description = ''
	illustration = ''
	content = []
	links = []
	mainTech = []
	allTech = []
	skills = []
	team = ''
	environment = ''

	constructor(name) {
		this.id = Project.id++
		this.name = name
	}
}

function formatDate(date) { return date.toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' }) }

const projectList = []

// Initiates an object for each of my projects.
let projectObject = new Project('Portfolio')
projectObject.type = ['Site web']
projectObject.date = [formatDate(new Date('2024-05')), formatDate(new Date('2024-10'))]
projectObject.description = `Site web me faisant office de portfolio, que vous consultez
	actuellement. Il répertorie tous mes projets et fournit quelques informations sur moi.`
projectObject.illustration = 'portfolio_illu'
projectObject.content = [
	`Étant dans le domaine de la programmation et appréciant le développement web, lorsque
	je me suis lancé dans la réalisation de mon portfolio, je me suis immédiatement tourné vers
	la conception d'un site web. Cette solution permet, dans un premier temps, de mettre en œuvre
	et de montrer mes compétences en web, mais aussi et surtout de pouvoir partager facilement et
	rapidement mon portfolio.`,
	`J'ai décidé de développer ce site à l'aide du framework Vue.js, que j'avais envie de mieux
	prendre en main. Un portfolio étant grossièrement une vitrine de soi et de ses compétences, je
	savais déjà que je n'aurais besoin que d'un langage agissant côté client, en l'occurrence
	JavaScript. Ce projet aurait tout aussi bien pu être réalisé en HTML et CSS pur, mais je
	souhaitais ajouter un peu d'interactivité dans mon site.`,
	`La réalisation de ce site m'a surtout apporté de l'expérience pour tout ce qui concerne les
	prises de décision. Ayant été seul acteur du projet, j'ai dû décider de chacun de ses aspects,
	des technologies à utiliser aux choix de design et d'ergonomie.`
]
projectObject.links.push(['https://github.com/Liuddy/portfolio', 'Dépôt GitHub'])
projectObject.mainTech = ['vuejs', 'vite']
projectObject.allTech = ['html', 'css', 'javascript', 'vuejs', 'vite']
projectObject.skills = [0, 1, 5]
projectObject.team = 'Solo'
projectObject.environment = 'Personnel'
projectList.push(projectObject)

projectObject = new Project('12cm³')
projectObject.type = ['Jeu vidéo', 'Site web']
projectObject.date = [formatDate(new Date('2023-10')), formatDate(new Date('2024-02'))]
projectObject.description = `Jeu vidéo de course réalisé en équipe lors d'un projet
	universitaire. Le moteur de jeu a été fait en Java et un site web en JS et PHP
	permet de mettre en avant le projet.`
projectObject.illustration = '12cm3_illu'
projectObject.content = [
	`Jeu vidéo développé dans le cadre de mes études lors d'un projet en équipe. Le sujet était
	libre, mais quelques contraintes nous étaient imposées telles que le fait de n'utiliser que des
	technologies vues en cours ou encore de faire usage d'une base de données`,
	`12cm³ est un jeu de course arcade et solo en 2D vu de dessus. Il permet au joueur de
	personnaliser ses propres véhicules selon différents paramètres et de concourir en
	contre-la-montre sur les circuits officiels ou bien créés par la communauté. Le meilleur score
	de chaque joueur est alors affiché à travers un leaderboard par circuit`,
	`Du côté technique, nous avons choisi de construire le moteur de jeu à partir de zéro, ce qui
	représenta un challenge vraiment stimulant et m'a permit de grandement renforcer mes
	connaissances en Java. Au final, l'envergure du projet est telle que nous avons développé un
	moteur de jeu, un jeu, un éditeur de circuits, une base de données, un site web et une API pour
	lier le tout !`,
	`Ce projet fut l'un des plus conséquents que j'ai pu réaliser, autant en termes de taille que
	de temps, et il ne représente pourtant qu'un prototype de ce que nous avions envisagé. Il m'a
	apporté énormément d'expérience sur l'ensemble de mes compétences, notamment en ce qui concerne
	la gestion du travail en équipe et le respect des dates de rendu.`
]
projectObject.links.push(['https://12cm3.shawiizz.dev/', 'Site web'],
	['https://12cm3.shawiizz.dev/gameBinaries/12cm3-ver-1.0.6.exe', 'Télécharger le jeu'],
	['getImgPath(\'files\', \'12cm3\')', 'Notice d\'utilisation'])
projectObject.mainTech = ['java', 'sql', 'php']
projectObject.allTech = ['java', 'sql', 'html', 'css', 'php', 'javascript']
projectObject.skills = [0, 1, 2, 3, 4, 5, 6, 7]
projectObject.team = 'Équipe'
projectObject.environment = 'Académique'
projectList.push(projectObject)

projectObject = new Project('TOMUSS')
projectObject.type = ['Application web']
projectObject.date = [formatDate(new Date('2024-05')), formatDate(new Date('2025-09'))]
projectObject.description = `Application web open source ayant fait l'objet d'un stage
	puis d'une alternance pour valider ma formation. Elle est utilisée pour le suivi
	pédagogique des étudiants.`
projectObject.illustration = 'tomuss_illu'
projectObject.content = [
	`Afin de valider ma deuxième année de formation en BUT Informatique, il m'a fallu trouver et
	effectuer un stage en entreprise dans le milieu de la programmation. J'ai ainsi eu
	l'opportunité de travailler sur l'application web TOMUSS, au sein même du département
	informatique de mon université.`,
	`Le sigle TOMUSS signifie « The Online Multi-User Simple Spreadsheet ». Il s'agit d'une
	application web open source développée au sein de l'Université Lyon 1 permettant la
	consultation et la modification de tableaux de données en simultané par plusieurs utilisateurs.
	Cette application sert au suivi pédagogique des étudiants sur tout le campus, permettant la
	gestion de leurs notes ou encore de leurs absences.`,
	`L'application est développée en JavaScript pour le frontend et en Python pour le backend.
	J'ai majoritairement travaillé dessus du côté frontend afin d'apporter diverses améliorations
	et corrections pour l'expérience utilisateur. J'ai pu réaliser à travers ce projet ce que
	représente réellement l'analyse et l'appréhension d'un code existant. Par ailleurs, j'ai aussi
	acquis une plus grande maîtrise des usages de Git et une meilleure familiarisation avec les
	systèmes Unix.`,
	`Ce stage s'étant très bien déroulé et ayant grandement apprécié sa réalisation, j'ai pu
	poursuivre mon travail sur l'application lors de ma troisième année de BUT, durant laquelle il
	s'agit cette fois-ci de réaliser l'année en alternance.`
]
projectObject.links.push(['https://perso.univ-lyon1.fr/thierry.excoffier/TOMUSS/home.html',
	'Documentation officielle de l\'application'])
projectObject.mainTech = ['javascript', 'python']
projectObject.allTech = ['html', 'css', 'javascript', 'python']
projectObject.skills = [0, 1, 2, 7]
projectObject.team = 'Équipe'
projectObject.environment = 'Académique'
projectList.push(projectObject)

export { projectList }