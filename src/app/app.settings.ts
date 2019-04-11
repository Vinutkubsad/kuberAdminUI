 declare var baseUrl : any;

export class AppSettings{
    public static BASE_URL          = baseUrl;
    public static PAYMENT_REPORT    = '/v1/charityAdmin/getReports';
    public static CHARITY_URL       = '/v1/charities/addCharities';
    public static ADMIN_LOGIN       = '/v1/authenticate/login?role=admin';
    public static CHARITY_ALL       = '/v1/admin/charitiesList';
    public static APPROVE_CHARITY   = '/v1/admin/approveCharity';
    public static CHARITY_LOGIN     = '/v1/charities/login';
    public static SEARCH_REPORT     = '/v1/charityAdmin/searchReports';
    public static SEND_MESSAGE      = '/v1/userDetails/adminhelp';
    public static DISABLE_ENABLE   = '/v1/admin/disableEnable';
    public static ENABLE_CHARITY    = '/v1/admin/approveCharity';
    public static REJECT_CHARITY    = '/v1/admin/rejectCharity';
    public static SEARCH_CHARIY     = '/v1/admin/search';
    public static ADMIN_PROFILE     = '/v1/user/profile';
    public static CHARITY_BY_ID     = '/v1/admin/getCharityById/';
    public static EDIT_CHARITY_DETAILS = '/v1/admin/editCharity/';
    public static SUGGEST_CHARITY   = '/v1/admin/suggestCharity';
}
