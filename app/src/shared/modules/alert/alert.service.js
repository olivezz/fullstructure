/**
 * @description
 * a service to provide feedback messages for typical user actions with the
 * handful of available and flexible alert messages.
 * @ngdoc factory
 * @name alerting
 */
(function () {
    'use strict';

    angular
        .module('shared.modules.alert')
        .factory('alerting', alerting);

    alerting.$inject = ['$log', '$timeout'];

    /**
     * @description a factory to handle different types of alert across all
     * application modules
     * @param {object} $log
     * @param {function }$timeout
     * @return {object}
     */
    function alerting($log, $timeout) {

        var currentAlerts = [];
        var alertTypes = ["success", "info", "warning", "danger"];
        var message = '';
        var consoleMessage = '';

        var service = {
            warn: warn,
            danger: danger,
            info: info,
            success: success,
            addAlert: addAlert,
            removeAlert: removeAlert,
            error: error,
            currentAlerts: currentAlerts,
            alertTypes: alertTypes,
            message: message
        };

        return service;

        /**
         * @description add warn message
         * @param {String} message
         */
        function warn(message) {
            addAlert("warning", message);
        }

        /**
         * @description add danger message to alert box and console if any
         * @param {String} message
         */
        function danger(message) {

            if (service.message.length) {
                message = service.message;
                $log.error(service.consoleMessage + message);
                service.message = '';
            }
            addAlert("danger", message);
        }

        /**
         * @description add informative message
         * @param {String} message
         */
        function info(message) {
            addAlert("info", message);
        }

        /**
         * @description add success message
         * @param {String} message
         */
        function success(message) {
            addAlert("success", message);
        }

        /**
         * @description add and alert message to currentAlerts to be displayed
         * and to be removed in 5 seconds
         * @param {String} type
         * @param {String} message
         */
        function addAlert(type, message) {
            var alert = {type: type, message: message};
            currentAlerts.push(alert);

            $timeout(function () {
                removeAlert(alert);
            }, 5000);
        }

        /**
         * @description remove an alert message from currentAlerts
         * @param {Object} alert
         */
        function removeAlert(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        }

        /**
         * @description add an error message for application errors
         * @param {String} description
         * @return {Function}
         */
        function error(description) {
            return function () {
                danger(description);
            };
        }
    }
}());