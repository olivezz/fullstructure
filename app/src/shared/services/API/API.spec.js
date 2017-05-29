/**
 * @description Tests for API service
 */
(function () {

    "use strict";

    describe('Service: API', function () {

        /* jshint -W109 */
        var successResponse = {
            data: [{
                "_id": "5757e6e41b0a244b256ac1d5",
                "title": "Todo title",
                "description": "todo description",
                "status": "notCompleted",
                "author": {"_id": "5757e6e41b0a244b256ac1d5", "username": "ali"}
            }],
            status: 'success'
        };

        var errorResponse = {
            status: 404,
            statusText: 'Not found',
            config: {
                url: '/invalidUrl'
            }
        };

        var $q, $log, $httpBackend;
        var API, alerting, response;
        var $scope;

        beforeEach(module(
            'ToDoList'
        ));

        beforeEach(inject(function (
            _$q_,
            _$log_,
            _$httpBackend_,
            _API_,
            _alerting_,
            _$rootScope_
        ) {
            $q = _$q_;
            $log = _$log_;
            $httpBackend = _$httpBackend_;
            API = _API_;
            alerting = _alerting_;
            $scope = _$rootScope_.$new();
            //spyOn($log, 'error');
        }));

        it('should get to dos list', function () {

            //dump(API);
            $httpBackend.when('GET', '/todos')
                .respond(200, successResponse);


            //expect(response).toEqual(successResponse);
            API.request('/todos', 'GET')
                .then(function (result) {
                    //response = result;
                    dump('result', result);
                }).catch(function (error) {
                dump('error', error);
            });

            $httpBackend.flush();
        });

    });
}());
