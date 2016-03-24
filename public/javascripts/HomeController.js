(function  () {
  'use strict'

  angular.module('sense8')
    .controller('HomeController', function  (Home) {
      var self = this;

      self.loggedin = Home.isloggedIn();

      self.logout = function(){
        Home.logout();
        self.loggedin = false;
      };
    });
})();