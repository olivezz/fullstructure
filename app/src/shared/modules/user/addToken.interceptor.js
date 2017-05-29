/**
* @description
* addToken factory to intercept each request to add user's token or sessionIdd
*/
(function () {

"use strict";

angular
    .module('shared.modules.user')
    .factory('addToken', addToken)
    .config(config);

addToken.$inject = [
    '$q',
    'currentUser'
];

/**
 * @description
 * @param {Object} $q
 * @param {Object} currentUser
 * @returns {Object}
 */
function addToken($q, currentUser) {

    return {
        request: request// gets called for every request
    };

    /**
     * @description
     * takes the configuration object that associated with http request to
     * modify the url we're going to, the headers, the timeout & the data
     * @param {Object} config
     */
    function request(config) {

        if (currentUser.profile.loggedIn !== '') {

            var url = config.url;

            if (url.indexOf('.html') === -1) {

                if (url.indexOf('\?') === -1) {

                    config.url += '?';

                } else {

                    config.url += '&';
                }

                config.url += 'sessionId=' + currentUser.profile.token;
            }
        }
        return $q.when(config);
    }
}

config.$inject = ['$httpProvider'];

/**
 * @description push addToken interceptor factory to $httpProvider
 * @param {Object} $httpProvider
 */
function config($httpProvider) {

    $httpProvider.interceptors.push('addToken');
}

}());
