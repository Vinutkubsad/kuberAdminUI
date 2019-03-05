import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(fb, adminservices, router) {
        this.fb = fb;
        this.adminservices = adminservices;
        this.router = router;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.loginForm = this.fb.group({
            email: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9_.]+$/i)]),
            password: new FormControl(null, Validators.required)
        });
        var tocken = localStorage.getItem('isLogin');
        if (tocken) {
        }
    };
    AdminLoginComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.adminservices.adminLogin = {
            email: '',
            password: ''
        };
    };
    AdminLoginComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.loginForm.value, "validity", this.loginForm.valid);
        this.adminservices.AdminLogin(this.loginForm.value).subscribe(function (res) {
            if (res) {
                localStorage.setItem('AdminLogin', 'true');
                _this.resetForm();
                _this.router.navigate(['dashboard']);
            }
            else {
                swal("Error!", "You clicked the button!", "warnning");
            }
        });
    };
    AdminLoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-login',
            templateUrl: './admin-login.component.html',
            styleUrls: ['./admin-login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, DataService, Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
export { AdminLoginComponent };
//# sourceMappingURL=admin-login.component.js.map