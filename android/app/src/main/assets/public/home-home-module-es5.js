(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"\">\r\n    <div class=\"maps\">\r\n      <div id=\"map_canvas\">\r\n        <div class=\"input\">\r\n          <ion-input class=\"\" placeholder=\"Search parking area around you ...\">\r\n            <ion-icon name=\"search\" class=\"icon\" slot=\"start\"></ion-icon>\r\n          </ion-input>\r\n        </div>\r\n\r\n        <div class=\"card\" *ngIf=\"cardAddress && cardAreaName && cardPricePerHour\">\r\n          <div class=\"flex\">\r\n            <ion-label class=\"place\">\r\n              <h2 class=\"name\">\r\n                {{ cardAreaName }}\r\n              </h2>\r\n              <p class=\"address\">{{ cardAddress }}</p>\r\n            </ion-label>\r\n            <div class=\"slot-wrapper\">\r\n              <p class=\"slot-caption\">PARKING<br />AVAILABLE</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"divider\">&nbsp;</div>\r\n          <div class=\"flex bottom-row\">\r\n            <ion-label class=\"place\">\r\n              <h3>\r\n                <b>\r\n                  Rp {{ cardPricePerHour }} / hour\r\n                </b>\r\n              </h3>\r\n            </ion-label>\r\n\r\n<!--            <ion-button-->\r\n<!--              color=\"secondary\"-->\r\n<!--              (click)=\"showBookingConfirmation(cardPlaceId)\"-->\r\n<!--              class=\"book\"-->\r\n<!--              >Book now</ion-button>-->\r\n\r\n            <ion-button\r\n              color=\"secondary\"\r\n              (click)=\"showBookingConfirmation(cardPlaceId)\"\r\n              [routerLink]=\"['/', 'booking', cardPlaceId, cardPricePerHour]\"\r\n              class=\"book\"\r\n            >Book now</ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maps {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n\n#map_canvas {\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n\n.input {\n  font-family: \"regular\";\n  font-size: 14px;\n  margin-top: 20px;\n  background-color: white;\n  border-radius: 10px;\n  border: 1px #9d9c9c solid;\n  box-shadow: 4px 6px 21px -5px rgba(0, 0, 0, 0.3);\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.icon {\n  margin-left: 15px;\n  font-size: 18px;\n  margin-right: 10px;\n}\n\n.name {\n  font-size: 18px;\n  color: #2d2d2d;\n}\n\n.address {\n  font-size: 14px;\n  color: #a3a3a3;\n}\n\n.slot {\n  font-size: 20px;\n  color: #ff9933;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.slot-caption {\n  color: #ffa64d;\n  font-size: 12px;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.card {\n  position: fixed;\n  bottom: 20px;\n  right: 0;\n  left: 0;\n  margin-left: 15px;\n  margin-right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: 0 solid #979797;\n  box-shadow: 1px 3px 10px 0 rgba(0, 0, 0, 0.5);\n}\n\n.flex {\n  display: -webkit-box;\n  display: flex;\n  background-color: white;\n}\n\n.bottom-row {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.book {\n  width: 136px;\n}\n\n.place {\n  -webkit-box-flex: 2;\n          flex: 2;\n}\n\n.divider {\n  height: 1px;\n  background-color: #e3e3e3;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQ0FGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSxnREFBQTtFQUVBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFLQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUNYRjs7QURhQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO0FDVkY7O0FEYUE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxZQUFBO0FDVkY7O0FEWUE7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNURjs7QURZQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWlyby5tZWRpdW0uY29tL21heC80MDY0LzEqcVlVdmgtRXRFUzhkdGdLaUJSaUxzQS5wbmcnKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNtYXBfY2FudmFze1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHJnYigxNTcsIDE1NiwgMTU2KSBzb2xpZDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA2cHggMjFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDRweCA2cHggMjFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3gtc2hhZG93OiA0cHggNnB4IDIxcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gIC8vcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIC8vcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMyZDJkMmQ7XHJcbn1cclxuXHJcbi5hZGRyZXNzIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNhM2EzYTM7XHJcbn1cclxuXHJcbi5zbG90IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICNmZjk5MzM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zbG90LWNhcHRpb24ge1xyXG4gIGNvbG9yOiAjZmZhNjRkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvL21hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHJnYmEoMTU3LCAxNTYsIDE1NiwgMSkgc29saWQ7XHJcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggNnB4IDIxcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLy8gLW1vei1ib3gtc2hhZG93OiA0cHggNnB4IDIxcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgLy8gYm94LXNoYWRvdzogNHB4IDZweCAyMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAwIHNvbGlkICM5Nzk3OTc7XHJcbiAgYm94LXNoYWRvdzogMXB4IDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYm90dG9tLXJvdyB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvb2sge1xyXG4gIHdpZHRoOiAxMzZweDtcclxufVxyXG4ucGxhY2Uge1xyXG4gIGZsZXg6IDI7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiIsIi5tYXBzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCAjOWQ5YzljIHNvbGlkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA2cHggMjFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggNnB4IDIxcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDRweCA2cHggMjFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG59XG5cbi5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2EzYTNhMztcbn1cblxuLnNsb3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmY5OTMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc2xvdC1jYXB0aW9uIHtcbiAgY29sb3I6ICNmZmE2NGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDAgc29saWQgIzk3OTc5NztcbiAgYm94LXNoYWRvdzogMXB4IDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYm90dG9tLXJvdyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib29rIHtcbiAgd2lkdGg6IDEzNnB4O1xufVxuXG4ucGxhY2Uge1xuICBmbGV4OiAyO1xufVxuXG4uZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_manage_place_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/manage-place.service */ "./src/app/services/manage-place.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../user.service */ "./src/app/pages/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-maps/ngx */ "./node_modules/@ionic-native/google-maps/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");








var HomePage = /** @class */ (function () {
    function HomePage(userService, storage, platform, geoLocation, managePlaceSvc) {
        this.userService = userService;
        this.storage = storage;
        this.platform = platform;
        this.geoLocation = geoLocation;
        this.managePlaceSvc = managePlaceSvc;
        this.places = [];
        this.vehicles = [];
        this.locations = [];
        this.cardAreaName = '';
        this.cardAddress = '';
        this.cardPricePerHour = '';
        this.cardPlaceId = '';
        this.image = 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png';
    }
    HomePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('token')];
                    case 1:
                        token = _a.sent();
                        this.userService.getAllUserInfo(token);
                        // @ts-ignore
                        this.userService.getUser().subscribe(function (res) {
                            _this.user = res[0];
                            // console.log('LOGGED IN USER FROM ON INIT', this.user);
                        });
                        // @ts-ignore
                        this.userService.getVehicles().subscribe(function (res) {
                            _this.vehicles = res;
                            // console.log('LOGGED IN USER FROM ON INIT V', this.vehicles);
                        });
                        return [4 /*yield*/, this.managePlaceSvc.getAllPlaces().subscribe(function (res) {
                                _this.places = res;
                                console.log('SHOW ALL NEARBY PLACES', _this.places);
                                _this.places.forEach(function (it) {
                                    console.log('In For each');
                                    var location = {
                                        title: it.areaName,
                                        position: {
                                            lat: it.locLatitude,
                                            lng: it.locLongitude,
                                        },
                                    };
                                    _this.locations.push(location);
                                    console.log('PUSH LOCATION', _this.locations);
                                    var newMarker = _this.map.addMarkerSync(location);
                                    newMarker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                                        _this.cardAreaName = it.areaName;
                                        _this.cardAddress = it.address;
                                        _this.cardPricePerHour = String(it.pricePerHour);
                                        _this.cardPlaceId = it.id;
                                        console.log(it);
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.platform.ready()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.geoLocation
                                .getCurrentPosition()
                                .then(function (resp) {
                                _this.locLat = resp.coords.latitude;
                                _this.locLong = resp.coords.longitude;
                                console.log('Current Latitude', _this.locLat);
                                console.log('Current Longitude', _this.locLong);
                            })
                                .catch(function (error) {
                                console.error('Error getting location', error);
                            })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.loadMap(this.locLat, this.locLong)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadMap = function (locLat, locLong) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mapOptions, currMarker;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // This code is necessary for browser
                _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["Environment"].setEnv({
                    API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
                    API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
                });
                mapOptions = {
                    camera: {
                        target: {
                            lat: locLat,
                            lng: locLong,
                        },
                        zoom: 18,
                        tilt: 30,
                    },
                };
                this.map = _ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"].create('map_canvas', mapOptions);
                currMarker = this.map.addMarkerSync({
                    title: 'Current Location',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: locLat,
                        lng: locLong,
                    },
                });
                currMarker.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                    // alert('Current Location Marker Clicked !');
                });
                this.map.on(_ionic_native_google_maps_ngx__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MAP_CLICK).subscribe(function () {
                    _this.cardAddress = '';
                    _this.cardPricePerHour = '';
                    _this.cardAreaName = '';
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.showBookingConfirmation = function (id) {
        console.log(id);
    };
    HomePage.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["AsyncStorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
        { type: _services_manage_place_service__WEBPACK_IMPORTED_MODULE_1__["ManagePlaceService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _native_async_storage_service__WEBPACK_IMPORTED_MODULE_3__["AsyncStorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _services_manage_place_service__WEBPACK_IMPORTED_MODULE_1__["ManagePlaceService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/pages/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/pages/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.getAllUserInfo = function (key) {
        var userCollection = this.db.collection('users', function (ref) {
            return ref.where('email', '==', key).limit(1);
        });
        this.userObservable = userCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        var vehiclesCollection = this.db.collection('vehicles', function (ref) {
            return ref.where('email', '==', key);
        });
        this.vehiclesObservable = vehiclesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        var placesCollection = this.db.collection('places', function (ref) {
            return ref.where('email', '==', key);
        });
        this.placesObservable = placesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    UserService.prototype.getUser = function () {
        return this.userObservable;
    };
    UserService.prototype.getVehicles = function () {
        return this.vehiclesObservable;
    };
    UserService.prototype.getPlaces = function () {
        return this.placesObservable;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map