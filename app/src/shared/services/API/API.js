/**
 * @description a central service to handle all HTTP requests
 * @name API
 *
 */
(function () {

    'use strict';

    angular
        .module('API.Service', [])
        .factory('API', API);

    API.$inject = [
        '$q',
        '$http',
        'alerting'
    ];

    /**
     * @description Handle http requests
     * @param {Object} $q
     * @param {Function} $http
     * @param {Object} alerting
     * @constructor
     */
    function API($q, $http, alerting) {

        return {
            request: request
        };

        /**
         * @description create http request body to fetch data
         * @param {String} url
         * @param {String} method
         * @param {Object} data
         */
        function request(url, method, data) {

            var q = $q.defer();

            var httpConfig = {
                url: url,
                method: method
            };

            if (data !== undefined) {
                httpConfig.data = data;
            }

            $http(httpConfig)
                .then(function (result) {

                    // it should be changed based on your needs
                    if (result.status === 200 &&  typeof result.data === 'object'){// && result.data.success.toString() === 'true') {
                        q.resolve(result.data);

                    } else {

                        var message = result.status + ' ' + result.statusText + ' ';
                        alerting.message += 'Error retrieving data. (' + message + ') ';
                        alerting.consoleMessage = 'url -> ' + result.config.url + '\n';
                        q.reject('Invalid Data Type');
                    }

                },function (result) {

                    // it should be changed based on your needs
                    var message = result.status + ' ' + result.statusText + ' ';
                    alerting.message += 'Error retrieving data. (' + message + ') ';
                    alerting.consoleMessage = 'url -> ' + result.config.url + '\n';
                    q.reject('Error');
                });

            return q.promise;
        }
    }

}());

