import angular from 'angular'
import uirouter from 'angular-ui-router'
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';
import projects from './components/projects/projects'
import projectsData from './services/projects.service'
export default angular.module('app', [angularMaterial, uirouter, projectsData])
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
.name