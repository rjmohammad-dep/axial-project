export default class convertor {
  constructor() {
    console.log('here')
    this.restrict = 'A',
      this.scope = {
        con: '='
      }
    this.require = 'ngModel'
    this.link = (scope, element, attr, ngModel) => {
      scope.$watch('con', (val) => {
        if (val) {
          if (val.length >= 2 && val[1] === 'k' || val[1] === 'K') {
            console.log('here')
            var value = val[0] * 1000
            attr.$modelValue = value;
            attr.value = value
            scope.con = value;
          }
          if (val.length >= 2 && val[1] === 'm' || val[1] === 'M') {
            var value = val[0] * 100000
            attr.$modelValue = value;
            attr.value = value
            scope.con = value;
          }
        }
      })
    }
  }
}


