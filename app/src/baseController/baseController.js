(function () {

    "use strict";

    angular.module('fmreApp')
		.controller('baseController', baseController);

	baseController.$inject = ['$scope', 'currentUser'];

	function baseController($scope, currentUser) {

		$scope.loggedIn = currentUser.profile.token;
        $scope.toggleLoggedIn = toggleLoggedIn;
        $scope.$on('loggedIn', toggleLoggedIn);
        $scope.$on('loggedOut', toggleLoggedIn);

        /**
         * @description Handler for loggedIn & loggedOut Events
         */
        function toggleLoggedIn(){
            $scope.loggedIn = currentUser.profile.token;
        }
	}

}());

