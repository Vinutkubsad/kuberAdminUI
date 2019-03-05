import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
var AdminDasComponent = /** @class */ (function () {
    function AdminDasComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    AdminDasComponent.prototype.ngOnInit = function () {
        this.getCharitydetails();
    };
    AdminDasComponent.prototype.getCharitydetails = function () {
        var _this = this;
        this.service.getCharitydetails().subscribe(function (res) {
            console.log(res);
            _this.charityResult = res.result.paginatedItems;
        });
    };
    AdminDasComponent.prototype.DisableCharity = function (_id) {
        var _this = this;
        console.log(_id);
        var data = { "disable": true, "id": _id };
        this.service.desableCharity(data).subscribe(function (res) {
            if (res) {
                alert('do you want to disable the charity');
                _this.refresh();
            }
            else {
                alert('cannot be disabled');
            }
        });
    };
    AdminDasComponent.prototype.ApproveCharity = function (_id) {
        var _this = this;
        console.log(_id);
        var data = { "approved": true, "id": _id };
        this.service.approveCharity(data).subscribe(function (res) {
            if (res) {
                alert("Charity Approved");
                _this.refresh();
            }
            else {
                alert("Could not approve");
            }
        });
    };
    AdminDasComponent.prototype.refresh = function () {
        window.location.reload();
    };
    AdminDasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-das',
            templateUrl: './admin-das.component.html',
            styleUrls: ['./admin-das.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], AdminDasComponent);
    return AdminDasComponent;
}());
export { AdminDasComponent };
//# sourceMappingURL=admin-das.component.js.map