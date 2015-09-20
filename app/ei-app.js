'use strict';
var appModule = angular.module('eiApp',[]);

appModule.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: './make-editable/make-editable.html',
        scope: true
    }
});