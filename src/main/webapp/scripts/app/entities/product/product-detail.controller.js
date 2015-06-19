'use strict';

angular.module('helloApp')
    .controller('ProductDetailController', function ($scope, $stateParams, Product, Store) {
        $scope.product = {};
        $scope.load = function (id) {
            Product.get({id: id}, function(result) {
              $scope.product = result;
            });
        };
        $scope.load($stateParams.id);
    });
