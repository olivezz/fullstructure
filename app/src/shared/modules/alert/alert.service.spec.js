/**
 * @description test for alert service
 */
(function () {

    'use strict';

    describe('Service: alert', function () {

        var $log, $timeout;
        var alerting;
        var alertTypes = ["success", "info", "warning", "danger"];
        var message = "This is a testing message";

        beforeEach(module('shared.modules.alert'));

        beforeEach(inject(function (_$log_, _$timeout_, _alerting_) {
            $log = _$log_;
            $timeout = _$timeout_;
            alerting = _alerting_;

            spyOn(alerting, 'addAlert');
        }));

        it('should validate exposed variables', function () {
            expect(alerting.currentAlerts).toEqual([]);
            expect(alerting.alertTypes).toEqual(alertTypes);
        });

        it('should add warning', function () {
            alerting.warn(message);
            expect(alerting.currentAlerts)
                .toEqual([{type: 'warning', message: message}]);
            $timeout.flush(5000);
            expect(alerting.currentAlerts).toEqual([]);
        });

        it('should add danger', function () {
            alerting.danger(message);
            expect(alerting.currentAlerts)
                .toEqual([{type: 'danger', message: message}]);
            $timeout.flush(5000);
            expect(alerting.currentAlerts).toEqual([]);
        });

        it('should add info', function () {
            alerting.info(message);
            expect(alerting.currentAlerts)
                .toEqual([{type: 'info', message: message}]);
            $timeout.flush(5000);
            expect(alerting.currentAlerts).toEqual([]);
        });

        it('should add success', function () {
            alerting.success(message);
            expect(alerting.currentAlerts)
                .toEqual([{type: 'success', message: message}]);
            $timeout.flush(5000);
            expect(alerting.currentAlerts).toEqual([]);
        });

        it('should add danger by getting callback', function () {
            var callback = alerting.error(message);
            expect(typeof callback).toEqual('function');
            callback();
            expect(alerting.currentAlerts)
                .toEqual([{type: 'danger', message: message}]);
            $timeout.flush(5000);
            expect(alerting.currentAlerts).toEqual([]);
        });

        it('should remove an alert object', function () {
            var alert = {type: 'danger', message: message};
            alerting.currentAlerts.push(alert);
            alerting.removeAlert(alert);
            expect(alerting.currentAlerts).toEqual([]);
        });
    });
}());