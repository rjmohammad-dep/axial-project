export default class filter {
  constructor($filter) {
    this.restrict = 'A',
    this.scope = false,
    this.require = 'ngModel'
    this.link = (scope, element, attrs, ngModel) => {

      var value = ngModel.$viewValue
      console.log(value)
      // console.log(val)
      // ngModel.$setViewValue();
      ngModel.$render(element.val($filter('number')(value, false)));
    }
  }

}
// filter.$inject = ['$filter'];
