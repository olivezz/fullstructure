(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('claimInformation', claimInformation)
        .controller('claimInformationCtrl', claimInformationCtrl);

    /* @ngInject */
    function claimInformation() {

        return {
            controller: "claimInformationCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/claimInformation/claimInformation.html",
            scope: {
                lossType: '='
            }
        };
    }

    claimInformationCtrl.$inject = ['$scope','arrcDataService', 'alerting', 'noticeOfLossID'];

    /* @ngInject */
    function claimInformationCtrl($scope, arrcDataService, alerting, noticeOfLossID) {

        $scope.Companies = [];
        $scope.getCompanies = getCompanies;
        $scope.save = save;
        $scope.setSameValues = setSameValues;

        init();

        $scope.claimInformation = {

            "templateId": "41785426-1097-4742-9a9f-0456b9281730", //template that you chose
            "companyName": null,
            "companyCode": null,
            "dateLoss": null,
            "hour": null,
            "minute": null,
            "meridian": null,
            "claimNumber": null,
            "typeLoss": null,
            "insuredName": null,
            "memberFirstName": null,
            "memberLastName": null,
            "memberEmail": null,
            "submitFirstName": null,
            "submitLastName": null,
            "submitEmail": null,
            "attachments": null
        };


        //Datepicker ////////////////
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };
        ////////////////////////////////

        //TimePicker ///////////////////
        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        ////////////////////////////////

        function setSameValues(theHandler) {

            if(theHandler) {

                $scope.claimInformation.submitFirstName = $scope.claimInformation.memberFirstName;
                $scope.claimInformation.submitLastName = $scope.claimInformation.memberLastName;
                $scope.claimInformation.submitEmail = $scope.claimInformation.memberEmail;
            }
            else {
                $scope.claimInformation.submitFirstName = "";
                $scope.claimInformation.submitLastName = "";
                $scope.claimInformation.submitEmail = "";
            }
        }


        //API calls ///////////////
        function getCompanies() {

            arrcDataService.getCompanies()
                .then(function (Companies) {
                    $scope.Companies = Companies;
                })
                .catch(function (reason) {
                    alerting.danger(reason);
                });
        }

        //$scope.$on("saveAllForms", save);
        function save($event) {

            var url = (noticeOfLossID.value === "")? "NoticeLossTab" : "UpdateInfoTab";
            //console.log($scope.insuredVehicle);

            arrcDataService.saveForm($scope.claimInformation, url)
                .then(function (result) {
                    // $emit sent to parent//
                    if(result.hasOwnProperty('id')){
                        $scope.$emit('updateLossID', result.id);
                    }

                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }
        ///////////////////////////


        function init() {

            $scope.getCompanies();
        }

    }

}());

/**
 * Created by bzaitoun on 2017-05-09.
 */

