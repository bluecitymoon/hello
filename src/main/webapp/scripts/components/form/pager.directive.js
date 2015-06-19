/* globals $ */
'use strict';

angular.module('helloApp')
    .directive('helloAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
