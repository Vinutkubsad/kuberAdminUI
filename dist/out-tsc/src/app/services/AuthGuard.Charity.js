import * as tslib_1 from "tslib";
import { Router } from "@angular/router";
import { DataService } from "./data.service";
import { Injectable } from "@angular/core";
var AuthGaurd1 = /** @class */ (function () {
    function AuthGaurd1(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd1.prototype.canActivate = function (route, state) {
        var tocken = localStorage.getItem('jwt');
        if (tocken) {
            return true;
        }
        this.router.navigate(['/charityUser/signin']);
        return false;
    };
    AuthGaurd1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], AuthGaurd1);
    return AuthGaurd1;
}());
export { AuthGaurd1 };
//# sourceMappingURL=AuthGuard.Charity.js.map