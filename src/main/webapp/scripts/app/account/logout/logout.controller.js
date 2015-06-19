'use strict';

angular.module('helloApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
