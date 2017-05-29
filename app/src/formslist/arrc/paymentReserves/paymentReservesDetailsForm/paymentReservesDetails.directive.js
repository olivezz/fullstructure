(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('paymentReservesDetailsForm', paymentReservesDetailsForm)
        .controller('paymentReservesDetailsFormCtrl', paymentReservesDetailsFormCtrl);

    //paymentReservesDetailsForm.$inject = ['dependency'];

    /* @ngInject */
    function paymentReservesDetailsForm() {
        return {
            controller: "paymentReservesDetailsFormCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/paymentReserves/paymentReservesDetailsForm/paymentReservesDetails.html",
            scope: {
                formData : "=",
                forms: "="
            }
        };
    }

    paymentReservesDetailsFormCtrl.$inject = ['$scope'];

    /* @ngInject */
    function paymentReservesDetailsFormCtrl($scope) {

        $scope.removeForm = removeForm;

        function removeForm() {

            var index = $scope.forms.indexOf($scope.formData);
            $scope.forms.splice(index,1);
        }

    }

}());