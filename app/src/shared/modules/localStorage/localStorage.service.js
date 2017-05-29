/**
* @description LocalStorage service to hold user's token/sessionId to avoid
 * losing it after refreshing the page
 * @ngdoc service
 * @name LocalStorage
*/
(function () {

'use strict';

angular
    .module('shared.module.LocalStorage')
    .service('LocalStorage', LocalStorage);

LocalStorage.$inject = ['$window'];

/**
 * @description
 * @param {Object} $window
 * @constructor LocalStorage
 */
function LocalStorage($window) {

    var store = $window.localStorage;
    var service = this;

    service.add = add;
    service.get = get;
    service.remove = remove;

    /**
     * @description add item to local storage
     * @param {String} key
     * @param {*} value
     */
    function add (key, value) {
        value = angular.toJson(value);
        store.setItem(key, value);
    }

    /**
     * @description get item from local storage
     * @param {String} key
     */
    function get(key) {
        var value = store.getItem(key);
        if (value) {
            value = angular.fromJson(value);
        }
        return value;
    }

    /**
     * @description remove item from local storage
     * @param {String} key
     */
    function remove(key) {
        store.removeItem(key);
    }
}
}());

