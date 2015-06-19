'use strict';

angular.module('helloApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


