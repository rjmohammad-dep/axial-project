import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import 'angular-touch';
import ngAria from 'angular-aria';
import projects from './components/projects/projects';
import projectsData from './services/projects.service';
import convertor from './directives/convertor'
import filter from './directives/filter'
import minimum from './directives/minimum'
import { convertNums } from './filter/convertNums'

export default angular.module('app', [ngMaterial, ngAnimate, ngAria, uirouter, projectsData, projects, ngMessages])
  .config(($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) => {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    let states = [
      {
        name: 'projects',
        url: '/',
        template: require('./components/projects/projects.html'),
        controller: 'ProjectCTRL',
        controllerAs: 'pro'
      }
    ];
    states.forEach((state) => {
      $stateProvider.state(state)
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('green');
  })
  .filter('convert', () => {
      return (val) => {
        console.log(value)
    var value = val
      if (val.length >= 2 && (val[index] === 'k' || val[index] === 'K')) {
            val = val.split('').slice(0,index).join('')
            value =  val * 1000
            return value
      }
        if (val.length >= 2 && val[index] === 'm' || val[index] === 'M') {
            val = val.split('').slice(0,index).join('')
            value = val * 100000
            return value
        }
        return value
  }
  })
  .directive('convertor', () => new convertor())
  .directive('filter', ['$filter', 'convert', function($filter, convert) {
    return new filter ($filter)
  }])
  .directive('minimum', () => new minimum())
  // .directive('format', ['$filter', function ($filter) {
  //   //Does formats the numbers but causes issues with number convertor 'k' and 'm'
  //   return {
  //     require: 'ngModel',
  //     link: function (scope, elem, attrs, ngModel) {
  //       if (!ngModel) {
  //         return;
  //       }
  //       if (ngModel.$modelValue.length > 3) {
  //         ngModel.$formatters.unshift(function (a) {
  //           return $filter('number')(ngModel.$modelValue)
  //         });
  //       }

  //       ngModel.$parsers.unshift(function (viewValue) {
  //         var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
  //         elem.val($filter('number')(plainNumber));
  //         return plainNumber;
  //       });
  //     }
  //   }
  // }])