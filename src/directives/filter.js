export default class filter {
  constructor($filter) {
    this.restrict = 'A',
    this.scope = false,
    this.require = 'ngModel'
    this.link = (scope, elem, attrs, ngModel) => {
    if (!ngModel) {
          return;
        }
        if (ngModel.$modelValue.length > 3) {
          ngModel.$formatters.unshift(function (a) {
            return $filter('convert')(ngModel.$modelValue)
          });
        }

        ngModel.$parsers.unshift(function (viewValue) {
          var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
          elem.val($filter('convert')(plainNumber));
          return plainNumber;
        });

      // ngModel.$render(element.val($filter('number')(value, false)));
    }
  }

}
filter.$inject = ['convert'];
