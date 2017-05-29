(function () {
    'use strict';

    angular
        .module('fmreApp')
        .directive('planOfAction', planOfAction)
        .controller('planOfActionCtrl', planOfActionCtrl);

    /* @ngInject */
    function planOfAction() {

        return {
            controller: "planOfActionCtrl",
            restrict: 'E',
            templateUrl: "src/formslist/arrc/planOfAction/planOfAction.html",
            scope: {

            }
        };
    }

    planOfActionCtrl.$inject = ['$scope','arrcDataService', 'alerting'];

    /* @ngInject */
    function planOfActionCtrl($scope, arrcDataService, alerting) {

        $scope.save = save;

        $scope.planOfAction = {
            //"id": "5a0d5ea3-ea2a-494a-bf5b-0c190446d0ab",
            actionPlan : ""
        };

        //API calls ///////////////

        //$scope.$on("saveAllForms", save);
        function save($event) {

            //console.log($scope.insuredVehicle);
            arrcDataService.saveForm($scope.planOfAction, "UpdatePlanTab")
                .then(function (result) {
                    // $emit sent to parent//
                    //$scope.$emit('updateLossID', result);
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
 * Created by bzaitoun on 2017-05-09.
 */
