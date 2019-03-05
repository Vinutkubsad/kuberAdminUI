import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';
export var routes = [
    { path: 'adminlogin', component: AdminLoginComponent },
    { path: 'dashboard', component: AdminDasComponent },
    { path: "", redirectTo: "adminlogin", pathMatch: "full" }
    //  { path: 'signin', component: SignInComponent}
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map