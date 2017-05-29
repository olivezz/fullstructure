(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('descriptionOfLoss', descriptionOfLoss)
        .controller('descriptionOfLossCtrl', descriptionOfLossCtrl);

    /* @ngInject */
    function descriptionOfLoss() {

        return {
            controller: "descriptionOfLossCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/descriptionOfLoss/descriptionOfLoss.html",
            scope: {
                assignList: "="
            }
        };
    }

    descriptionOfLossCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function descriptionOfLossCtrl($scope, arrcDataService, alerting) {

        $scope.Provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];
        $scope.relatedClaimsForm = [];

        $scope.addRelatedClaimsForm = addRelatedClaimsForm;
        $scope.save = save;

        $scope.descriptionOfLoss = {
            "dateLossReportToCompany": null,
            "dateLossReportToFmre": null,
            "cityLoss": null,
            "provLoss": null,
            "policyForm": null,
            "policyNumber": null,
            "policyLimit": null,
            "policyTermFrom": null,
            "policyTermTo": null,
            "detailsCauseLoss": null,

            "assignToDefenceCounsel": null,
            "independentAdjustFirm": null,
            "independentAdjusterName": null,
            "dateIndependentAdjusterAssign": null,
            "defenceCounselFirmName": null,
            "defenceCounselFirstName": null,
            "defenceCounselLastName": null,
            "policeReportFile": null,
            "criminalCharge": null,
            "criminalChargeDetails": null,
            "otherMutualInsureInvolved": null,

            "otherMutualCompanyName": null,
            "accessOUmbrellaLiabilityPolicy": null,
            "otherRelatedClaims": null,

            "relatedClaimsDetails": []
        };


        $scope.relatedClaims = {
            "claimDetails": "",
            "claimNumber": ""
        };

        //Datepicker ////////////////

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };


        $scope.setDate = function(month, day, year) {
            $scope.dt = new Date(month, day, year);
            $scope.popup1.opened = false;
        };

        $scope.opened = {};
        $scope.opened.openedLoss = false;
        $scope.opened.openedStart = false;
        $scope.opened.openedEnd = false;
        $scope.opened.independent = false;
        $scope.opened.openedExcessStart = false;
        $scope.opened.openedExcessEnd = false;

        $scope.open = function($event,datepicker) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened[datepicker] = true;
        };

        ////////////////////////////////

        //TimePicker ///////////////////
        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;
        ////////////////////////////////

        //API calls ///////////////

        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.saveForm($scope.descriptionOfLoss, "UpdateDescTab")
                .then(function (result) {
                    // $emit sent to parent//
                    //$scope.$emit('updateLossID', result);
                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }
        ////////////////////////////////

        function addRelatedClaimsForm() {

            var formData = angular.copy($scope.relatedClaims);
            $scope.descriptionOfLoss.relatedClaimsDetails.push(formData);
        }

        // function onSelChange(DoesOtherLoss) {
        //
        //     //console.log(DoesOtherLoss);
        //     $scope.DoesOtherLoss = DoesOtherLoss;
        // }

    }

}());

/**
 * Created by bzaitoun on 2017-05-09.
 */