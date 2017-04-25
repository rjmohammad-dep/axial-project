export default class filter {
  constructor() {
    this.restrict = 'A',
      this.scope = {
        onChange: '='
      },
      this.require = 'ngModel'
    this.link = (scope, element, attrs, ngModel) => {
      scope.$watch('onChange', (v) => {
        console.log(element.val);
        element.val().replace(/,/g, '');
        element.val($filter('number')(value, false));
        ngModel.$setViewValue();
        ngModel.$render();
      })
    }
  }

}
filter.$inject = [];
