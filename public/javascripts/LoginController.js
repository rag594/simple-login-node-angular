(function () {
  'use strict';

  angular.module('sense8')
    .controller('LoginController', function (Home, $state) {
      var self = this;

      self.submit = function () {
        Home.login({
          username: self.username,
          password: self.password
        }).then(function (response) {
          console.log("resp",response)
          if(response.data.msg) {
            self.Message = response.data.msg;
            //$state.go('home');
          } else {
            console.log("res",response)
            $state.go('profile');
          }
        }).catch(function (reason) {
          console.log(reason);
          self.Message = reason;
        })
      }
    });
})();