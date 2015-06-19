'use strict';

angular.module('helloApp')
    .controller('StoreController', function ($scope, Store, Product, ParseLinks) {
        $scope.stores = [];
        $scope.products = Product.query();
        $scope.page = 1;
        $scope.loadAll = function() {
            Store.query({page: $scope.page, per_page: 20}, function(result, headers) {
                $scope.links = ParseLinks.parse(headers('link'));
                $scope.stores = result;
            });
        };
        $scope.loadPage = function(page) {
            $scope.page = page;
            $scope.loadAll();
        };
        $scope.loadAll();

        $scope.showUpdate = function (id) {
            Store.get({id: id}, function(result) {
                $scope.store = result;
                $('#saveStoreModal').modal('show');
            });
        };

        $scope.save = function () {
            if ($scope.store.id != null) {
                Store.update($scope.store,
                    function () {
                        $scope.refresh();
                    });
            } else {
                Store.save($scope.store,
                    function () {
                        $scope.refresh();
                    });
            }
        };

        $scope.delete = function (id) {
            Store.get({id: id}, function(result) {
                $scope.store = result;
                $('#deleteStoreConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Store.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteStoreConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.refresh = function () {
            $scope.loadAll();
            $('#saveStoreModal').modal('hide');
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.store = {name: null, address: null, x: null, y: null, id: null};
            $scope.editForm.$setPristine();
            $scope.editForm.$setUntouched();
        };
    });
