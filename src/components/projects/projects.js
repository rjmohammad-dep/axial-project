
export default class ProjectCTRL {
   constructor (projectsData) {
    this.projects = projectsData
    this.name = 'hello'
  }

}

ProjectCTRL.$inject = ['projectsData']