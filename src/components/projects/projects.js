class ProjectCTRL {
  constructor(projectsData, $mdDialog, $mdSidenav) {
    this.projects = projectsData
    this.name = 'hello'
    this.$mdDialog = $mdDialog
  }
  editProject(index) {
    this.$mdDialog.show({
      template: require('./dialogForm.html'),
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false,
      controller: ($scope, $mdDialog) => {
        let { headline, target_check_size_min, target_check_size_max, target_revenue_min, target_revenue_max, target_ebitda_min, target_ebitda_max } = this.projects.projects[index];
        $scope.headline = headline;
        $scope.checkMin = target_check_size_min;
        $scope.checkMax = target_check_size_max;
        $scope.revenueMin = target_revenue_min;
        $scope.revenueMax = target_revenue_max;
        $scope.ebitdaMin = target_ebitda_min;
        $scope.ebitdaMax = target_ebitda_max;
        $scope.save = () => {
          let obj = {
            headline: $scope.headline,
            target_check_size_min: $scope.checkMin,
            target_check_size_max: $scope.checkMax,
            target_revenue_min: $scope.revenueMin,
            target_revenue_max: $scope.revenueMax,
            target_ebitda_min: $scope.ebitdaMin,
            target_ebitda_max: $scope.ebitdaMax,
          };
          this.projects.update(obj, index);
          $mdDialog.hide();
        }
      }
    })
  }
  addProject() {
    this.$mdDialog.show({
      template: require('./dialogForm.html'),
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false,
      controller: ($scope, $mdDialog) => {
        $scope.headline;
        $scope.checkMin;
        $scope.checkMax;
        $scope.revenueMin;
        $scope.revenueMax;
        $scope.ebitdaMin;
        $scope.ebitdaMax;
        $scope.save = () => {
          let obj = {
            headline: $scope.headline,
            target_check_size_min: $scope.checkMin,
            target_check_size_max: $scope.checkMax,
            target_revenue_min: $scope.revenueMin,
            target_revenue_max: $scope.revenueMax,
            target_ebitda_min: $scope.ebitdaMin,
            target_ebitda_max: $scope.ebitdaMax,
          };
          this.projects.add(obj);
          $mdDialog.hide();
        }
      }
    })
  }
}
ProjectCTRL.$inject = ['projectsData', '$mdDialog']

export default angular.module('ProjectCTRL', [])
  .controller('ProjectCTRL', ProjectCTRL)
  .name