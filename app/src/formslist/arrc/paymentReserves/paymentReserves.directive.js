(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('paymentReserves', paymentReserves)
        .controller('paymentReservesCtrl', paymentReservesCtrl);

    /* @ngInject */
    function paymentReserves() {

        return {
            controller: "paymentReservesCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/paymentReserves/paymentReserves.html",
            scope: {
                assignList: '='
            }
        };
    }

    paymentReservesCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function paymentReservesCtrl($scope, arrcDataService, alerting) {

        $scope.addPaymentReservesDetailsForm = addPaymentReservesDetailsForm;
        $scope.save = save;

        $scope.paymentReservesDetailsForms = [];

        $scope.paymentReserves = {
            reserveAnalysis: null,
            adjustmentPayments: null,
            adjustmentOutstandingReserves: null,
            adjustingCummlativeIncurredAmt: null,
            expertPayments: null,
            expertOutstandingReserves: null,
            expertCummlativeIncurredAmt: null,
            legalPayments: null,
            legalOutstandingReserves: null,
            legalCummlativeIncurredAmt: null,
            totalPayments: null,
            totalOutstandingReserves: null,
            totalCummlativeIncurredAmt: null,

            paymentReservesDetails: []
        };

        $scope.paymentReservesDetails = {
            cummulativeIncurredAmt: null,
            outstandingReserve: null,
            payment: null
        };


        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.paymentReserves);
            arrcDataService.saveForm($scope.paymentReserves, "UpdateInfoTab")
                .then(function (result) {
                    // $emit sent to parent//
                    //$scope.$emit('updateLossID', result);
                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }

        function addPaymentReservesDetailsForm() {

            var formData = angular.copy($scope.paymentReservesDetails);
            $scope.paymentReserves.paymentReservesDetails.push(formData);
        }

    }

}());