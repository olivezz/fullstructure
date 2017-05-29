(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('summary', summary)
        .controller('summaryCtrl', summaryCtrl);

    /* @ngInject */
    function summary() {

        return {
            controller: "summaryCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/summary/summary.html",
            scope: {
                assignList: "="
            }
        };
    }

    summaryCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function summaryCtrl($scope, arrcDataService, alerting) {

        $scope.save = save;

        $scope.summary = {
            vehicleNumber : 0,
            NumberOfOccupants : 0,
            Driver : ""
        };

        //API calls ///////////////

        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.saveForm($scope.summary, "UpdateSummTab")
                .then(function (result) {
                    // $emit sent to parent//
                    //$scope.$emit('updateLossID', result);
                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }
        ////////////////////////////
    }

}());
