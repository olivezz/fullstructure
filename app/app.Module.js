/**
 * @description Declare app level module which depends on views and components
 * @name SeniorTask
 * @ngdoc module
 * @requires ngRoute
 * @requires ngAnimate
 * @requires angular-loading-bar
 * @requires shared.modules.alert
 * @requires shared.directive.collapse
 * @requires shared.modules.exception
 */
(function () {

    "use strict";

    angular
        .module('fmreApp', [
            /*
             * Angular modules
             * */
            'ngAnimate',
            'ngRoute',
            'ngSanitize',
            /*
             * 3rd Party modules
             */
            'angular-loading-bar',
            'ui.bootstrap',
            /*
             * cross app modules
             * */
            'shared.modules.alert',
            'shared.modules.exception',
            'shared.modules.user',
            'shared.controllers.login',
            'shared.directives.logOut',
            'API.Service'
        ]);
}());