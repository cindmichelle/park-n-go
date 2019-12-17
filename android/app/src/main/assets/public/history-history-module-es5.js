(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/history/history.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-segment [(ngModel)]=\"segmentedValue\">\r\n    <ion-segment-button value=\"parking\">Parking</ion-segment-button>\r\n    <ion-segment-button value=\"places\">Places</ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div *ngIf=\"segmentedValue == 'parking'\" class=\"list\">\r\n    <p>There are no parking history.</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"segmentedValue == 'places'\" class=\"list\">\r\n    <p>There are no rent parking places history.</p>\r\n  </div>\r\n\r\n  <!-- <div [ngSwitch]=\"segmentedValue\">\r\n    <ion-label *ngSwitchWhen=\"'parking'\" ngSelected=\"selected\">\r\n      <a ion-item>\r\n        <ion-label>book list</ion-label>\r\n      </a>\r\n    </ion-label>\r\n    <ion-label *ngSwitchWhen=\"places\">\r\n      <a ion-item>\r\n        <ion-label>table list</ion-label>\r\n      </a>\r\n    </ion-label>\r\n  </div> -->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");







var routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }
];
var HistoryPageModule = /** @class */ (function () {
    function HistoryPageModule() {
    }
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
        })
    ], HistoryPageModule);
    return HistoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n}\n\nion-segment-button {\n  --color-activated: coral;\n  --border-radius: 10px;\n  --border-color: coral;\n  --background-activated: rgb(255, 121, 72);\n  --background-checked: coral;\n  --color: coral;\n  --margin-start: 10px;\n  --margin-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxwYWdlc1xcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pb24tc2VnbWVudC1idXR0b24ge1xyXG4gIC0tY29sb3ItYWN0aXZhdGVkOiBjb3JhbDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLS1ib3JkZXItY29sb3I6IGNvcmFsO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYigyNTUsIDEyMSwgNzIpO1xyXG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiBjb3JhbDtcclxuICAtLWNvbG9yOiBjb3JhbDtcclxuICAtLW1hcmdpbi1zdGFydDogMTBweDtcclxuICAtLW1hcmdpbi1lbmQ6IDEwcHg7XHJcbn1cclxuIiwiLmxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICAtLWNvbG9yLWFjdGl2YXRlZDogY29yYWw7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6IGNvcmFsO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjU1LCAxMjEsIDcyKTtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGNvcmFsO1xuICAtLWNvbG9yOiBjb3JhbDtcbiAgLS1tYXJnaW4tc3RhcnQ6IDEwcHg7XG4gIC0tbWFyZ2luLWVuZDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HistoryPage = /** @class */ (function () {
    // private historyPlace!: any;
    function HistoryPage() {
        this.segmentedValue = 'parking';
    }
    HistoryPage.prototype.ngOnInit = function () { };
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/history/history.page.html"),
            styles: [__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HistoryPage);
    return HistoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module-es5.js.map