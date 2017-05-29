(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('thirdPartyForm', thirdPartyForm)
        .controller('thirdPartyFormCtrl', thirdPartyFormCtrl);

    //thirdPartyForm.$inject = ['dependency'];

    /* @ngInject */
    function thirdPartyForm() {
        return {
            controller: "thirdPartyFormCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/vehicleDetails/thirdPartyForm/thirdparty.html",
            scope: {
                formData : "=",
                forms: "="
            }
        };
    }

    thirdPartyFormCtrl.$inject = ['$scope'];

    /* @ngInject */
    function thirdPartyFormCtrl($scope) {

        $scope.removeForm = removeForm;

        function removeForm() {

            var index = $scope.forms.indexOf($scope.formData);
            $scope.forms.splice(index,1);
        }

    }

}());