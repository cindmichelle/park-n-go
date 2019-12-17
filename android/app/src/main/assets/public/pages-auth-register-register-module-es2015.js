(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/auth/register/register.page.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow class=\"ion-no-margin ion-no-padding\">\r\n  <ion-toolbar translucent=\"true\">\r\n    <ion-back-button\r\n      slot=\"start\"\r\n      class=\"back\"\r\n      defaultHref=\"/\"\r\n    ></ion-back-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n  <div class=\"header\">\r\n    <div style=\"height: 100px;\">\r\n      <h1 class=\"title\">Register</h1>\r\n      <h6 class=\"caption\">Please fill in a few details below.</h6>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <ion-content onsubmit=\"processForm(event)\"> -->\r\n  <!-- <form #f=\"ngForm\" (ngSubmit)=\"onRegister(f)\"> -->\r\n  <ion-list lines=\"full\" class=\"ion-padding\" style=\"margin-bottom:0px\">\r\n    <ion-item class=\"input-container\">\r\n      <ion-label position=\"stacked\"\r\n        >First Name <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        name=\"fname\"\r\n        type=\"text\"\r\n        class=\"input\"\r\n        placeholder=\"First Name\"\r\n        [(ngModel)]=\"user.firstName\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"\r\n        >Last Name <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        name=\"lname\"\r\n        type=\"text\"\r\n        class=\"input\"\r\n        placeholder=\"Last Name\"\r\n        [(ngModel)]=\"user.lastName\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"\r\n        >Email <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        name=\"email\"\r\n        inputmode=\"email\"\r\n        class=\"input\"\r\n        placeholder=\"your@mail.com\"\r\n        [(ngModel)]=\"user.email\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"\r\n        >Phone Number <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        name=\"phoneNo\"\r\n        type=\"number\"\r\n        placeholder=\"Phone Number\"\r\n        class=\"input\"\r\n        [(ngModel)]=\"user.phoneNo\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"\r\n        >Password <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        name=\"pwd\"\r\n        type=\"password\"\r\n        minlength=\"6\"\r\n        class=\"input\"\r\n        placeholder=\"******\"\r\n        [(ngModel)]=\"user.password\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\"\r\n        >Confirm Password <ion-text color=\"danger\">*</ion-text></ion-label\r\n      >\r\n      <ion-input\r\n        required\r\n        name=\"confirmPwd\"\r\n        type=\"password\"\r\n        minlength=\"6\"\r\n        placeholder=\"******\"\r\n        class=\"input\"\r\n        [(ngModel)]=\"user.confirmPassword\"\r\n        [ngModelOptions]=\"{ standalone: true }\"\r\n      ></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button\r\n      expand=\"block\"\r\n      type=\"submit\"\r\n      (click)=\"onRegister()\"\r\n      [disabled]=\"\r\n        !(\r\n          user.firstName &&\r\n          user.lastName &&\r\n          user.email &&\r\n          user.password &&\r\n          user.confirmPassword &&\r\n          user.phoneNo\r\n        ) || user.password != user.confirmPassword\r\n      \"\r\n      class=\"login\"\r\n      >Create account</ion-button\r\n    >\r\n  </div>\r\n  <!-- </form> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/auth/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/auth/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/auth/register/register.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caption {\n  font-size: 12px;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 50px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.title {\n  color: white;\n  font-size: 30px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.login {\n  border: 1px #f17800 solid;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  height: 52px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n}\n\n.conditions-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n}\n\n.conditions-caption {\n  font-size: 11px;\n  margin-left: 5px;\n}\n\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background-repeat: no-repeat;\n  background-image: url('banner.png');\n  background-size: cover;\n  height: 30vh;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\nion-content {\n  position: absolute;\n  left: 0;\n  width: 100vw;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-back-button {\n  --color: white;\n}\n\n.input {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFFQSxPQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXB0aW9uIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnYm9sZCc7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubG9naW4ge1xyXG4gIGJvcmRlcjogMXB4ICNmMTc4MDAgc29saWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNvbmRpdGlvbnMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmNvbmRpdGlvbnMtY2FwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIiwiLmNhcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmxvZ2luIHtcbiAgYm9yZGVyOiAxcHggI2YxNzgwMCBzb2xpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNvbmRpdGlvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbmRpdGlvbnMtY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAzMHZoO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/auth/register/register.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/auth/register/register.page.ts ***!
  \******************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let RegisterPage = class RegisterPage {
    constructor(authSvc, router, toastCtrl, storage) {
        this.authSvc = authSvc;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.checkedBtn = false;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: '',
            password: '',
            confirmPassword: '',
        };
    }
    ngOnInit() { }
    onRegister() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.authSvc.signup(this.user.email, this.user.password).subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                try {
                    if (resp.idToken) {
                        const newUser = {
                            firstName: this.user.firstName,
                            lastName: this.user.lastName,
                            email: this.user.email,
                            phoneNo: this.user.phoneNo,
                        };
                        yield this.authSvc.addNewUser(newUser);
                        yield this.storage.set('token', this.user.email);
                        yield this.presentSuccessToast();
                        this.router.navigateByUrl('/tabs/parking');
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }), (errorResp) => {
                if (errorResp.error.error.message === 'EMAIL_EXISTS') {
                    this.presentEmailExistToast();
                }
                else {
                    console.log('error', errorResp);
                }
            });
        });
    }
    presentSuccessToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `Hello, ${this.user.firstName}! Your registration is success. `,
                duration: 3000,
            });
            yield toast.present();
        });
    }
    presentEmailExistToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `Email is already registered.`,
                duration: 3000,
            });
            yield toast.present();
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-register-register-module-es2015.js.map