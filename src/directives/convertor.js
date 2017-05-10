export default class convertor {
  constructor() {
    this.restrict = 'A',
      this.scope = {
        con: '='
      }
    this.require = 'ngModel'
    this.link = (scope, element, attr, ngModel) => {
      scope.$watch('con', (val) => {
        console.log(val)
        if (val) {
        var index = val.length - 1 
          if (val.length >= 2 && (val[index] === 'k' || val[index] === 'K')) {
            val = val.split('').slice(0,index).join('')
            var value =  val * 1000
            console.log(value)
            attr.$modelValue = value;
            attr.value = value
            scope.con = value;
          }
          if (val.length >= 2 && val[index] === 'm' || val[index] === 'M') {
            val = val.split('').slice(0,index).join('')
            var value = val * 100000
            attr.$modelValue = value;
            attr.value = value
            scope.con = value;
          }
        }
      })
    }
  }
}


