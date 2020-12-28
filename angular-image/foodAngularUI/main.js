(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\IdeaProjects\foodAngularUI\src\main.ts */"zUnb");


/***/ }),

/***/ "1EJ/":
/*!**********************************************!*\
  !*** ./src/app/model/userregistrationdto.ts ***!
  \**********************************************/
/*! exports provided: UserRegistrationDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationDTO", function() { return UserRegistrationDTO; });
class UserRegistrationDTO {
    constructor(username, password, name, surname, phoneNumber, account) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.account = account;
    }
}


/***/ }),

/***/ "8B+i":
/*!*********************************!*\
  !*** ./src/app/model/ration.ts ***!
  \*********************************/
/*! exports provided: Ration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ration", function() { return Ration; });
class Ration {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EA9T":
/*!****************************************************!*\
  !*** ./src/app/services/ration-service.service.ts ***!
  \****************************************************/
/*! exports provided: RationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationService", function() { return RationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_current_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/current-user-service */ "beD5");







class RationService {
    constructor(http, modelService) {
        this.http = http;
        this.modelService = modelService;
        this.usersUrl = 'http://localhost:8080/operator/rations';
        this.deleteurl = 'http://localhost:8080/operator/deleterations';
        this.clientRation = 'http://localhost:8080/client/rations';
        this.id = modelService.getCurrentId();
    }
    findAll() {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.get(this.usersUrl, { headers });
    }
    delete(ids) {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration delete is ' + ids);
        console.log(JSON.stringify(ids));
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.post(this.deleteurl, ids, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return console.error(data); })));
    }
    // tslint:disable-next-line:typedef
    save(ration) {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.post(this.usersUrl, ration, { headers });
    }
    findAllForClient() {
        const token = localStorage.getItem(String(this.id));
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.get(this.clientRation, { headers });
    }
}
RationService.ɵfac = function RationService_Factory(t) { return new (t || RationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_model_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"])); };
RationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RationService, factory: RationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _model_current_user_service__WEBPACK_IMPORTED_MODULE_4__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_authrequestdto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/authrequestdto */ "helI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        console.log('try login', username);
        this.authRequest = new _model_authrequestdto__WEBPACK_IMPORTED_MODULE_1__["AuthRequestDTO"](username, password);
        return this.http.post('http://localhost:8080/auth', this.authRequest, { responseType: 'text' });
    }
    registerUser(client) {
        this.http.post('http://localhost:8080/registration', client)
            .subscribe(data => { });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "FZ6U":
/*!***************************************************************************!*\
  !*** ./src/app/components/operator-coupons/operator-coupons.component.ts ***!
  \***************************************************************************/
/*! exports provided: OperatorCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorCouponsComponent", function() { return OperatorCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/coupon.service */ "f8CG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function OperatorCouponsComponent_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.shipping);
} }
function OperatorCouponsComponent_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OperatorCouponsComponent_tbody_17_tr_1_Template, 11, 5, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.coupons);
} }
function OperatorCouponsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OperatorCouponsComponent {
    constructor(couponService) {
        this.couponService = couponService;
        this.coupons = [];
    }
    ngOnInit() {
        this.couponService.getAllCoupons().subscribe(data => {
            this.coupons = data;
        });
    }
}
OperatorCouponsComponent.ɵfac = function OperatorCouponsComponent_Factory(t) { return new (t || OperatorCouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_coupon_service__WEBPACK_IMPORTED_MODULE_1__["CouponService"])); };
OperatorCouponsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorCouponsComponent, selectors: [["app-operator-coupons"]], decls: 20, vars: 2, consts: [[1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["noCoupons", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"]], template: function OperatorCouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shipping date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OperatorCouponsComponent_tbody_17_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OperatorCouponsComponent_ng_template_18_Template, 10, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVyYXRvci1jb3Vwb25zLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorCouponsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operator-coupons',
                templateUrl: './operator-coupons.component.html',
                styleUrls: ['./operator-coupons.component.css']
            }]
    }], function () { return [{ type: _services_coupon_service__WEBPACK_IMPORTED_MODULE_1__["CouponService"] }]; }, null); })();


/***/ }),

/***/ "Jmk/":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClientService {
    constructor() { }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(); };
ClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "O/Ln":
/*!***********************************************************************!*\
  !*** ./src/app/components/operator-order/operator-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: OperatorOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorOrderComponent", function() { return OperatorOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "kVqo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





function OperatorOrderComponent_tbody_21_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperatorOrderComponent_tbody_21_tr_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const order_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.confirmOrder(order_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.rationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.subscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.fullAddress);
} }
function OperatorOrderComponent_tbody_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OperatorOrderComponent_tbody_21_tr_1_Template, 17, 6, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
} }
function OperatorOrderComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class OperatorOrderComponent {
    constructor(orderService, cdr) {
        this.orderService = orderService;
        this.cdr = cdr;
        this.orders = [];
    }
    ngOnInit() {
        this.orderService.findAll('operator').subscribe(data => {
            this.orders = data;
        });
    }
    confirmOrder(id) {
        this.orderService.orderConfirmation(id).subscribe(data => data);
        this.cdr.detectChanges();
    }
}
OperatorOrderComponent.ɵfac = function OperatorOrderComponent_Factory(t) { return new (t || OperatorOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OperatorOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorOrderComponent, selectors: [["app-operator-order"]], decls: 24, vars: 2, consts: [[1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["noOrders", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"], ["mat-mini-fab", "", 1, "button", "button5", 3, "click"]], template: function OperatorOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ration Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shipping date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subscribed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OperatorOrderComponent_tbody_21_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, OperatorOrderComponent_ng_template_22_Template, 12, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".button[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  \r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  \r\n  margin: 4px 2px;\r\n}\r\n\r\n.button5[_ngcontent-%COMP%] {border-radius: 50%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdG9yLW9yZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUEsVUFBVSxrQkFBa0IsQ0FBQyIsImZpbGUiOiJvcGVyYXRvci1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMHB4OyovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLypmb250LXNpemU6IDE2cHg7Ki9cclxuICBtYXJnaW46IDRweCAycHg7XHJcbn1cclxuXHJcbi5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operator-order',
                templateUrl: './operator-order.component.html',
                styleUrls: ['./operator-order.component.css']
            }]
    }], function () { return [{ type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "Piuq":
/*!*****************************************************************!*\
  !*** ./src/app/components/ration-form/ration-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: RationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationFormComponent", function() { return RationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_ration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/ration */ "8B+i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ration_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ration-service.service */ "EA9T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class RationFormComponent {
    constructor(router, route, rationService) {
        this.router = router;
        this.route = route;
        this.rationService = rationService;
        this.ration = new _model_ration__WEBPACK_IMPORTED_MODULE_1__["Ration"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.rationService.save(this.ration).subscribe(result => this.gotoRationList());
    }
    gotoRationList() {
        this.router.navigate(['/rations']);
    }
}
RationFormComponent.ɵfac = function RationFormComponent_Factory(t) { return new (t || RationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ration_service_service__WEBPACK_IMPORTED_MODULE_3__["RationService"])); };
RationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RationFormComponent, selectors: [["app-ration-form"]], decls: 27, vars: 7, consts: [[1, "card", "my-5"], [1, "card-body", 2, "width", "max-content"], [3, "ngSubmit"], ["rationForm", "ngForm"], [1, "form-group"], ["for", "ration_name"], ["type", "text", "id", "ration_name", "name", "ration_name", "placeholder", "Enter the ration name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "description"], ["type", "text", "id", "description", "name", "description", "placeholder", "Enter a description", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "price"], ["type", "number", "id", "price", "name", "ration_price", "placeholder", "Enter a price", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"]], template: function RationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RationFormComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ration name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RationFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.ration.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ration name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ration description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RationFormComponent_Template_input_ngModelChange_14_listener($event) { return ctx.ration.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ration description is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RationFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.ration.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price of the ration is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ration.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ration.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ration.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ration-form',
                templateUrl: './ration-form.component.html',
                styleUrls: ['./ration-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_ration_service_service__WEBPACK_IMPORTED_MODULE_3__["RationService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'foodAngularUI';
        this.title = 'Food Delivery Service';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "Te1A":
/*!*************************************************************************!*\
  !*** ./src/app/components/courier-coupons/courier-coupons.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourierCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourierCouponsComponent", function() { return CourierCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/coupon.service */ "f8CG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function CourierCouponsComponent_tbody_19_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourierCouponsComponent_tbody_19_tr_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const coupon_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.doneCoupon(coupon_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.shipping);
} }
function CourierCouponsComponent_tbody_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourierCouponsComponent_tbody_19_tr_1_Template, 13, 4, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.coupons);
} }
function CourierCouponsComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "for shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CourierCouponsComponent {
    constructor(couponService, cdr, router) {
        this.couponService = couponService;
        this.cdr = cdr;
        this.router = router;
        this.coupons = [];
    }
    ngOnInit() {
        this.couponService.getCouponsForCourier().subscribe(data => {
            this.coupons = data;
        });
    }
    doneCoupon(id) {
        this.couponService.couponDone(id, 'courier').subscribe(data => this.ngOnInit());
    }
    gotToOrderList() {
        this.cdr.detectChanges();
    }
}
CourierCouponsComponent.ɵfac = function CourierCouponsComponent_Factory(t) { return new (t || CourierCouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_coupon_service__WEBPACK_IMPORTED_MODULE_1__["CouponService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CourierCouponsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourierCouponsComponent, selectors: [["app-courier-coupons"]], decls: 22, vars: 2, consts: [[1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["noCoupons", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"], ["mat-mini-fab", "", 1, "button", "button5", 3, "click"]], template: function CourierCouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shipping date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CourierCouponsComponent_tbody_19_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CourierCouponsComponent_ng_template_20_Template, 12, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".blue[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  \r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  \r\n  margin: 4px 2px;\r\n}\r\n.button5[_ngcontent-%COMP%] {border-radius: 50%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJpZXItY291cG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQSxVQUFVLGtCQUFrQixDQUFDIiwiZmlsZSI6ImNvdXJpZXItY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuLmJ1dHRvbi1ibHVlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMHB4OyovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLypmb250LXNpemU6IDE2cHg7Ki9cclxuICBtYXJnaW46IDRweCAycHg7XHJcbn1cclxuXHJcbi5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourierCouponsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-courier-coupons',
                templateUrl: './courier-coupons.component.html',
                styleUrls: ['./courier-coupons.component.css']
            }]
    }], function () { return [{ type: _services_coupon_service__WEBPACK_IMPORTED_MODULE_1__["CouponService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _model_current_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/current-user-service */ "beD5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../registration/registration.component */ "dtpt");
/* harmony import */ var _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client-dashboard/client-dashboard.component */ "qtPe");
/* harmony import */ var _cook_coupons_cook_coupons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cook-coupons/cook-coupons.component */ "cJhT");
/* harmony import */ var _courier_coupons_courier_coupons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../courier-coupons/courier-coupons.component */ "Te1A");
/* harmony import */ var _operator_dashboard_operator_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../operator-dashboard/operator-dashboard.component */ "XyWR");












function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log in to your account or register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.doLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.registration(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
} }
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-client-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cook-coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-courier-coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-operator-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_2_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_div_2_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_2_div_3_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_2_div_4_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.auth.role === "ROLE_CLIENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.auth.role === "ROLE_COOK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.auth.role === "ROLE_COURIER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.auth.role === "ROLE_OPERATOR");
} }
class LoginComponent {
    constructor(loginService, router, currentUserService) {
        this.loginService = loginService;
        this.router = router;
        this.currentUserService = currentUserService;
        this.isLogin = false;
        this.isRegistr = false;
    }
    ngOnInit() {
    }
    doLogin() {
        this.loginService.login(this.username, this.password).subscribe(data => {
            this.auth = JSON.parse(data);
            const jwt = this.auth.jwt;
            const role = this.auth.role;
            const id = this.auth.id;
            console.log('data = ', data);
            console.log(jwt);
            console.log(role);
            console.log(id);
            localStorage.setItem(String(id), jwt);
            this.currentUserService.setCurrentId(id);
            console.log('In the current user service id = ', this.currentUserService.getCurrentId());
            if (role !== null && (role === 'ROLE_CLIENT' || role === 'ROLE_COOK' || role === 'ROLE_COURIER' || role === 'ROLE_OPERATOR')) {
                this.isLogin = true;
            }
        });
    }
    registration() {
        this.isRegistr = !this.isRegistr;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_model_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 3, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "tiny-reg"], [1, "form-group"], ["type", "text", "placeholder", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "inline"], ["type", "submit", 1, "card", "tiny-btn", 3, "click"], ["type", "button", "target", "_blank", "rel", "noopener", 1, "card", "tiny-btn", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 19, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 5, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRegistr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"], _client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["ClientDashboardComponent"], _cook_coupons_cook_coupons_component__WEBPACK_IMPORTED_MODULE_8__["CookCouponsComponent"], _courier_coupons_courier_coupons_component__WEBPACK_IMPORTED_MODULE_9__["CourierCouponsComponent"], _operator_dashboard_operator_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["OperatorDashboardComponent"]], styles: [".tiny-reg[_ngcontent-%COMP%] {\r\n  margin-left: auto ;\r\n  margin-right: auto ;\r\n  width: 20em;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.tiny-btn[_ngcontent-%COMP%] {\r\n  margin-left: auto ;\r\n  margin-right: auto ;\r\n  width: 20em;\r\n  height: 1em;\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.btn-inline[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  padding: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbnktcmVnIHtcclxuICBtYXJnaW4tbGVmdDogYXV0byA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvIDtcclxuICB3aWR0aDogMjBlbTtcclxufVxyXG5cclxuLmlubGluZXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi50aW55LWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0byA7XHJcbiAgd2lkdGg6IDIwZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5idG4taW5saW5le1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _model_current_user_service__WEBPACK_IMPORTED_MODULE_3__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "XyWR":
/*!*******************************************************************************!*\
  !*** ./src/app/components/operator-dashboard/operator-dashboard.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperatorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorDashboardComponent", function() { return OperatorDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class OperatorDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
OperatorDashboardComponent.ɵfac = function OperatorDashboardComponent_Factory(t) { return new (t || OperatorDashboardComponent)(); };
OperatorDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperatorDashboardComponent, selectors: [["app-operator-dashboard"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "card-body"], [1, "text-center", "list-inline", "py-3"], [1, "list-inline-item"], ["routerLink", "/rations", 1, "btn", "button-blue"], ["routerLink", "/addRation", 1, "btn", "button-blue"], ["routerLink", "/operator_orders", 1, "btn", "button-blue"], ["routerLink", "/operator_coupons", 1, "btn", "button-blue"]], template: function OperatorDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "List Of Rations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Ration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "List Of Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "List Of Coupons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdG9yLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoib3BlcmF0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWJsdWUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operator-dashboard',
                templateUrl: './operator-dashboard.component.html',
                styleUrls: ['./operator-dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_ration_list_ration_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ration-list/ration-list.component */ "du1X");
/* harmony import */ var _components_ration_form_ration_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ration-form/ration-form.component */ "Piuq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ration_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/ration-service.service */ "EA9T");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/registration/registration.component */ "dtpt");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/login.service */ "EFyh");
/* harmony import */ var _model_current_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/current-user-service */ "beD5");
/* harmony import */ var _components_operator_dashboard_operator_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/operator-dashboard/operator-dashboard.component */ "XyWR");
/* harmony import */ var _components_operator_order_operator_order_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/operator-order/operator-order.component */ "O/Ln");
/* harmony import */ var _components_operator_coupons_operator_coupons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/operator-coupons/operator-coupons.component */ "FZ6U");
/* harmony import */ var _components_client_order_client_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/client-order/client-order.component */ "Zbca");
/* harmony import */ var _components_client_refaund_client_refaund_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/client-refaund/client-refaund.component */ "ecHa");
/* harmony import */ var _components_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/client-dashboard/client-dashboard.component */ "qtPe");
/* harmony import */ var _components_courier_coupons_courier_coupons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/courier-coupons/courier-coupons.component */ "Te1A");
/* harmony import */ var _components_cook_coupons_cook_coupons_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cook-coupons/cook-coupons.component */ "cJhT");
/* harmony import */ var _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/client-list/client-list.component */ "tHoG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/client.service */ "Jmk/");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/coupon.service */ "f8CG");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/order.service */ "kVqo");





























const routes = [
    // {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'rations', component: _components_ration_list_ration_list_component__WEBPACK_IMPORTED_MODULE_5__["RationListComponent"] },
    { path: 'addRation', component: _components_ration_form_ration_form_component__WEBPACK_IMPORTED_MODULE_6__["RationFormComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'registration', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"] },
    { path: 'operator', component: _components_operator_dashboard_operator_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["OperatorDashboardComponent"] },
    { path: 'operator_orders', component: _components_operator_order_operator_order_component__WEBPACK_IMPORTED_MODULE_15__["OperatorOrderComponent"] },
    { path: 'operator_coupons', component: _components_operator_coupons_operator_coupons_component__WEBPACK_IMPORTED_MODULE_16__["OperatorCouponsComponent"] },
    { path: 'make_order', component: _components_client_order_client_order_component__WEBPACK_IMPORTED_MODULE_17__["ClientOrderComponent"] },
    { path: 'refund', component: _components_client_refaund_client_refaund_component__WEBPACK_IMPORTED_MODULE_18__["ClientRefaundComponent"] },
    { path: 'order_list', component: _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_22__["ClientListComponent"] },
    { path: 'cook_list', component: _components_cook_coupons_cook_coupons_component__WEBPACK_IMPORTED_MODULE_21__["CookCouponsComponent"] },
    { path: 'courier_list', component: _components_courier_coupons_courier_coupons_component__WEBPACK_IMPORTED_MODULE_20__["CourierCouponsComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_ration_service_service__WEBPACK_IMPORTED_MODULE_9__["RationService"], _services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"], _model_current_user_service__WEBPACK_IMPORTED_MODULE_13__["CurrentUserService"], _services_client_service__WEBPACK_IMPORTED_MODULE_24__["ClientService"], _services_coupon_service__WEBPACK_IMPORTED_MODULE_25__["CouponService"], _services_order_service__WEBPACK_IMPORTED_MODULE_26__["OrderService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_ration_list_ration_list_component__WEBPACK_IMPORTED_MODULE_5__["RationListComponent"],
        _components_ration_form_ration_form_component__WEBPACK_IMPORTED_MODULE_6__["RationFormComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
        _components_operator_dashboard_operator_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["OperatorDashboardComponent"],
        _components_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["ClientDashboardComponent"],
        _components_operator_order_operator_order_component__WEBPACK_IMPORTED_MODULE_15__["OperatorOrderComponent"],
        _components_client_order_client_order_component__WEBPACK_IMPORTED_MODULE_17__["ClientOrderComponent"],
        _components_operator_coupons_operator_coupons_component__WEBPACK_IMPORTED_MODULE_16__["OperatorCouponsComponent"],
        _components_courier_coupons_courier_coupons_component__WEBPACK_IMPORTED_MODULE_20__["CourierCouponsComponent"],
        _components_cook_coupons_cook_coupons_component__WEBPACK_IMPORTED_MODULE_21__["CookCouponsComponent"],
        _components_client_refaund_client_refaund_component__WEBPACK_IMPORTED_MODULE_18__["ClientRefaundComponent"],
        _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_22__["ClientListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_ration_list_ration_list_component__WEBPACK_IMPORTED_MODULE_5__["RationListComponent"],
                    _components_ration_form_ration_form_component__WEBPACK_IMPORTED_MODULE_6__["RationFormComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                    _components_operator_dashboard_operator_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["OperatorDashboardComponent"],
                    _components_client_dashboard_client_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["ClientDashboardComponent"],
                    _components_operator_order_operator_order_component__WEBPACK_IMPORTED_MODULE_15__["OperatorOrderComponent"],
                    _components_client_order_client_order_component__WEBPACK_IMPORTED_MODULE_17__["ClientOrderComponent"],
                    _components_operator_coupons_operator_coupons_component__WEBPACK_IMPORTED_MODULE_16__["OperatorCouponsComponent"],
                    _components_courier_coupons_courier_coupons_component__WEBPACK_IMPORTED_MODULE_20__["CourierCouponsComponent"],
                    _components_cook_coupons_cook_coupons_component__WEBPACK_IMPORTED_MODULE_21__["CookCouponsComponent"],
                    _components_client_refaund_client_refaund_component__WEBPACK_IMPORTED_MODULE_18__["ClientRefaundComponent"],
                    _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_22__["ClientListComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
                providers: [_services_ration_service_service__WEBPACK_IMPORTED_MODULE_9__["RationService"], _services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"], _model_current_user_service__WEBPACK_IMPORTED_MODULE_13__["CurrentUserService"], _services_client_service__WEBPACK_IMPORTED_MODULE_24__["ClientService"], _services_coupon_service__WEBPACK_IMPORTED_MODULE_25__["CouponService"], _services_order_service__WEBPACK_IMPORTED_MODULE_26__["OrderService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zbca":
/*!*******************************************************************!*\
  !*** ./src/app/components/client-order/client-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientOrderComponent", function() { return ClientOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_orderdto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/orderdto */ "z8ui");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "kVqo");
/* harmony import */ var _services_ration_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ration-service.service */ "EA9T");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ClientOrderComponent_tbody_47_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ration_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r11.price);
} }
function ClientOrderComponent_tbody_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientOrderComponent_tbody_47_tr_1_Template, 9, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.rations);
} }
function ClientOrderComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "rations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClientOrderComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no rations yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClientOrderComponent {
    constructor(router, route, orderServices, rationService) {
        this.router = router;
        this.route = route;
        this.orderServices = orderServices;
        this.rationService = rationService;
        this.rations = [];
        this.order = new _model_orderdto__WEBPACK_IMPORTED_MODULE_1__["OrderDTO"]();
    }
    ngOnInit() {
        this.rationService.findAllForClient().subscribe(data => {
            this.rations = data;
        });
    }
    onSubmit() {
        this.orderServices.makeOrder(this.order).subscribe(result => this.gotToOrderList());
    }
    gotToOrderList() {
        this.router.navigate(['/order_list']);
    }
}
ClientOrderComponent.ɵfac = function ClientOrderComponent_Factory(t) { return new (t || ClientOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ration_service_service__WEBPACK_IMPORTED_MODULE_4__["RationService"])); };
ClientOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientOrderComponent, selectors: [["app-client-order"]], decls: 52, vars: 11, consts: [[1, "card", "my-5"], [1, "card-body", 2, "width", "max-content"], [3, "ngSubmit"], ["rationForm", "ngForm"], [1, "form-group"], ["for", "ration_id"], ["type", "number", "id", "ration_id", "name", "ration_id", "placeholder", "Enter a ration id", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "order_address"], ["type", "text", "id", "order_address", "name", "order_address", "placeholder", "Enter a address", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "shipping"], ["type", "date", "id", "shipping", "name", "shipping", "placeholder", "Enter shipping date", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "subscribe"], ["type", "number", "id", "subscribe", "name", "subscribe", "placeholder", "Enter subscribe times", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "button-blue", 3, "disabled"], [1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["noRations", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"]], template: function ClientOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientOrderComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ration id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientOrderComponent_Template_input_ngModelChange_7_listener($event) { return ctx.order.rationId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ration number is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientOrderComponent_Template_input_ngModelChange_14_listener($event) { return ctx.order.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Shipping Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientOrderComponent_Template_input_ngModelChange_21_listener($event) { return ctx.order.shippingDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Date is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientOrderComponent_Template_input_ngModelChange_28_listener($event) { return ctx.order.subscribed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Subscribed is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "thead", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Ration Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ration Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ClientOrderComponent_tbody_47_Template, 2, 1, "tbody", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ClientOrderComponent_ng_template_48_Template, 12, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ClientOrderComponent_ng_template_50_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.order.rationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.order.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.order.shippingDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.order.subscribed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rations.length)("ngIfElse", _r6);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".blue[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImNsaWVudC1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuLmJ1dHRvbi1ibHVlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-order',
                templateUrl: './client-order.component.html',
                styleUrls: ['./client-order.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }, { type: _services_ration_service_service__WEBPACK_IMPORTED_MODULE_4__["RationService"] }]; }, null); })();


/***/ }),

/***/ "beD5":
/*!***********************************************!*\
  !*** ./src/app/model/current-user-service.ts ***!
  \***********************************************/
/*! exports provided: CurrentUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserService", function() { return CurrentUserService; });
class CurrentUserService {
    setCurrentId(id) {
        this.id = id;
    }
    getCurrentId() {
        const temp = this.id;
        // this.id = undefined;
        return temp;
    }
}


/***/ }),

/***/ "cJhT":
/*!*******************************************************************!*\
  !*** ./src/app/components/cook-coupons/cook-coupons.component.ts ***!
  \*******************************************************************/
/*! exports provided: CookCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookCouponsComponent", function() { return CookCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_coupon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/coupon.service */ "f8CG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function CookCouponsComponent_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CookCouponsComponent_tbody_17_tr_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const coupon_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.doneCoupon(coupon_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](coupon_r4.shipping);
} }
function CookCouponsComponent_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CookCouponsComponent_tbody_17_tr_1_Template, 11, 3, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.coupons);
} }
function CookCouponsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Coupons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CookCouponsComponent {
    constructor(couponService, cdr, router) {
        this.couponService = couponService;
        this.cdr = cdr;
        this.router = router;
        this.coupons = [];
    }
    ngOnInit() {
        this.couponService.getAllCouponsForCook().subscribe(data => {
            this.coupons = data;
        });
    }
    doneCoupon(id) {
        this.couponService.couponDone(id, 'cook').subscribe(data => this.ngOnInit());
    }
    gotToOrderList() {
        this.cdr.detectChanges();
    }
}
CookCouponsComponent.ɵfac = function CookCouponsComponent_Factory(t) { return new (t || CookCouponsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_coupon_service__WEBPACK_IMPORTED_MODULE_1__["CouponService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CookCouponsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CookCouponsComponent, selectors: [["app-cook-coupons"]], decls: 20, vars: 2, consts: [[1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["noCoupons", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"], ["mat-mini-fab", "", 1, "button", "button5", 3, "click"]], template: function CookCouponsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ration Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Shipping date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CookCouponsComponent_tbody_17_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CookCouponsComponent_ng_template_18_Template, 10, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coupons.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".blue[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  color: white;\r\n  \r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  \r\n  margin: 4px 2px;\r\n}\r\n.button5[_ngcontent-%COMP%] {border-radius: 50%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvb2stY291cG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQSxVQUFVLGtCQUFrQixDQUFDIiwiZmlsZSI6ImNvb2stY291cG9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWV7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuLmJ1dHRvbi1ibHVlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qcGFkZGluZzogMHB4OyovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLypmb250LXNpemU6IDE2cHg7Ki9cclxuICBtYXJnaW46IDRweCAycHg7XHJcbn1cclxuXHJcbi5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookCouponsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cook-coupons',
                templateUrl: './cook-coupons.component.html',
                styleUrls: ['./cook-coupons.component.css']
            }]
    }], function () { return [{ type: _services_coupon_service__WEBPACK_IMPORTED_MODULE_1__["CouponService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "dtpt":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_userregistrationdto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/userregistrationdto */ "1EJ/");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "EFyh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { backgroundColor: a0 }; };
class RegistrationComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.color = '#fff';
        this.iscliced = false;
        this.clickedText = 'Registered';
    }
    ngOnInit() {
        this.iscliced = false;
        this.color = '#fff';
    }
    registered() {
        this.iscliced = !this.iscliced;
        this.clickedText = 'complete';
        this.color = '#9aec74';
        this.user = new _model_userregistrationdto__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationDTO"](this.username, this.password, this.n, this.surname, this.phoneNumber, this.account);
        this.loginService.registerUser(this.user);
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["app-registration"]], decls: 18, vars: 10, consts: [[1, "tiny-reg"], [1, "form-group"], ["type", "text", "placeholder", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "surname", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "phone number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "balance", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "inline"], ["type", "submit", 1, "card", "tiny-btn", 3, "ngStyle", "click"]], template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_4_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_6_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_8_listener($event) { return ctx.n = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_10_listener($event) { return ctx.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_12_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegistrationComponent_Template_input_ngModelChange_14_listener($event) { return ctx.account = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_16_listener() { return ctx.registered(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.n);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clickedText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: [".tiny-reg[_ngcontent-%COMP%] {\r\n  margin-left: auto ;\r\n  margin-right: auto ;\r\n  width: 20em;\r\n}\r\n\r\n.inline[_ngcontent-%COMP%]{\r\n  display: inline;\r\n}\r\n\r\n.tiny-btn[_ngcontent-%COMP%] {\r\n  margin-left: auto ;\r\n  margin-right: auto ;\r\n  width: 20em;\r\n  height: 1em;\r\n  text-align: center;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.btn-inline[_ngcontent-%COMP%]{\r\n  display: inline;\r\n  padding: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2YiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlueS1yZWcge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvIDtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG8gO1xyXG4gIHdpZHRoOiAyMGVtO1xyXG59XHJcblxyXG4uaW5saW5le1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLnRpbnktYnRuIHtcclxuICBtYXJnaW4tbGVmdDogYXV0byA7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvIDtcclxuICB3aWR0aDogMjBlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmJ0bi1pbmxpbmV7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registration',
                templateUrl: './registration.component.html',
                styleUrls: ['./registration.component.css']
            }]
    }], function () { return [{ type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "du1X":
/*!*****************************************************************!*\
  !*** ./src/app/components/ration-list/ration-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: RationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationListComponent", function() { return RationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_ration_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ration-service.service */ "EA9T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function RationListComponent_tbody_17_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RationListComponent_tbody_17_tr_1_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ration_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.deleteComponent(ration_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ration_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ration_r5.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ration_r5.id, "}");
} }
function RationListComponent_tbody_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RationListComponent_tbody_17_tr_1_Template, 11, 5, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rations);
} }
function RationListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RationListComponent_div_18_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.sendDeleteIds(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Delete Ration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RationListComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "rations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RationListComponent {
    constructor(rationService, cdr) {
        this.rationService = rationService;
        this.cdr = cdr;
        this.rations = [];
        this.ids = [];
    }
    deleteComponent(id) {
        if (this.ids.indexOf(id) === -1) {
            this.ids.push(id);
        }
        else {
            this.ids.splice(this.ids.indexOf(id), 1);
        }
        console.log(this.ids.toString());
    }
    sendDeleteIds() {
        if (this.ids.length > 0) {
            console.log('ids is more then 0');
            this.rationService.delete(this.ids).subscribe(data => data);
            this.rations = this.rations.filter(i => !this.ids.includes(i.id));
            this.cdr.detectChanges();
        }
    }
    ngOnInit() {
        this.rationService.findAll().subscribe(data => {
            this.rations = data;
        });
    }
}
RationListComponent.ɵfac = function RationListComponent_Factory(t) { return new (t || RationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ration_service_service__WEBPACK_IMPORTED_MODULE_1__["RationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
RationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RationListComponent, selectors: [["app-ration-list"]], decls: 21, vars: 3, consts: [[1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["class", "row", 4, "ngIf"], ["noRations", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"], ["type", "checkbox", "name", "needDelete", 3, "id", "click"], [1, "row"], [1, "col-md-12"], [1, "text-center", "list-inline", "py-3"], [1, "list-inline-item"], [1, "btn", "button-blue", 2, "color", "#ffffff", 3, "click"]], template: function RationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ration Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ration Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RationListComponent_tbody_17_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RationListComponent_div_18_Template, 8, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RationListComponent_ng_template_19_Template, 12, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rations.length)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ids.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".blue[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoicmF0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVle1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xyXG59XHJcbi5idXR0b24tYmx1ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ration-list',
                templateUrl: './ration-list.component.html',
                styleUrls: ['./ration-list.component.css']
            }]
    }], function () { return [{ type: _services_ration_service_service__WEBPACK_IMPORTED_MODULE_1__["RationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "ecHa":
/*!***********************************************************************!*\
  !*** ./src/app/components/client-refaund/client-refaund.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientRefaundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRefaundComponent", function() { return ClientRefaundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "kVqo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ClientRefaundComponent {
    constructor(router, route, orderService) {
        this.router = router;
        this.route = route;
        this.orderService = orderService;
    }
    ngOnInit() {
    }
    onSubmit() {
        alert('Thanks for you feedback. We will improve it.');
        this.orderService.makeRefund(this.id).subscribe(data => this.gotoRationList());
    }
    gotoRationList() {
        this.router.navigate(['/order_list']);
    }
}
ClientRefaundComponent.ɵfac = function ClientRefaundComponent_Factory(t) { return new (t || ClientRefaundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"])); };
ClientRefaundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientRefaundComponent, selectors: [["app-client-refaund"]], decls: 17, vars: 3, consts: [[1, "card", "my-5"], [1, "card-body", 2, "width", "max-content"], [3, "ngSubmit"], ["rationForm", "ngForm"], [1, "form-group"], ["for", "order_id"], ["type", "number", "id", "order_id", "name", "order_id", "placeholder", "Enter a order id", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "message"], ["type", "text", "id", "message", "name", "message", "placeholder", "Why are you want make refund? ", 1, "form-control"], ["type", "submit", 1, "btn", "button-blue", 3, "disabled"]], template: function ClientRefaundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ClientRefaundComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClientRefaundComponent_Template_input_ngModelChange_7_listener($event) { return ctx.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ration number is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "What's wrong?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r1.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".blue[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\r\n.button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZWZhdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY2xpZW50LXJlZmF1bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVle1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xyXG59XHJcbi5idXR0b24tYmx1ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientRefaundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-refaund',
                templateUrl: './client-refaund.component.html',
                styleUrls: ['./client-refaund.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }]; }, null); })();


/***/ }),

/***/ "f8CG":
/*!********************************************!*\
  !*** ./src/app/services/coupon.service.ts ***!
  \********************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/current-user-service */ "beD5");





class CouponService {
    constructor(http, modelService) {
        this.http = http;
        this.modelService = modelService;
        this.getAllOperatorCoupons = 'http://localhost:8080/operator/operator_coupons';
        this.getAllCookCoupons = 'http://localhost:8080/cook/cook_coupons';
        this.getCourierCoupons = 'http://localhost:8080/courier/coupons';
        this.id = modelService.getCurrentId();
    }
    getAllCoupons() {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.get(this.getAllOperatorCoupons, { headers });
    }
    getAllCouponsForCook() {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.get(this.getAllCookCoupons, { headers });
    }
    getCouponsForCourier() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + localStorage.getItem(String(this.id)));
        return this.http.get(this.getCourierCoupons, { headers });
    }
    couponDone(id, person) {
        const token = localStorage.getItem(String(this.id));
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return person === 'cook' ? this.http.post(this.getAllCookCoupons, id, { headers }) :
            this.http.post(this.getCourierCoupons, id, { headers });
    }
}
CouponService.ɵfac = function CouponService_Factory(t) { return new (t || CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_model_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
CouponService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CouponService, factory: CouponService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CouponService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _model_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "helI":
/*!*****************************************!*\
  !*** ./src/app/model/authrequestdto.ts ***!
  \*****************************************/
/*! exports provided: AuthRequestDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRequestDTO", function() { return AuthRequestDTO; });
class AuthRequestDTO {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "kVqo":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_current_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/current-user-service */ "beD5");





class OrderService {
    constructor(http, modelService) {
        this.http = http;
        this.modelService = modelService;
        this.clientUrl = 'http://localhost:8080/client/client_order';
        this.clientRefund = 'http://localhost:8080/client/refund';
        this.allOrderOperatorUrl = 'http://localhost:8080/operator/orders';
        this.id = modelService.getCurrentId();
    }
    makeOrder(order) {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.post(this.clientUrl, order, { headers });
    }
    findAll(whoIS) {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return whoIS === 'client' ? this.http.get(this.clientUrl, { headers }) :
            this.http.get(this.allOrderOperatorUrl, { headers });
    }
    orderConfirmation(id) {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.post(this.allOrderOperatorUrl, id, { headers });
    }
    makeRefund(id) {
        const token = localStorage.getItem(String(this.id));
        console.log(token);
        console.log('Id in ration service is ' + this.id);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        return this.http.post(this.clientRefund, id, { headers });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_model_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _model_current_user_service__WEBPACK_IMPORTED_MODULE_2__["CurrentUserService"] }]; }, null); })();


/***/ }),

/***/ "qtPe":
/*!***************************************************************************!*\
  !*** ./src/app/components/client-dashboard/client-dashboard.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClientDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDashboardComponent", function() { return ClientDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ClientDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientDashboardComponent.ɵfac = function ClientDashboardComponent_Factory(t) { return new (t || ClientDashboardComponent)(); };
ClientDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientDashboardComponent, selectors: [["app-client-dashboard"]], decls: 17, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "card-body"], [1, "text-center", "list-inline", "py-3"], [1, "list-inline-item"], ["routerLink", "/order_list", 1, "btn", "button-blue"], ["routerLink", "/make_order", 1, "btn", "button-blue"], ["routerLink", "/refund", 1, "btn", "button-blue"]], template: function ClientDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Make order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Refund order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".button-blue[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #1976d2;\r\n  border-color: #1976d2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImNsaWVudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tYmx1ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-dashboard',
                templateUrl: './client-dashboard.component.html',
                styleUrls: ['./client-dashboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tHoG":
/*!*****************************************************************!*\
  !*** ./src/app/components/client-list/client-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "kVqo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ClientListComponent_tbody_19_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.rationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.subscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r4.fullAddress);
} }
function ClientListComponent_tbody_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientListComponent_tbody_19_tr_1_Template, 13, 6, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
} }
function ClientListComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ClientListComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orders = [];
    }
    ngOnInit() {
        this.orderService.findAll('client').subscribe(data => {
            this.orders = data;
        });
    }
}
ClientListComponent.ɵfac = function ClientListComponent_Factory(t) { return new (t || ClientListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
ClientListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientListComponent, selectors: [["app-client-list"]], decls: 22, vars: 2, consts: [[1, "card-body"], [1, "table", "table-bordered", "table-striped"], [1, "blue"], ["scope", "col"], [4, "ngIf", "ngIfElse"], ["noOrders", ""], [4, "ngFor", "ngForOf"], ["lang", "ru"]], template: function ClientListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ration Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shipping date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subscribed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClientListComponent_tbody_19_Template, 2, 1, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ClientListComponent_ng_template_20_Template, 11, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orders.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-list',
                templateUrl: './client-list.component.html',
                styleUrls: ['./client-list.component.css']
            }]
    }], function () { return [{ type: _services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"] }]; }, null); })();


/***/ }),

/***/ "z8ui":
/*!***********************************!*\
  !*** ./src/app/model/orderdto.ts ***!
  \***********************************/
/*! exports provided: OrderDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDTO", function() { return OrderDTO; });
class OrderDTO {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map