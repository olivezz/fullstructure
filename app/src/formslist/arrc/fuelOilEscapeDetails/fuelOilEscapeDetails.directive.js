(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('fuelOilEscapeDetails', fuelOilEscapeDetails)
        .controller('fuelOilEscapeDetailsCtrl', fuelOilEscapeDetailsCtrl);

    /* @ngInject */
    function fuelOilEscapeDetails() {

        return {
            controller: "fuelOilEscapeDetailsCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/fuelOilEscapeDetails/fuelOilEscapeDetails.html",
            scope: {
                assignList: "="
            }
        };
    }

    fuelOilEscapeDetailsCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function fuelOilEscapeDetailsCtrl($scope, arrcDataService, alerting) {

        $scope.save = save;

        $scope.fuelOilEscapeDetails = {
            VehicleNumber : 0,
            NumberOfOccupants : 0,
            Driver : ""
        };

        //API calls ///////////////

        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.saveForm($scope.fuelOilEscapeDetails, "UpdateFuelTab")
                .then(function (result) {
                    // $emit sent to parent//
                   // $scope.$emit('updateLossID', result);
                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }
        ////////////////////////////

    }

}());

/**
 * Created by bzaitoun on 2017-05-10.
 */
