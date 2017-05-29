(function () {

    "use strict";

    angular.module('fmreApp')
		.controller('dashboardController', dashboardController);

	dashboardController.$inject = ['$scope'];

	function dashboardController($scope) {

		$scope.title = "new dashboard";
	}

}());