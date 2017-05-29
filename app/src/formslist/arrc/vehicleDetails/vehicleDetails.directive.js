(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('vehicleDetails', vehicleDetails)
        .controller('vehicleDetailsCtrl', vehicleDetailsCtrl);

    /* @ngInject */
    function vehicleDetails() {

        return {
            controller: "vehicleDetailsCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/vehicleDetails/vehicleDetails.html",
            scope: {
                assignList: '=',
                formTemplate: '='
            }
        };
    }

    vehicleDetailsCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function vehicleDetailsCtrl($scope, arrcDataService, alerting) {

        $scope.addThirdPartyForm = addThirdPartyForm;
        $scope.save = save;

        $scope.thirdPartyForms = [];

        $scope.insuredVehicle = {
            "status": "Pending",
            "driver": "",
            "year": 0,
            "vin": "",
            "model": "",
            "make": "",
            "numberOfOccupants": 0,
            "facilityRiskSharingPool": "",
            "vehicleNumber": 0,

            "thirdPartyVehicles": []
        };

        $scope.thirdParty = {
            "driver": "",
            "make": "",
            "model": "",
            "numberOccupants": 0,
            "owner": "",
            "thirdPartyInsurer": "",
            "year": ""
        };


        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.saveForm($scope.insuredVehicle, "UpdateVehiTab")
                .then(function (result) {
                    // $emit sent to parent//
                    //$scope.$emit('updateLossID', result);
                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }

        function addThirdPartyForm() {

            var formData = angular.copy($scope.thirdParty);
            $scope.insuredVehicle.thirdPartyVehicles.push(formData);
        }

    }

}());

/**
 * Created by bzaitoun on 2017-05-09.
 */
