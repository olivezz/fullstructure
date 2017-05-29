/**
* @description authenticate service to handle user's logging in & out
* @ngdoc service
* @name authenticate
*/
(function () {

"use strict";

angular
    .module('shared.modules.user')
    .factory('authenticate', authenticate);

authenticate.$inject = [
    '$http',
    '$location',
    'alerting',
    'currentUser',
    'Endpoint',
    'lastPathBeforeLogin',
    'loginRedirect'
];

/**
 * @default authenticate service logic
 * @param {Object} $http
 * @param {Object} $location
 * @param {Object} alerting
 * @param {Object} currentUser
 * @param {Object} Endpoint
 * @param {String} lastPathBeforeLogin
 * @param {String} loginRedirect
 * @constructor authenticate
 */
function authenticate(
    $http,
    $location,
    alerting,
    currentUser,
    Endpoint,
    lastPathBeforeLogin,
    loginRedirect
) {

    return {
        login: login,
        logOut: logOut
    };

    /**
     * @description handle login process
     * @param {Object} user
     * @returns {Object} Angular Promise
     */
    function login(user) {

        var data = {
            username: user.username,
            password: user.password
        };

        $http.post(Endpoint.login, data)
            .then(function (response) {

                if (response.data.status === 'success') {
                    // configurable depends on the API response "require data store"
                    currentUser.setProfile(user.username, response.data.sessionId);

                    if(lastPathBeforeLogin !== ''){
                        $location.path(lastPathBeforeLogin);

                    }else{
                        $location.path(loginRedirect);
                    }

                } else {
                    alerting.danger(response.data.error);
                }
            }).catch(alerting.error('Failed to log into server'));
    }

    /**
     * @description Handle logout process
     */
    function logOut() {

        $http.get(Endpoint.logOut)
            .then(function(response){
                if (response.data.status === 'success'){

                    currentUser.removeProfile();
                    $location.path('/login');
                }else {
                    alerting.danger(response.data.error);
                }
            }).catch(alerting.error('Server Error!'));
    }
}
}());
