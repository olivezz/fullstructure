/**
 * @description A logOut directive to handle only logout process
 */
(function () {

    'use strict';

    angular
        .module('shared.directives.logOut',[
            'shared.modules.user'
        ])
        .directive('logOut', logOut)
        .controller('logOutCtrl', logOutCtrl);

    /**
     * @description Directive definition function
     * @returns {Object} Directive definition object
     */
    function logOut() {

        return {
            restrict: 'A',
            controller: 'logOutCtrl'
        };
    }

    logOutCtrl.$inject = [
        '$scope',
        'authenticate'
    ];

    /**
     * @description logOut controller
     * @param {Object} $scope
     * @param {Object} authenticate
     */
    function logOutCtrl($scope, authenticate) {

        $scope.logOut = logOut;

        /**
         * @description call logOut inside authenticate service
         */
        function logOut(){
            authenticate.logOut();
        }
    }

}());

