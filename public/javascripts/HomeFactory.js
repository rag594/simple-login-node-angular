(function  () {
  'use strict';

  angular.module('sense8')

    .factory('Home', function  ($http, $window) {
      var username;
      var id;

      function login (data) {
        return $http.post('/login', data)
          .then(function (response) {
            console.log(response);
            if(response.data.user) {
              username = response.data.user.username;
              id = response.data.user.userId;
              $window.localStorage.setItem('username', username);
              $window.localStorage.setItem('id', id);
              return response;
            } else {
              return response;
            }
          })
      }
      function logout(){
        return ($window.localStorage.clear() && $window.cookieStore.clear());

      }
      function isloggedIn(){
        if(getUsername() && getUserId())
          return true;
        else
          return false;
      }
      function getUserId () {
        id = $window.localStorage.getItem('id');
        return id;
      }
      function getUsername () {
        username = $window.localStorage.getItem('username');
        return username;
      }

      return {
        login: login,
        getUserId : getUserId,
        getUsername: getUsername,
        isloggedIn : isloggedIn,
        logout : logout
      }
    });


})();