(function () {
  'use strict';

  angular.module('sense8', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      var dir = '/javascripts/';

      $stateProvider
        .state('home',{
          url: '/home',
          templateUrl: dir + 'home.html',
          controller: 'HomeController as home'
        })
        .state('login', {
          url: '/login',
          templateUrl: dir + 'login.html',
          controller: 'LoginController as login'
        })
        .state('profile',{
          url:'/profile',
          templateUrl: dir + 'profile.html',
          controller:'ProfileController as profile'
        })
        .state('logout',{
        url:'/home',
        templateUrl: dir + 'home.html',
        controller:'HomeController as home'
      })
        .state('about',{
          url:'/page',
          templateUrl: dir + 'about.html'
        })
        .state('#',{
          url:'/',
          templateUrl: dir + 'another.html'
        })
    });

})();