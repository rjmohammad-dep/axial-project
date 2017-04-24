import angular from 'angular'
import uirouter from 'angular-ui-router'
import projects from './components/projects/projects'
export default angular.module('app', [uirouter])
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
   $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    let states = [
      {
        name: 'projects',
        url: '/',
        template: require('./components/projects/projects.html'),
        controller: 'ProjectCTRL',
        controllerAs: 'projects'
      }
    ]
    states.forEach((state) => {
      $stateProvider.state(state)
    })
})
.controller('ProjectCTRL', projects)