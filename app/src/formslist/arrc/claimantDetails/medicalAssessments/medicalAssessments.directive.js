(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('medicalAssessments', medicalAssessments)
        .controller('medicalAssessmentsCtrl', medicalAssessmentsCtrl);

    //medicalAssessments.$inject = ['dependency'];

    /* @ngInject */
    function medicalAssessments() {
        return {
            controller: "medicalAssessmentsCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/claimantDetails/medicalAssessments/medicalAssessments.html",
            scope: {
                formData : "=",
                forms: "="
            }
        };
    }

    medicalAssessmentsCtrl.$inject = ['$scope'];

    /* @ngInject */
    function medicalAssessmentsCtrl($scope) {

        $scope.removeForm = removeForm;

        function removeForm() {

            var index = $scope.forms.indexOf($scope.formData);
            $scope.forms.splice(index,1);
        }
    }

}());




/**
 * Created by bzaitoun on 2017-05-10.
 */
