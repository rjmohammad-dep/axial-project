
class ProjectCTRL {
   constructor (projectsData, $mdDialog,  $mdSidenav) {
     console.log( $mdDialog)
    this.projects = projectsData
    this.name = 'hello'
    this.$mdDialog = $mdDialog
  }

  show (ev) {
    console.log(this.$mdDialog)
   this.$mdDialog.show(
     this.$mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  }
}
ProjectCTRL.$inject = ['projectsData', '$mdDialog']

export default angular.module('ProjectCTRL', ['ngMaterial', "ngAnimate", "ngAria"])
.controller('ProjectCTRL', ProjectCTRL)
.name