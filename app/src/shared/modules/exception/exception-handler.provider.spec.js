/**
 * @description Tests for $exceptionHandler service
 * @ngdoc config
 */
(function () {

    "use strict";

    describe('Service: $exceptionHandler', function(){

        var $exceptionHandler;
        var alerting;
        var message = 'Something is wrong';

        beforeEach(module(
            'shared.modules.exception',
            'shared.modules.alert'
        ));

        beforeEach(module(function($exceptionHandlerProvider) {
            $exceptionHandlerProvider.mode('log');
        }));

        beforeEach(inject(function(_alerting_, _$exceptionHandler_){
            alerting = _alerting_;
            $exceptionHandler = _$exceptionHandler_;
            spyOn(alerting,'danger');
        }));

        it('should throw an error', function(){
            $exceptionHandler(message);
            expect(alerting.danger).toHaveBeenCalled();
        });
    });
}());
