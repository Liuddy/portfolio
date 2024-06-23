class Project {
	static id = 0;
	name = ''
	date = ''
	mainTech = []
	allTech = []
	description = ''
	illustration = ''
	content = ''

	constructor(name) {
		this.id = Project.id
		Project.id += 1
		this.name = name
	}
}

const projectList = []

// Initiates an object for each of my projects.
let projectObject = new Project('Portfolio')
projectObject.date = '05/2024 - 06/2024'
projectObject.mainTech = ['vuejs', 'vite']
projectObject.allTech = ['html', 'css', 'javascript', 'vuejs', 'vite']
projectObject.description = `Site web me faisant office de portfolio, que vous consultez
							actuellement. Il répertorie tous mes projets et fourni quelques
							informations sur moi.`
projectObject.illustration = 'portfolio_illu'
projectObject.content = `
	<p style="font-weight: bold; margin-bottom: 1rem;">[Projet en cours de construction...]</p>
	<p style="margin-bottom: 1rem;">Étant dans le domaine de la programmation et appréciant le développement web,
	lorsque je me suis lancé dans la réalisation de mon portfolio, je me suis immédiatement
	tourné vers la conception d'un site web. Cette solution permet dans un premier temps
	de mettre en œuvre et de montrer mes compétences en web, mais aussi de pouvoir partager
	facilement et rapidement mon portfolio.</p>
	<p>J'ai décidé de développer ce site à l'aide du framework Vue.js, que j'avais envie
	de mieux prendre en main. Un portfolio étant grossièrement une vitrine de soi et de
	ses compétences, je savais déjà que je n'aurai besoin que d'un langage agissant côté
	client, en l'occurence JavaScript. Ce projet aurait tout aussi bien pu être réalisé
	en HTML et CSS, mais je souhaitais ajouter un peu d'intéractivité avec le site.</p>
`
projectList.push(projectObject)

projectObject = new Project('12cm³')
projectObject.date = '10/2023 - 02/2024'
projectObject.mainTech = ['java', 'sql', 'php']
projectObject.allTech = ['java', 'sql', 'html', 'css', 'php', 'javascript']
projectObject.description = `Jeu vidéo de course réalisé en équipe lors d'une SAÉ.
							Nous avons conçu le moteur de jeu en Java, ainsi qu'un
							site web mettant en avant le projet.`
projectObject.illustration = '12cm3_illu'
projectObject.content = `
	<p style="font-weight: bold; margin-bottom: 1rem;">[Projet en cours de construction...]</p>
	<p><a href="https://12cm3.shawiizz.dev/" target="_blank" style="margin-top: 1rem;
	transition: 0s;">Site web du projet</a></p>
`
projectList.push(projectObject)

projectObject = new Project('TOMUSS')
projectObject.date = '05/2024 - 07/2024'
projectObject.mainTech = ['javascript', 'python']
projectObject.allTech = ['html', 'css', 'javascript', 'python']
projectObject.description = `Application web open source ayant fait l'objet du stage
							validant ma seconde année de formation. Elle est utilisée
							pour le suivi pédagogique en université.`
projectObject.illustration = 'tomuss_illu'
projectObject.content = `
	<p style="font-weight: bold; margin-bottom: 1rem;">[Projet en cours de construction...]</p>
	<p style="margin-bottom: 1rem;">Afin de valider ma deuxième année de formation en BUT
	Informatique, il m'a fallu trouver et effectuer un stage en entreprise dans le milieu de
	la programmation. J'ai ainsi eu l'opportunité de travailler sur l'application web TOMUSS,
	au sein même du département informatique de mon université.</p>
	<p style="margin-bottom: 1rem;">Le sigle TOMUSS signifie « The Online Multi-User Simple
	Spreadsheet », en français « Le Tableur en Ligne Simple et Multi-Utilisateur ». Il s'agit
	d'une application web open source développée au sein de l'Université Lyon 1 permettant la
	consultation et la modification de tableaux de données en simultané par plusieurs utilisateurs.
	En bref, cette l'application sert au suivi pédagogique des étudiants sur tout le campus.</p>
	<p><a href="https://perso.univ-lyon1.fr/thierry.excoffier/TOMUSS/home.html" target="_blank"
	style="margin-top: 1rem; transition: 0s;">Documentation officielle de l'application</a></p>
`
projectList.push(projectObject)

export { projectList }