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
projectObject.date = '05/2024'
projectObject.technologies = ['vuejs', 'vite']
projectObject.description = 'Site web me servant de portfolio. Développé en Vue.js, il répertorie'
							+ ' tous mes projets et offre quelques informations sur moi.'
projectObject.illustration = 'logo_dark_1.png'
projectObject.content = '<p>AHHHHHHHHHHHHHHH</p>'
projectList.push(projectObject)

projectObject = new Project('ACCM')
projectObject.date = '05/2024'
projectObject.technologies = ['vuejs', 'vite']
projectObject.description = 'Site web me servant de portfolio. Développé en Vue.js, il répertorie'
projectObject.illustration = 'logo_dark_1.png'
projectObject.content = '<img src="/src/assets/icons/vite.png" alt="L\'alternative">'
projectList.push(projectObject)

export { projectList }