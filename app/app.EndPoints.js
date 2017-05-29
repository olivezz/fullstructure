/**
 * @description Backend server endpoints
 */
(function(){

    "use strict";
    angular.module('fmreApp')
        .value('Endpoint', {
            login: '/user/auth',
            logOut: '/user/logout',
            CompaniesList: '/api/v1/company_info',

            UpdateInfoTab: "/api/v1/update_claim_info_tab",
            UpdateVehiTab: "/api/v1/update_vehicle_details_tab",
            UpdateDescTab: "/api/v1/update_description_loss_tab",
            UpdateSummTab: "/api/v1/update_summary_tab",
            UpdatePaymTab: "/api/v1/update_payment_reserve_tab",
            UpdateFuelTab: "/api/v1/update_fuel_escape_details_tab",
            UpdatePlanTab: "/api/v1/update_plan_action_tab",
            UpdateClamTab: "/api/v1/update_claimant_details_tab",

            NoticeLossTab: '/api/v1/create_notice_loss',

            submitNotice: '/api/OnbaseAPI/'

        });
}());
