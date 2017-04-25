export default class filter {
  constructor($filter) {
    this.restrict = 'A',
      this.scope = false,
      this.require = 'ngModel'
      this.link = (scope, element, attrs, ngModel, $filter) => {
        console.log($filter)
        element.bind('keyup', () => {

        })
        scope.$watch(attrs.ngModel, (v) => {
          console.log(element.val)
          element.val().replace(/,/g, '')
            element.val($filter('number')(value, false))
         ngModel.$setViewValue();
         ngModel.$render(); 
        })
      }
  }
  
}
filter.$inject = ['$filter']
