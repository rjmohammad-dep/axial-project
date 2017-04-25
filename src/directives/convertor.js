export default class convertor {
  constructor() {
    console.log('here')
    this.restrict = 'A',
      this.scope = {
        ngModel: '='
      }
    this.link = (scope, element, ngModelCtrl) => {
      scope.$watch('ngModel', (val) => {
        if (val.length >= 2 && val[1] === 'k' || val[1] === 'K') {
          var value = val[0] * 1000
          ngModelCtrl.$modelValue = value;
          ngModelCtrl.value = value
          scope.ngModel = value;
        }
        if (val.length >= 2 && val[1] === 'm' || val[1] === 'M') {
          var value = val[0] * 100000
          ngModelCtrl.$modelValue = value;
          ngModelCtrl.value = value
          scope.ngModel = value;
        }
      })
          
    }
  }
}
