(function (angular) {

    "use strict";

    angular.module('fmreApp')
		.controller('arrcController', arrcController);

	arrcController.$inject = ['$scope', 'noticeOfLossID','arrcDataService', 'alerting'];

	function arrcController($scope, noticeOfLossID, arrcDataService, alerting) {

        $scope.formOptions = ['Accident Benefits', 'Bodily Injury', 'Environmental', 'Property Damage'];
        $scope.assignList = ['Yes', 'No', 'Unknown', 'Pending'];
        $scope.typeList = [];
        var automobile = ['Automobile'];
        var bodilyInjury = ['Bodily Injury - Automobile','Bodily Injury - Non Automobile'];
        var environmental = ['First Party & Third Party Exposure','First Party Property','Third party Liability'];
        var propertyDamage = ['First Party Property Damage','Third Party Property Damage'];


        $scope.save = save;
        $scope.submitAll = submitAll;
        $scope.filterTypeLoss = filterTypeLoss;
        $scope.$on("updateLossID", updateLossID);


        //Datepicker ////////////////

        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };

        $scope.setDate = function(month, day, year) {
            $scope.dt = new Date(month, day, year);
            $scope.popup1.opened = false;
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

        function filterTypeLoss() {

            switch($scope.formSelect) {
                case 'Accident Benefits':
                    $scope.typeList = automobile;
                    break;
                case 'Bodily Injury':
                    $scope.typeList = bodilyInjury;
                    break;
                case 'Environmental':
                    $scope.typeList = environmental;
                    break;
                case 'Property Damage Injury':
                    $scope.typeList = propertyDamage;
                    break;
            }
        }

        function save() {

            $scope.$broadcast("saveAllForms");
        }

        function submitAll($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.submitForm()
                .then(function () {
                    alerting.success('Submit successfully');
                })
                .catch(function () {
                    alerting.danger('Submit faild');
                });
        }

        function updateLossID($event, id) {

            if(noticeOfLossID.value === "") {
                noticeOfLossID.value = id;
            }
        }

        ////////////////////////////
	}

}(angular));