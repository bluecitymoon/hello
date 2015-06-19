'use strict';

angular.module('helloApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('product', {
                parent: 'entity',
                url: '/product',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Products'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/product/products.html',
                        controller: 'ProductController'
                    }
                },
                resolve: {
                }
            })
            .state('productDetail', {
                parent: 'entity',
                url: '/product/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Product'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/product/product-detail.html',
                        controller: 'ProductDetailController'
                    }
                },
                resolve: {
                }
            });
    });
