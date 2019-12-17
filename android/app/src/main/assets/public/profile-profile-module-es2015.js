(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border no-shadow class=\"ion-no-margin ion-no-padding\">\r\n  <ion-toolbar translucent=\"true\">\r\n    <ion-title>My Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n  <div class=\"header\">\r\n    <ion-avatar class=\"ion-margin-start avatar\">\r\n      <img\r\n        class=\"avatar\"\r\n        src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"\r\n      />\r\n    </ion-avatar>\r\n    <div class=\"info\">\r\n      <h2 class=\"name\">Cindy Michelle</h2>\r\n      <ion-label class=\"email\">cindy.michelle@gmail.com</ion-label>\r\n    </div>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-col>\r\n      <ion-card class=\"card\">\r\n        <ion-item routerLink=\"/account/manage-vehicle\">\r\n          <ion-label class=\"list\">\r\n            <h2>Manage Vehicle</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item routerLink=\"/account/manage-place\" lines=\"none\">\r\n          <ion-label class=\"list\">\r\n            <h2>Manage Places</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-grid>\r\n  <ion-button expand=\"block\" class=\"log-out\" color=\"danger\" (click)=\"onLogOut()\"\r\n    >Log Out</ion-button\r\n  >\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-repeat: no-repeat;\n  background-image: url('banner.png');\n  background-size: cover;\n  height: 40vh;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 70px;\n  padding-bottom: 35px;\n}\n\n.card {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.avatar {\n  width: 86px;\n  height: 86px;\n  border-radius: 43px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n.info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 12px;\n}\n\n.log-out {\n  margin-top: 5px;\n  margin-left: 18px;\n  margin-right: 18px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  height: 52px;\n}\n\n.list {\n  height: 55px;\n  margin: 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.name {\n  color: white;\n  font-size: 20px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.email {\n  color: white;\n  font-size: 14px;\n}\n\nion-content {\n  position: absolute;\n  left: 0;\n  width: 100vw;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-back-button {\n  --color: white;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBRUEsT0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUNBRjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDg2cHg7XHJcbiAgaGVpZ2h0OiA4NnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQzcHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLmxvZy1vdXQge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5lbWFpbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuIiwiLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQzcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmxvZy1vdXQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuXG4ubGlzdCB7XG4gIGhlaWdodDogNTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZW1haWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfilePage = class ProfilePage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    ngOnInit() { }
    onLogOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.storage.delete('token');
            this.router.navigateByUrl('/auth');
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map