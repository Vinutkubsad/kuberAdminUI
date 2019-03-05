import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getReport = function (page, amount, date, status) {
        var httpOption = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
        if (amount !== undefined && date === undefined && status === undefined)
            return this.http.get(url + "?page=" + page + "&amount=" + amount, httpOption);
        else if (amount === undefined && date !== undefined && status === undefined) {
            return this.http.get(url + "?page=" + page + "&date=" + date, httpOption);
        }
        else if (amount === undefined && date === undefined && status !== undefined) {
            return this.http.get(url + "?page=" + page + "&status=" + status, httpOption);
        }
        else
            return this.http.get(url + "?page=" + page, httpOption);
    };
    DataService.prototype.postCharty = function (data) {
        var url = AppSettings.BASE_URL + AppSettings.CHARITY_URL;
        return this.http.post(url, data);
    };
    DataService.prototype.AdminLogin = function (data) {
        var url = AppSettings.BASE_URL + AppSettings.ADMIN_LOGIN;
        return this.http.post(url, data);
    };
    DataService.prototype.getCharitydetails = function () {
        var url = AppSettings.BASE_URL + AppSettings.CHARITY_ALL;
        return this.http.get(url).map(function (data) { return data; });
    };
    DataService.prototype.approveCharity = function (data) {
        var url = AppSettings.BASE_URL + AppSettings.APPROVE_CHARITY;
        return this.http.post(url, data);
    };
    DataService.prototype.desableCharity = function (data) {
        var url = AppSettings.BASE_URL + AppSettings.DISABLE_CHARITY;
        return this.http.post(url, data);
    };
    DataService.prototype.CharityLogin = function (data) {
        var url = AppSettings.BASE_URL + AppSettings.CHARITY_LOGIN;
        return this.http.post(url, data);
    };
    //Search 
    DataService.prototype.searchReport = function (data, page) {
        var httpOption = {
            headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
        };
        var url = AppSettings.BASE_URL + AppSettings.SEARCH_REPORT;
        return this.http.post(url + "?page=" + page, data, httpOption);
    };
    DataService.prototype.sendMessage = function (data) {
        var url = AppSettings.BASE_URL + AppSettings.SEND_MESSAGE;
        return this.http.post(url, data);
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=data.service.js.map