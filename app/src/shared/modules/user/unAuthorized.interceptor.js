/**
 * @description
 * unAuthorized to intercept each response error for unauthorized/401 requests
 */
(function () {

    "use strict";

    angular
        .module('shared.modules.user')
        .factory('unAuthorized', unAuthorized)
        .config(config);

    unAuthorized.$inject = [
        '$q',
        '$location',
        'lastPathBeforeLogin'
    ];

    /**
     * @description
     * @param {Object} $q
     * @param {Object} $location
     * @param {String} lastPathBeforeLogin
     * @returns {Object}
     */
    function unAuthorized(
        $q,
        $location,
        lastPathBeforeLogin
    ) {

        return {
            responseError: responseError// gets call for every response error
        };

        /**
         * @description
         * takes the response object that associated with http request,
         * the url we going to, the headers, the timeout & the data
         * @param {Object} response
         */
        function responseError(response) {

            if (response.status === 401) {
                lastPathBeforeLogin = $location.path();
                $location.path("/login");
            }
            return $q.reject(response);
        }
    }

    config.$inject = ['$httpProvider'];

    /**
     * @description
     * @param {Object} $httpProvider
     */
    function config($httpProvider) {

        $httpProvider.interceptors.push('unAuthorized');
    }

}());