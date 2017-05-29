/**
 * Created by bzaitoun on 2017-05-16.
 */
(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('relatedClaimsForm', relatedClaimsForm)
        .controller('relatedClaimsFormCtrl', relatedClaimsFormCtrl);

    //relatedClaimsForm.$inject = ['dependency'];

    /* @ngInject */
    function relatedClaimsForm() {
        return {
            controller: "relatedClaimsFormCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/descriptionOfLoss/relatedClaims/relatedClaims.html",
            scope: {
                formData : "=",
                forms: "="
            }
        };
    }

    relatedClaimsFormCtrl.$inject = ['$scope'];

    /* @ngInject */
    function relatedClaimsFormCtrl($scope) {

        $scope.removeForm = removeForm;

        function removeForm() {

            var index = $scope.forms.indexOf($scope.formData);
            $scope.forms.splice(index,1);
        }

    }

}());




