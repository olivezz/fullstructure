/**
 * @description Application logic for run event
 */
(function(){

    "use strict";

    angular.module('fmreApp')
        .run(run);

    run.$inject = [
        '$rootScope',
        '$location',
        'currentUser'
    ];

    /**
     * @description define/setting logic when app gets run like routing events
     * @param {Object} $rootScope
     * @param {Object} $location
     * @param {Object} currentUser
     */
    function run($rootScope, $location, currentUser){

        $rootScope.$on('$routeChangeStart', routeChangeStart);

        /**
         * @description Handler for routeChange event for each request
         * @param {Object} event
         * @param {Object} next
         */
        function routeChangeStart(event, next){

            // var loggedIn = currentUser.profile.loggedIn;
            // var nextRoute = (next.$$route) ? next.$$route.originalPath : false;
            //
            // if ( loggedIn === '') {
            //
            //     $location.path('/login');
            //
            // }else if(nextRoute === '/login' && loggedIn !== ''){
            //
            //     $location.path('/');
            // }
        }
    }
}());
