/**
 * @description Application's routes
 */
(function () {

    "use strict";

    angular.module('fmreApp')
        .config(config)
        .value('lastPathBeforeLogin', '')
        .value('loginRedirect','/dashboard');

    config.$inject = ['$routeProvider', '$locationProvider'];

    /**
     * @description setting applications routes
     * @param {Object} $routeProvider
     */
    function config($routeProvider, $locationProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: './src/dashboard/dashboard.html',
                controller: 'dashboardController'
            })
            .when('/login', {
                templateUrl: './src/shared/controllers/login/login.html',
                controller: 'Login'
            })
            .when('/arrc', {
                templateUrl: './src/formsList/arrc/arrc.html',
                controller: 'arrcController'
            })
            .otherwise({redirectTo: '/dashboard'});

            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
    }
}());