(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('personClaimant', personClaimant)
        .controller('personClaimantCtrl', personClaimantCtrl);

    //personClaimant.$inject = ['dependency'];

    /* @ngInject */
    function personClaimant() {
        return {
            controller: "personClaimantCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/claimantDetails/personClaimant/personClaimant.html",
            scope: {
                personFormData : "=",
                personForms: "=",
                assignList: '='
            }
        };
    }

    personClaimantCtrl.$inject = ['$scope'];

    /* @ngInject */
    function personClaimantCtrl($scope) {

        $scope.Provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];
        $scope.genders = ['Male', 'Female', 'other'];
        $scope.marital = ['Single', 'Married', 'Commond-law', 'Separated', 'Divorced', 'Widow(er)'];
        $scope.involvement = ['Bicyclist', 'Driver of Insured Vehicle', 'Driver of another Vehicle', 'Indirect Involvement',  'Passenger of Insured Vehicle',  'Passenger of another Vehicle', 'Pedestrian'];
        $scope.associated = ['Accident Benefits', 'None', 'Passenger Hazard', 'Tort (BI)', 'Underinsured', 'Uninsured'];
        $scope.employments = ["Employed", "F/T Student", "Not Employed", "Primary Caregiver", "Retired", "Self Employed", "Unknown"];

        $scope.removeForm = removeForm;

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

        function removeForm() {

            var index = $scope.personForms.indexOf($scope.personFormData);
            $scope.personForms.splice(index,1);
        }
    }

}());/**
 * Created by bzaitoun on 2017-05-10.
 */
