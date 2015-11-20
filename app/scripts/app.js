'use strict';

/**
 * @ngdoc overview
 * @name alphacoreApp
 * @description
 * # alphacoreApp
 *
 * Main module of the application.
 */
angular
  .module('alphacoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/packages', {
        templateUrl: 'views/packages.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      //PROJECT VIEWS START HERE------------------///////////////
      .when('/txpoolspa', {
        templateUrl: 'views/project-views/txpoolspa.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/rawcomplextion', {
        templateUrl: 'views/project-views/rawcomplextion.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/travelers', {
        templateUrl: 'views/project-views/world-travelers.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/student-port', {
        templateUrl: 'views/project-views/student-port.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/photography', {
        templateUrl: 'views/project-views/photography.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/personal-trainer', {
        templateUrl: 'views/project-views/personal-trainer.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/wedding', {
        templateUrl: 'views/project-views/wedding.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/mothers-day', {
        templateUrl: 'views/project-views/mothers-day.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
