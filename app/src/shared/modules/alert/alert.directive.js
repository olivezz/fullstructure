/**
 * @description directive to wrap and show different alerts/errors types
 * @ngdoc directive
 * @name shared.directive.alert
 */
(function () {

    'use strict';

    angular
        .module('shared.modules.alert')
        .directive('alert', alert)
        .controller('alertCtrl', alertCtrl);

    alert.$inject = ['alerting'];

    /**
     * @description directive definition function
     * @param {object} alerting
     * @return {object} directive definition object
     */
    function alert(alerting) {

        return {
            templateUrl: './src/shared/modules/alert/alert.html',
            replace:true,
            link: link,
            restrict: 'E',
            scope: {},
            controller: 'alertCtrl'
        };

        function link(scope) {
            scope.currentAlerts = alerting.currentAlerts;
        }
    }

    alertCtrl.$inject = ['$scope', 'alerting'];

    /**
     * @description directive controller logic to manipulate display of
     * different types of alerts
     * @param {object} $scope
     * @param {object} alerting
     */
    function alertCtrl($scope, alerting) {

        $scope.removeAlert = removeAlert;

        /**
         * @description remove alert object to hide error box
         * @param {object} alert
         */
        function removeAlert(alert) {
            alerting.removeAlert(alert);
        }
    }
}());