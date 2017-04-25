export default class minimum {
  constructor($parser) {
    this.restrict = 'A',
      this.scope = false,
      this.require = 'ngModel'
      this.link = function (scope, element, attrs, ngModel)  {
        // ngModel.$parsers.unshift((viewValue) => {
        //   if(attrs.min > attrs.value) {
        //     ngModel.$setValidity('minim', false)
        //     return undefined
        //   } else {
        //      ngModel.$setValidity('minim', true)
        //     return true
        //   }
        // })
         ngModel.$validators.minim = () => {
           if(attrs.min > Number(element.val())) {
             return false
           }
           return true
         }
         ngModel.$validators.maxi = () => {
           if(attrs.max < Number(element.val())) {
             return false
           }
           return true
         }

          ngModel.$validators.nums = () => {
           if(element.val() % 1 === 0) {
             return true
           }
           return false
         }
      }
  }
  
}

