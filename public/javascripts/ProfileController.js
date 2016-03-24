(function () {
  'use strict'

  angular.module('sense8')
    .controller('ProfileController', function (Home) {
      var self = this;

      self.loggedIn = Home.isloggedIn();
      if(self.loggedIn) {
        self.message = "Hello "+ Home.getUsername();
      }
    });
})();