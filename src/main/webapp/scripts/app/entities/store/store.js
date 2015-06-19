'use strict';

angular.module('helloApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('store', {
                parent: 'entity',
                url: '/store',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Stores'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/store/stores.html',
                        controller: 'StoreController'
                    }
                },
                resolve: {
                }
            })
            .state('storeDetail', {
                parent: 'entity',
                url: '/store/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Store'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/store/store-detail.html',
                        controller: 'StoreDetailController'
                    }
                },
                resolve: {
                }
            });
    });
