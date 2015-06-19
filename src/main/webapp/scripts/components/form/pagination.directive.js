/* globals $ */
'use strict';

angular.module('helloApp')
    .directive('helloAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
