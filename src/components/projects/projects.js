
export default class ProjectCTRL {
   constructor (projectsData) {
    this.project = projectsData.projects
    this.name = 'hello'
  }
}

ProjectCTRL.$inject = ['projectsData']