import angular from 'angular'
import uirouter from 'angular-ui-router'
import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngMessage from 'angular-messages';
import ngAria from 'angular-aria';
import projects from './components/projects/projects';
import projectsData from './services/projects.service';
import accordion from 'angular-ui-bootstrap/src/accordion';
export default angular.module('app', [ngMaterial, ngAnimate, ngAria, ngMessage, uirouter, accordion, projectsData, projects])
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
// .controller('ProjectCTRL', projects)
// .name