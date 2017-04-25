export default class filter {
  constructor() {
    this.restrict = 'A',
      this.scope = false,
      this.require = 'ngModel'
      this.link = (scope, element, attrs, ngModel) => {
        console.log(attrs.value)
        element.bind('keyup', () => {

        })
        scope.$watch(attrs.ngModel, (v) => {
          console.log(element.val().replace(/,/g, ''))
            element.val($filter('number')(value, false))
         ngModel.$setViewValue();
         ngModel.$render(); 
        })
      }
  }
  
}
filter.$inject = ['$filter']
