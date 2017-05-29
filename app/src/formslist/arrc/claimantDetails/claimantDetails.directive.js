(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('claimantDetails', claimantDetails)
        .controller('claimantDetailsCtrl', claimantDetailsCtrl);

    /* @ngInject */
    function claimantDetails() {

        return {
            controller: "claimantDetailsCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/claimantDetails/claimantDetails.html",
            scope: {
                assignList: '='
            }
        };
    }

    claimantDetailsCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function claimantDetailsCtrl($scope, arrcDataService, alerting) {


        $scope.Provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NS', 'ON', 'PE', 'QC', 'SK'];
        $scope.genders = ['Male', 'Female', 'other'];
        $scope.marital = ['Single', 'Married', 'Commond-law', 'Separated', 'Divorced', 'Widow(er)'];
        $scope.involvement = ['Bicyclist', 'Driver of Insured Vehicle', 'Driver of another Vehicle', 'Indirect Involvement',  'Passenger of Insured Vehicle',  'Passenger of another Vehicle', 'Pedestrian'];
        $scope.associated = ['Accident Benefits', 'None', 'Passenger Hazard', 'Tort (BI)', 'Underinsured', 'Uninsured'];
        $scope.employments = ["Employed", "F/T Student", "Not Employed", "Primary Caregiver", "Retired", "Self Employed", "Unknown"];

        //$scope.addPersonClaimantForm = addPersonClaimantForm;
        $scope.addMedicalAssessmentForm = addMedicalAssessmentForm;
        $scope.save = save;

        $scope.personClaimantForms = [];
        $scope.medicalAssessmentsForms = [];
        $scope.claimantDetails = {

            acceesorTitle: null,
            accessorFirstName: null,
            accessorLastName: null,
            allegation: null,
            amountClaimDate: null,
            amountPaidAb: null,
            amountPaidWeekly: null,
            applyCppdb: null,
            associatedClaim: null,
            attendantCareBenefit: null,
            attendantCareDescription: null,
            benefitElected: null,
            cbApplicable: null,
            cityResidence: null,
            claimantBenefit1Stop: null,
            claimantEntitileBenefit: null,
            claimantHouseKeeping: null,
            claimantInvolment: null,
            claimantLossEducation: null,
            claimantPlanAction: null,
            claimantReturnWork: null,
            claimantWork: null,
            collateralBenefit: null,
            copyAb: null,
            cppBenefitAmount: null,
            currentForm1Amount: null,
            currentForm1Date: null,
            dateBirth: null,
            dateStopped: null,
            details: null,
            employer: null,
            firstForm1Amount: null,
            firstForm1Date: null,
            firstName: null,
            gender: null,
            grossIncome: null,
            hasAccidentBenefitClaim: null,
            hasLegaReps: null,
            injuriesReportedDateLoss: null,
            lastName: null,
            legalFirm: null,
            maritalStatus: null,
            mediationStatus: null,
            medicalRecords: null,
            medicalRehabApplies: null,
            minorInjuryCap: null,
            mostRecentEmployer: null,
            //noticeOfLossId: null,
            numberDependents: null,
            obtainedDate: null,
            obtainedFrom: null,
            occupation: null,
            occupationPosition: null,
            ocf10CompletedDate: null,
            paidAmountDate: null,
            preExistingInjugiesMedical: null,
            provinceResidence: null,
            recommendations: null,
            repFirsName: null,
            repLastName: null,
            shortLongTermBenefit: null,
            temporaryDbAmount: null,
            temporaryDisabilityBenefit: null,
            totalPaidMedical12Months: null,
            totalPaidRehab12Months: null,
            treatmentDescription: null,
            typeEmployment: null,
            typeTreatment: null,
            weeklyBenefitsOcf10: null,
            weeklyGrossIncome: null,
            medicalAssessments : $scope.medicalAssessmentsForms,

            claimantMediations: null

        };

        // $scope.personClaimant = {
        //     acceesorTitle: null,
        //     accessorFirstName: null,
        //     accessorLastName: null,
        //     allegation: null,
        //     amountClaimDate: null,
        //     amountPaidAb: null,
        //     amountPaidWeekly: null,
        //     applyCppdb: null,
        //     associatedClaim: null,
        //     attendantCareBenefit: null,
        //     attendantCareDescription: null,
        //     benefitElected: null,
        //     cbApplicable: null,
        //     cityResidence: null,
        //     claimantBenefit1Stop: null,
        //     claimantEntitileBenefit: null,
        //     claimantHouseKeeping: null,
        //     claimantInvolment: null,
        //     claimantLossEducation: null,
        //     claimantPlanAction: null,
        //     claimantReturnWork: null,
        //     claimantWork: null,
        //     collateralBenefit: null,
        //     copyAb: null,
        //     cppBenefitAmount: null,
        //     currentForm1Amount: null,
        //     currentForm1Date: null,
        //     dateBirth: null,
        //     dateStopped: null,
        //     details: null,
        //     employer: null,
        //     firstForm1Amount: null,
        //     firstForm1Date: null,
        //     firstName: null,
        //     gender: null,
        //     grossIncome: null,
        //     hasAccidentBenefitClaim: null,
        //     hasLegaReps: null,
        //     injuriesReportedDateLoss: null,
        //     lastName: null,
        //     legalFirm: null,
        //     maritalStatus: null,
        //     mediationStatus: null,
        //     medicalRecords: null,
        //     medicalRehabApplies: null,
        //     minorInjuryCap: null,
        //     mostRecentEmployer: null,
        //     noticeOfLossId: null,
        //     numberDependents: null,
        //     obtainedDate: null,
        //     obtainedFrom: null,
        //     occupation: null,
        //     occupationPosition: null,
        //     ocf10CompletedDate: null,
        //     paidAmountDate: null,
        //     preExistingInjugiesMedical: null,
        //     provinceResidence: null,
        //     recommendations: null,
        //     repFirsName: null,
        //     repLastName: null,
        //     shortLongTermBenefit: null,
        //     temporaryDbAmount: null,
        //     temporaryDisabilityBenefit: null,
        //     totalPaidMedical12Months: null,
        //     totalPaidRehab12Months: null,
        //     treatmentDescription: null,
        //     typeEmployment: null,
        //     typeTreatment: null,
        //     weeklyBenefitsOcf10: null,
        //     weeklyGrossIncome: null
        // };

        $scope.medicalAssessment = {
            dateAccessment : null,
            firstName : null,
            lastName : null,
            typeAccessment : null,
            acceesorTitle : null,
            acceesorFirstName : null,
            acceesorLastName : null,
            acceesorRecommendations : null
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

        //API Calls ////////////////////////
        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.saveForm($scope.claimantDetails, "UpdateClamTab")
                .then(function (result) {
                    // $emit sent to parent//
                    //$scope.$emit('updateLossID', result);
                    alerting.success('Saved successfully');
                })
                .catch(function () {
                    alerting.danger('Saved faild');
                });
        }
        ///////////////////////////////////

        // function addPersonClaimantForm() {
        //
        //     var personFormData = angular.copy($scope.personClaimant);
        //     $scope.claimantDetails.personClaimant.push(personFormData);
        // }

        function addMedicalAssessmentForm() {

            var formData = angular.copy($scope.medicalAssessment);
            $scope.claimantDetails.medicalAssessments.push(formData);
        }

    }

}());

/**
 * Created by bzaitoun on 2017-05-09.
 */
/**
 * Created by bzaitoun on 2017-05-10.
 */
