'use strict';

angular.module('helloApp')
    .factory('Product', function ($resource, DateUtils) {
        return $resource('api/products/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.expireDate = DateUtils.convertLocaleDateFromServer(data.expireDate);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.expireDate = DateUtils.convertLocaleDateToServer(data.expireDate);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.expireDate = DateUtils.convertLocaleDateToServer(data.expireDate);
                    return angular.toJson(data);
                }
            }
        });
    });
