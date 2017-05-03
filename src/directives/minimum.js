export default class minimum {
  constructor($parser) {
    this.restrict = 'A',
      this.scope = false,
      this.require = 'ngModel'
    this.link = function (scope, element, attrs, ngModel) {
      ngModel.$validators.minim = () => {
        // var data = element.val().split(',').join('')
        if (attrs.min > Number(element.val())) {
          return false
        }
        return true
      }
      ngModel.$validators.maxi = () => {
        if (attrs.max < Number(element.val())) {
          return false
        }
        return true
      }

      ngModel.$validators.nums = () => {
        var data = element.val().split(',').join('')
        if (data % 1 === 0 || data[1] === 'k' || data[1] === 'K' || data[1] === 'm' || data[1] === 'M') {
          return true
        }
        return false
      }
    }
  }

}

