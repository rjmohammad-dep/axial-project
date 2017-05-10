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
        var index = data.length - 1
        if (data % 1 === 0 || data[index] === 'k' || data[index] === 'K' || data[index] === 'm' || data[index] === 'M') {
          return true
        }
        return false
      }
    }
  }

}

