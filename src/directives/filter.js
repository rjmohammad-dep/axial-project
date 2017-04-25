export default class filter {
  constructor($scope) {
     /*@ngInject*/
    
    this.restrict = 'A',
      this.scope = false,
      this.filter = $filter,
      this.require = 'ngModel'
    this.link = (scope, element, attrs, ngModel, $filter) => {
        element.val().replace(/,/g, '');
        element.val(this.filter('number')(value, false));
        ngModel.$setViewValue();
        ngModel.$render();
    }
  }

}
filter.$inject = ['$http', '$filter'];
