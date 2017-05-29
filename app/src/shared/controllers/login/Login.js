/**
 * @description
 */
(function () {

    'use strict';

    angular
        .module('shared.controllers.login',[
            'shared.modules.user'
        ])
        .controller('Login', Login);

    Login.$inject = [
        '$scope',
        'authenticate'
    ];

    /**
     * @description
     * @param {Object} $scope
     * @param {Object} authenticate
     * @constructor
     */
    function Login(
        $scope,
        authenticate
    ) {

        $scope.user = {
            username:'',
            password:''
        };
        $scope.login = login;

        function login(){

            authenticate.login($scope.user);
        }
    }

}());

