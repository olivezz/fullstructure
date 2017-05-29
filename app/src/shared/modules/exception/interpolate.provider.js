// /**
//  * @description decorate angular $interpolate service for data binding
//  * errors that use ngBind directive or {{binding expression}}
//  * @ngdoc config
//  */
// (function () {
//
//     "use strict";
//
//     angular.module('shared.modules.exception')
//         .config(config);
//
//     config.$inject = ['$provide'];
//
//     /**
//      * @description configuration function to decorate services
//      * @param {Object} $provide
//      */
//     function config($provide) {
//
//         $provide.decorator('$interpolate', extendInterpolateHandler);
//
//         extendInterpolateHandler.$inject = [
//             '$delegate',
//             '$log'
//         ];
//
//         /**
//          * @description Extend the $interpolate service
//          * @param {function} $delegate represents the original service
//          * in this case '$interpolate' service
//          * @param {object} $log
//          * @return {function} extended $interpolate service
//          */
//         function extendInterpolateHandler($delegate, $log) {
//
//             var serviceWrapper = serviceWrapper;
//             var bindingWrapper = bindingWrapper;
//
//             /*
//              * copy everything that comes with $delegate or $interpolate to
//              * look just like $interpolate service
//              * */
//             angular.extend(serviceWrapper, $delegate);
//
//             /**
//              * @description wrapper for $interpolate function
//              * @return {Function} an interpolation function which is used to
//              * compute the interpolated string
//              */
//             function serviceWrapper() {
//                 // invoke original $interpolate service
//                 var bindingFunction = $delegate.apply(this, arguments);
//                 /*
//                 * arguments[0] is the binding expression that passed to
//                 * $interpolate in a form of {{binding expression}} or ngBind
//                 * */
//                 if (angular.isFunction(bindingFunction) && arguments[0]) {
//                     return bindingWrapper(bindingFunction, arguments[0].trim());
//                 }
//                 return bindingFunction;
//             }
//
//             /**
//              * @description log the binding expression string and it's value
//              * @param {function} bindingFunction
//              * @param {string} bindingExpression
//              * @return {Function} an interpolation function which is used to
//              * compute the interpolated string
//              */
//             function bindingWrapper(bindingFunction, bindingExpression) {
//                 return function () {
//                     /*
//                     * calling to the binding function return the computed
//                     * {{bindingExpression}} that gets evaluated to a value
//                     * */
//                     var result = bindingFunction.apply(this, arguments);
//                     var trimmedResult = result.trim();
//                     var log = trimmedResult ? $log.info : $log.warn;
//                     log.call($log, bindingExpression + " = " + trimmedResult);
//                     return result;
//                 };
//             }
//
//             return serviceWrapper;
//         }
//     }
// }());
