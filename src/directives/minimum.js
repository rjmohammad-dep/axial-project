export default class minimum {
  constructor($parser) {
    console.log('minimum')
    this.restrict = 'A',
      this.scope = false,
      this.require = 'ngModel'
      this.link = function (scope, element, attrs, ngModel)  {
        console.log(ngModel)
        console.log(element)
        console.log(attrs)
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
      }
  }
  
}

