/**
 * @description Tests for alert directive
 */
(function () {

    "use strict";

    describe('Directive: alert', function () {

        var $scope, $compile, $controller;
        var alerting;
        var elementToCompile = '<alert></alert>';

        beforeEach(module(
            'shared.modules.alert',
            'html-templates'
        ));

        beforeEach(inject(function (_$compile_,
                                    _$rootScope_,
                                    _$controller_,
                                    _alerting_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
            $controller = _$controller_;
            alerting = _alerting_;
        }));

        it('should compile element to expected HTML', function () {
            var element = $compile(elementToCompile)($scope);
            $scope.$digest();
            expect(element.hasClass('alert-container')).toBeTruthy();
        });

        describe('Controller test', function () {

            beforeEach(function () {

                $controller('alertCtrl', {
                    $scope: $scope,
                    alerting: alerting
                });
                spyOn(alerting, 'removeAlert');
            });

            it('should have variables defined', function () {
                expect($scope.removeAlert).toBeDefined();
            });

            it('should call removeAlert', function(){
                $scope.removeAlert({});
                expect(alerting.removeAlert).toHaveBeenCalledWith({});
            });
        });
    });
}());