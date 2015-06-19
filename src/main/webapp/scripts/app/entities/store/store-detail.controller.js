'use strict';

angular.module('helloApp')
    .controller('StoreDetailController', function ($scope, $stateParams, Store, Product) {
        $scope.store = {};
        $scope.load = function (id) {
            Store.get({id: id}, function(result) {
              $scope.store = result;
            });
        };
        $scope.load($stateParams.id);
    });
