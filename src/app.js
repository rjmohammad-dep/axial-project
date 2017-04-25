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
      .accentPalette('pink');
  })
  .directive('convertor', () => new convertor())
  .directive('filter', () => new filter())
  .directive('minimum', () => new minimum())