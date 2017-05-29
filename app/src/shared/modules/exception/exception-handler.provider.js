/**
 * @description decorate angular $exceptionHandler service
 * @ngdoc config
 */
(function () {

    "use strict";

    angular.module('shared.modules.exception')
        .config(config);

    config.$inject = ['$provide'];

    /**
     * @description configuration function to decorate services
     * @param {Object} $provide
     */
    function config($provide){

        $provide.decorator('$exceptionHandler', extendExceptionHandler);

        extendExceptionHandler.$inject = [
            '$delegate',
            '$injector'
        ];

        /**
         * @description Extend the $exceptionHandler service
         * @param {function} $delegate represents the original service
         * in this case '$exceptionHandler' service
         * @param {Object} $injector instantiate types, invoke methods,
         * and load modules. to avoid Circular dependency found error
         * @return {function} extended ExceptionHandler service
         */
        function extendExceptionHandler($delegate, $injector) {

            /**
             * @description a function to execute every error occurred
             * @param {object} exception the exception was thrown
             * @param {string} cause Optional information about the context
             * in which the error was thrown
             */
            return function(exception, cause){
                // passing information through the original service which logs
                // errors to the browser console using $log service
                $delegate(exception, cause);

                var alerting = $injector.get('alerting');
                // Exception messages could be replaced by a non-technical one
                alerting.danger(exception.message);
            }
        }
    }
}());
