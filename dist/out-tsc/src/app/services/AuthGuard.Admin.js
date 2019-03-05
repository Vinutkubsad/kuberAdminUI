import * as tslib_1 from "tslib";
import { Router } from "@angular/router";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";
var AuthGaurd = /** @class */ (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function (route, state) {
        var tocken = localStorage.getItem('AdminLogin');
        if (tocken) {
            return true;
        }
        this.router.navigate(['/adminlogin']);
        return false;
    };
    AuthGaurd = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], AuthGaurd);
    return AuthGaurd;
}());
export { AuthGaurd };
//# sourceMappingURL=AuthGuard.Admin.js.map