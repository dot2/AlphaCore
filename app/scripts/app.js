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
      .otherwise({
        redirectTo: '/'
      });
  });
