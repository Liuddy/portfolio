import projectJsonList from '@/data/projects.json'

class Project {
  static id = 0
  name = ''
  type = []
  date = []
  illustration = []
  description = []
  links = []
  mainTech = []
  allTech = []
  skills = []
  team = ''
  environment = ''

  constructor(project) {
    this.id = Project.id++
    this.name = project.name
    this.type = project.type
    project.date.forEach((date) => this.date.push(this.formatDate(date)))
    this.illustration = project.illustration
    this.description = project.description
    this.links = project.links
    this.mainTech = project.mainTech
    this.allTech = project.allTech
    this.skills = project.skills
    this.team = project.team
    this.environment = project.environment
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' })
  }
}

class ProjectManager {
  projectList = []

  constructor() {
    for (let project of projectJsonList) this.projectList.push(new Project(project))
  }

  getFilteredProjects(params) {
    let filteredList = []
    for (let project of this.projectList)
      if (params.get('skill')) {
        let skill = params.get('skill')
        if (project.skills.includes(parseInt(skill)))
          filteredList.push(project)
      }
    return filteredList
  }
}

export const projectManager = new ProjectManager()