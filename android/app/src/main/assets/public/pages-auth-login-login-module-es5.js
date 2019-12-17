(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow class=\"ion-no-margin ion-no-padding\">\r\n  <ion-toolbar translucent=\"true\">\r\n    <ion-back-button\r\n      slot=\"start\"\r\n      class=\"back\"\r\n      defaultHref=\"/\"\r\n    ></ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div class=\"header\">\r\n    <div style=\"height: 100px;\">\r\n      <h1 class=\"title\">Login</h1>\r\n      <h6 class=\"caption\">Enter your email and password to Login.</h6>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <form onsubmit=\"processForm(event)\"> -->\r\n  <ion-list padding lines=\"full\" class=\"ion-padding\">\r\n    <ion-item class=\"input-container\">\r\n      <ion-label position=\"stacked\"\r\n        >Email <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        class=\"input\"\r\n        inputmode=\"email\"\r\n        placeholder=\"your@mail.com\"\r\n        [(ngModel)]=\"input.email\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"\r\n        >Password <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        class=\"input\"\r\n        required\r\n        type=\"password\"\r\n        placeholder=\"******\"\r\n        [(ngModel)]=\"input.password\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-button expand=\"block\" type=\"submit\" class=\"login\" (click)=\"onLogin()\"\r\n    >Login</ion-button\r\n  >\r\n  <!-- </form> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caption {\n  font-size: 12px;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 50px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.title {\n  color: white;\n  font-size: 30px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.login {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px #f17800 solid;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  height: 52px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n}\n\n.back {\n  margin-top: 0px;\n}\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background-repeat: no-repeat;\n  background-image: url('banner.png');\n  background-size: cover;\n  height: 30vh;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-content {\n  position: absolute;\n  left: 0;\n  width: 100vw;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-back-button {\n  --color: white;\n}\n\n.input {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURNQTtFQUNFLGtCQUFBO0VBRUEsT0FBQTtFQUNBLFlBQUE7QUNKRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIGJvcmRlcjogMXB4ICNmMTc4MDAgc29saWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi8vIGlvbi1oZWFkZXIuaGVhZGVyLW1kIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuLy8gICBtYXJnaW4tdG9wOiAwO1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iLCIuY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4ubG9naW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMXB4ICNmMTc4MDAgc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5iYWNrIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(authSvc, toastCtrl, router, storage) {
        this.authSvc = authSvc;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.storage = storage;
        this.input = {
            email: '',
            password: '',
        };
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.onLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.authSvc.login(this.input.email, this.input.password).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var error_1;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                if (!resp.idToken) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.storage.set('token', this.input.email)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, this.presentSuccessToast()];
                            case 2:
                                _a.sent();
                                this.router.navigateByUrl('/tabs/parking');
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                error_1 = _a.sent();
                                console.log(error_1);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); }, function (errorResp) {
                    _this.presentFailedToast();
                    console.log('error', errorResp);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.presentSuccessToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "Welcome back. Let's book parking! ",
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentFailedToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: "Incorrect email/password. Please try again.",
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, toast.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es5.js.map