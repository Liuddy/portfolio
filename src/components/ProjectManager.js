class Project {
	static id = 0;
	name = ''
	date = ''
	technologies = []
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
projectObject.technologies = ['vuejs', 'vite']
projectObject.description = `Site web me faisant office de portfolio, que vous consultez
							actuellement. Il répertorie tous mes projets et fourni quelques
							informations sur moi.`
projectObject.illustration = 'portfolio_illu'
projectObject.content = `
	<p>Étant dans le domaine de la programmation et appréciant le développement web,
	lorsque je me suis lancé dans la réalisation de mon portfolio, je me suis immédiatement
	tourné vers la conception d'un site web. Cette solution permet dans un premier temps
	de mettre en œuvre et de montrer mes compétences en web, mais aussi de pouvoir partager
	facilement et rapidement mon portfolio.</p>
	<p>J'ai décidé de développer ce site à l'aide du framework Vue.js, que j'avais envie
	de mieux prendre en main. Un portfolio étant grossièrement une vitrine de soi et de
	ses compétences, je savais déjà que je n'aurai besoin que d'un langage agissant côté
	client, en l'occurence JavaScript. Ce projet aurait tout aussi bien pu être réalisé
	en HTML et CSS, mais je souhaitais ajouter un peu d'intéractivité avec le site.</p>
	<p style="font-weight: bold;">[Projet en cours de construction...]</p>
`
projectList.push(projectObject)

projectObject = new Project('12cm³')
projectObject.date = '10/2023 - 02/2024'
projectObject.technologies = ['java', 'php']
projectObject.description = `Jeu vidéo de course réalisé en équipe lors d'une SAÉ.
							Nous avons conçu le moteur de jeu en Java, ainsi qu'un
							site web mettant en avant le projet.`
projectObject.illustration = '12cm3_illu'
projectObject.content = `
	<p style="font-weight: bold;">[Projet en cours de construction...]</p>
`
projectList.push(projectObject)

projectObject = new Project('TOMUSS')
projectObject.date = '05/2024 - 07/2024'
projectObject.technologies = ['javascript', 'python']
projectObject.description = `Application web open source ayant fait l'objet du stage
							validant ma seconde année de formation. Elle est utilisée
							pour le suivi pédagogique en université.`
projectObject.illustration = 'tomuss_illu'
projectObject.content = `
	<p style="font-weight: bold;">[Projet en cours de construction...]</p>
`
projectList.push(projectObject)

export { projectList }