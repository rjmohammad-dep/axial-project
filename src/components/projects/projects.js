
export default class ProjectCTRL {
   constructor (projectsData) {
    this.project =  JSON.stringify(projectsData.projects)
    this.name = 'hello'
  }
}

ProjectCTRL.$inject = ['projectsData']