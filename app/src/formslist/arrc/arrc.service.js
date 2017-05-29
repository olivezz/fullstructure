/**
 * Created by bzaitoun on 2017-05-03.
 */
(function () {
    'use strict';

    angular
        .module('fmreApp')
        .factory('arrcDataService', arrcDataService);

    arrcDataService.$inject = ['$q', '$http', 'API', 'Endpoint', 'noticeOfLossID'];

    /* @ngInject */
    function arrcDataService($q, $http, API, Endpoint, noticeOfLossID) {


        var service = {
            getCompanies : getCompanies,
            getCompanyById : getCompanyById,
            saveForm : saveForm,
            submitForm : submitForm
        };
        return service;

        ////////////////

        function getCompanies() {

            var url = Endpoint.CompaniesList;
            var data = {}; // if needed
            //return API.request(url, 'GET', data);
            return API.request(url, 'GET');
        }

        function getCompanyById(id) {

            var url = Endpoint.CompaniesList;
            url += "/" + id;
            //var data = { "ID" : id}; // if needed
            //return API.request(url, 'GET', data);
            return API.request(url, 'GET');
        }

        function submitForm() {

            var url = Endpoint.submitNotice;
            url += "/" + noticeOfLossID;
            var data = {}; // if needed
            return API.request(url, 'GET');//, noticeOfLossID.value);
        }

        function saveForm(data, endPointKey) {

            var method = "POST";
            //var method = id === undefined? "POST" : "PUT";
            var url = Endpoint[endPointKey];
            if(noticeOfLossID.value !== "") {

                if(endPointKey === "UpdateClamTab") {
                    data.noticeOfLossId = noticeOfLossID.value;
                }
                else {
                    data.id = noticeOfLossID.value;
                }
                // method = "PUT";
                // url += "/" + noticeOfLossID;
            }

            //url += "/" + id;
            //var data = { "ID" : id}; // if needed
            return API.request(url, method, data);
            //return API.request(url, 'GET');
        }
    }

}());

