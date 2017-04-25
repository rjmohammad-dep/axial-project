class ProjectCTRL {
   constructor (projectsData, $mdDialog,  $mdSidenav) {
    this.projects = projectsData
    this.name = 'hello'
    this.$mdDialog = $mdDialog
  }
  editProject (index) {
    this.$mdDialog.show({
      template: require('./dialogForm.html'),
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false,
      controller: ($scope) => {
         let { headline, target_check_size_min, target_check_size_max, target_revenue_min, target_revenue_max, target_ebitda_min, target_ebitda_max } = this.projects.projects[index]
        $scope.headline = headline
        $scope.checkMin = target_check_size_min
        $scope.checkMax = target_check_size_max
        $scope.revenueMin = target_revenue_min
        $scope.revenueMax = target_revenue_max
        $scope.ebitdaMin = target_ebitda_min
        $scope.ebitdaMax = target_ebitda_max
      }
    })
  }
  show (ev) {
    console.log(ev)
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

export default angular.module('ProjectCTRL', [])
.controller('ProjectCTRL', ProjectCTRL)
.name