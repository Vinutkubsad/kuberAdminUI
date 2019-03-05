import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router) {
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/adminlogin']);
    };
    NavBarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], NavBarComponent);
    return NavBarComponent;
}());
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map