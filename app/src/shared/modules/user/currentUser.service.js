/**
* @description currentUser service to distinguish between anonymous user,
* logged in user & keep track of user's access token
* @ngdoc factory
* @name currentUser
*/
(function () {

"use strict";

angular
    .module('shared.modules.user')
    .factory('currentUser', currentUser);

currentUser.$inject = [
    '$rootScope',
    'LocalStorage'
];

/**
 * @description currentUser service logic
 * @param {Object} $rootScope
 * @param {Object} LocalStorage
 * @constructor currentUser
 */
function currentUser( $rootScope, LocalStorage) {

    var UserKey = "UserToken";
    var profile = initialize();

    return {
        profile: profile,
        setProfile: setProfile,
        removeProfile: removeProfile
    };

    /**
     * @description store username and token/sessionId
     */
    function setProfile(username, token){
        profile.username = username;
        profile.token = token;
        LocalStorage.add(UserKey, profile);
        $rootScope.$broadcast('loggedIn');
    }

    /**
     * @description unset user's token/sessionId
     */
    function removeProfile(){
        profile.username = '';
        profile.token = '';
        LocalStorage.remove(UserKey);
        $rootScope.$broadcast('loggedOut');
    }

    /**
     * @description initialize user's data
     * @returns {Object}
     */
    function initialize() {

        var user = {
            username: "",
            token: "",
            get loggedIn() {
                return this.token;
            }
        };

        var localUser = LocalStorage.get(UserKey);

        if (localUser) {
            user.username = localUser.username;
            user.token = localUser.token;
        }

        return user;
    }
}
}());
