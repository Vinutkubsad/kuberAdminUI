var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.BASE_URL = baseUrl;
    AppSettings.PAYMENT_REPORT = '/v1/charityAdmin/getReports';
    AppSettings.CHARITY_URL = '/v1/charities/addCharities';
    AppSettings.ADMIN_LOGIN = '/v1/authenticate/login?role=admin';
    AppSettings.CHARITY_ALL = '/v1/admin/charitiesList';
    AppSettings.APPROVE_CHARITY = '/v1/admin/approveCharity';
    AppSettings.CHARITY_LOGIN = '/v1/charities/login';
    AppSettings.SEARCH_REPORT = '/v1/charityAdmin/searchReports';
    AppSettings.SEND_MESSAGE = '/v1/userDetails/adminhelp';
    AppSettings.DISABLE_CHARITY = '/v1/admin/disableCharity';
    return AppSettings;
}());
export { AppSettings };
//# sourceMappingURL=app.settings.js.map