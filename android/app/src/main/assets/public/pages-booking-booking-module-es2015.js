(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booking-booking-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/booking/fail/fail.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/booking/fail/fail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\r\n  <div style=\"display: flex; justify-content: flex-end;\">\r\n    <ion-button fill=\"clear\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"close\" style=\"font-size: 40px; margin-top: 20px;\">\r\n      </ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"logo-container\">\r\n    <img src=\"../../../../assets/images/failed.png\" />\r\n  </div>\r\n  <div>\r\n    <h3 class=\"title\">\r\n      Booking Failed\r\n    </h3>\r\n    <h3 class=\"subtitle\">\r\n      Please try again later.\r\n    </h3>\r\n  </div>\r\n\r\n  <div class=\"btn\">\r\n    <ion-button\r\n      expand=\"block\"\r\n      class=\"try-again-btn\"\r\n      color=\"danger\"\r\n      (click)=\"bookingPlace()\"\r\n      >Try Again</ion-button\r\n    >\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/booking/success/success.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/booking/success/success.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen>\r\n  <div style=\"display: flex; justify-content: flex-end;\">\r\n    <ion-button fill=\"clear\" (click)=\"closeModal()\">\r\n      <ion-icon name=\"close\" style=\"font-size: 40px; margin-top: 20px;\">\r\n      </ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"logo-container\">\r\n    <img src=\"../../../../assets/images/success.png\" />\r\n  </div>\r\n  <div>\r\n    <h3 class=\"title\">\r\n      Booking Success\r\n    </h3>\r\n    <h3 class=\"subtitle\">\r\n      Your booking has been accepted.\r\n    </h3>\r\n    <h3 class=\"description\">\r\n      Parking session start in\r\n      <h3 class=\"time\">\r\n        5 hours 19 minutes\r\n      </h3>\r\n      later\r\n    </h3>\r\n  </div>\r\n  <div class=\"maps-wrapper\">\r\n    <img src=\"../../../../assets/images/maps.jpeg\" class=\"placeholder-maps\" />\r\n    <div class=\"overlay\">\r\n      <h6 class=\"place\">Parking Area Bu Rojak</h6>\r\n      <h6 class=\"navigate\">Click to navigate</h6>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/booking/booking.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/booking/booking.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button slot=\"start\" defaultHref=\"/tabs/parking\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Booking Confirmation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form #bookingForm=\"ngForm\" (ngSubmit)=\"bookingPlace()\">\r\n    <ion-list>\r\n      <ion-item lines=\"full\" class=\"list-item\">\r\n        <div class=\"wrapper-vehicle\">\r\n          <!-- <h3 class=\"vehicle-name\">{{ v.vehicleModel }}</h3>\r\n          <ion-label class=\"plate\">{{ v.plateNo }}</ion-label> -->\r\n          <h3 class=\"key\">Vehicle</h3>\r\n          <ion-label class=\"plate value\">{{ plateNo }}</ion-label>\r\n        </div>\r\n        <ion-button fill=\"clear\" class=\"change-vehicle\" (click)=\"changeVehicle()\"> Change </ion-button>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" class=\"list-item\">\r\n        <h3 class=\"key\">Arrival</h3>\r\n        <div class=\"date-wrapper\">\r\n<!--          <h3 class=\"date\">August 22, 17:00 PM</h3>-->\r\n          <ion-datetime\r\n            displayFormat=\"D MMM YYYY H:mm\"\r\n            min=\"1997\" max=\"2050\"\r\n            value=\"2019-01-01T00:00Z\"\r\n            name=\"arrivalDateTime\" [(ngModel)]=\"arrivalTime\"\r\n            (ionChange)=\"calculateDuration(1)\"\r\n          >\r\n          </ion-datetime>\r\n          <ion-button fill=\"clear\" style=\"margin-left: 0;\" class=\"change-vehicle\">\r\n            <ion-icon name=\"calendar\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" class=\"list-item\">\r\n        <h3 class=\"key\">Leaving</h3>\r\n        <div class=\"date-wrapper\">\r\n          <ion-datetime\r\n            displayFormat=\"D MMM YYYY H:mm\"\r\n            min=\"1997\" max=\"2050\"\r\n            value=\"2019-01-01T00:00Z\"\r\n            name=\"leavingDateTime\" [(ngModel)]=\"leavingTime\"\r\n            (ionChange)=\"calculateDuration(2)\">\r\n          </ion-datetime>\r\n          <ion-button style=\"margin-left: 0;\" fill=\"clear\" class=\"change-vehicle\">\r\n            <ion-icon name=\"calendar\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" class=\"list-item\">\r\n        <h3 class=\"key\">Duration</h3>\r\n<!--        <h3 class=\"value\" name=\"duration\" [(ngModel)]=\"duration\"></h3>-->\r\n        <h3 class=\"value\">{{ duration }} Hours</h3>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" class=\"list-item\">\r\n        <h3 class=\"key\">Price per Hour</h3>\r\n        <h3 class=\"value\">\r\n          Rp {{ pricePerHour }}\r\n        </h3>\r\n      </ion-item>\r\n      <ion-item lines=\"full\" class=\"list-item\">\r\n        <h3 class=\"key\">Payment</h3>\r\n        <h3 class=\"value\">\r\n          Cash\r\n        </h3>\r\n      </ion-item>\r\n    </ion-list>\r\n    <div class=\"bottom\">\r\n      <div class=\"total-wrapper\">\r\n        <h3 class=\"total\">Total Price</h3>\r\n        <h3 class=\"total\">\r\n          Rp {{ totalPrice }}\r\n        </h3>\r\n      </div>\r\n      <ion-button\r\n        expand=\"block\"\r\n        class=\"booking-btn\"\r\n        color=\"primary\"\r\n        type=\"submit\"\r\n        >Book Parking</ion-button>\r\n    </div>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/booking/fail/fail.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/booking/fail/fail.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 35%;\n}\n\n.title {\n  color: #2d2d2d;\n  font-size: 26px;\n  text-align: center;\n  font-family: \"bold\";\n}\n\n.subtitle {\n  font-family: \"medium\";\n  font-size: 14px;\n  color: #2d2d2d;\n  text-align: center;\n}\n\n.try-again-btn {\n  margin-left: 18px;\n  margin-right: 18px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  height: 52px;\n}\n\n.btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL2ZhaWwvQzpcXFByb2plY3RcXHBhcmstbi1nby9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm9va2luZ1xcZmFpbFxcZmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL2ZhaWwvZmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL2ZhaWwvZmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udHJ5LWFnYWluLWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogNTJweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIiwiLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzUlO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzJkMmQyZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRyeS1hZ2Fpbi1idG4ge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/booking/fail/fail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/booking/fail/fail.component.ts ***!
  \***********************************************************/
/*! exports provided: FailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailComponent", function() { return FailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FailComponent = class FailComponent {
    constructor() { }
    ngOnInit() { }
};
FailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fail',
        template: __webpack_require__(/*! raw-loader!./fail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/booking/fail/fail.component.html"),
        styles: [__webpack_require__(/*! ./fail.component.scss */ "./src/app/components/booking/fail/fail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FailComponent);



/***/ }),

/***/ "./src/app/components/booking/success/success.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/booking/success/success.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 35%;\n}\n\n.title {\n  color: #2d2d2d;\n  font-size: 26px;\n  text-align: center;\n  font-family: \"bold\";\n}\n\n.subtitle {\n  font-family: \"medium\";\n  font-size: 14px;\n  color: #2d2d2d;\n  text-align: center;\n}\n\n.description {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  font-family: \"bold\";\n  color: #c1bcbc;\n  font-size: 12px;\n}\n\n.time {\n  margin-top: 10px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-family: \"bold\";\n  color: #2d2d2d;\n  font-size: 12px;\n}\n\n.maps-wrapper {\n  margin-top: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 202px;\n}\n\n.placeholder-maps {\n  border: 1px solid #2d2d2d;\n  width: 90%;\n}\n\n.overlay {\n  position: absolute;\n  margin-top: 152px;\n  background-color: #f1f1f1;\n  width: 90%;\n  z-index: 1;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.place {\n  font-family: \"bold\";\n  font-size: 14px;\n  color: #2d2d2d;\n  margin-bottom: 5px;\n}\n\n.navigate {\n  font-family: \"bold\";\n  font-size: 12px;\n  color: #949292;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL3N1Y2Nlc3MvQzpcXFByb2plY3RcXHBhcmstbi1nby9zcmNcXGFwcFxcY29tcG9uZW50c1xcYm9va2luZ1xcc3VjY2Vzc1xcc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib29raW5nL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyZDJkMmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gIGNvbG9yOiAjYzFiY2JjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1hcHMtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDIwMnB4O1xyXG59XHJcblxyXG4ucGxhY2Vob2xkZXItbWFwcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzJkMmQyZDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDE1MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgd2lkdGg6IDkwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucGxhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnYm9sZCc7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm5hdmlnYXRlIHtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzk0OTI5MjtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuIiwiLmxvZ28tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzUlO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzJkMmQyZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwibWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBjb2xvcjogI2MxYmNiYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXBzLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIwMnB4O1xufVxuXG4ucGxhY2Vob2xkZXItbWFwcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDJkMmQ7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxNTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgd2lkdGg6IDkwJTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGxhY2Uge1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm5hdmlnYXRlIHtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTQ5MjkyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/booking/success/success.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/booking/success/success.component.ts ***!
  \*****************************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SuccessComponent = class SuccessComponent {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    ngOnInit() { }
    closeModal() {
        this.router.navigateByUrl('/tabs/history');
        this.modalCtrl.dismiss();
    }
};
SuccessComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-success',
        template: __webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/booking/success/success.component.html"),
        styles: [__webpack_require__(/*! ./success.component.scss */ "./src/app/components/booking/success/success.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SuccessComponent);



/***/ }),

/***/ "./src/app/pages/booking/booking.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/booking/booking.module.ts ***!
  \*************************************************/
/*! exports provided: BookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPageModule", function() { return BookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_booking_fail_fail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/booking/fail/fail.component */ "./src/app/components/booking/fail/fail.component.ts");
/* harmony import */ var _components_booking_success_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/booking/success/success.component */ "./src/app/components/booking/success/success.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking.page */ "./src/app/pages/booking/booking.page.ts");









const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_8__["BookingPage"],
    },
];
let BookingPageModule = class BookingPageModule {
};
BookingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
        ],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_8__["BookingPage"], _components_booking_success_success_component__WEBPACK_IMPORTED_MODULE_2__["SuccessComponent"], _components_booking_fail_fail_component__WEBPACK_IMPORTED_MODULE_1__["FailComponent"]],
        entryComponents: [_components_booking_success_success_component__WEBPACK_IMPORTED_MODULE_2__["SuccessComponent"], _components_booking_fail_fail_component__WEBPACK_IMPORTED_MODULE_1__["FailComponent"]],
    })
], BookingPageModule);



/***/ }),

/***/ "./src/app/pages/booking/booking.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/booking/booking.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-color-base: transparent !important;\n  --background: transparent;\n  background-image: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 57px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-title {\n  color: white;\n  font-size: 15px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\nion-back-button {\n  --color: white;\n}\n\n.list-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 65px;\n}\n\n.vehicle-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 65px;\n}\n\n.wrapper-vehicle {\n  padding-left: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  width: 74%;\n}\n\n.date-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.key {\n  margin: 0px;\n  color: #2d2d2d;\n  font-size: 14px;\n}\n\n.plate {\n  color: #c1bcbc;\n  font-size: 12px;\n}\n\n.change-vehicle {\n  margin-left: 30px;\n}\n\n.date {\n  display: -webkit-box;\n  display: flex;\n  margin: 0px;\n  color: #2d2d2d;\n  font-size: 14px;\n  text-align: \"right\";\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.value {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: right;\n  color: #2d2d2d;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-right: 15px;\n}\n\n.total-wrapper {\n  display: -webkit-box;\n  display: flex;\n  padding-left: 17px;\n  padding-right: 17px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.total {\n  font-size: 20px;\n}\n\n.bottom {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-bottom: 20px;\n}\n\n.booking-btn {\n  margin-left: 18px;\n  margin-right: 18px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZy9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxwYWdlc1xcYm9va2luZ1xcYm9va2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmcvYm9va2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0lGOztBRERBO0VBQ0UsaUJBQUE7QUNJRjs7QUREQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0lGOztBRERBO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QUREQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSUY7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmcvYm9va2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogNTdweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpc3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuXHJcbi52ZWhpY2xlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLndyYXBwZXItdmVoaWNsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB3aWR0aDogNzQlO1xyXG59XHJcbi5kYXRlLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXg6IDE7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ua2V5IHtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjogIzJkMmQyZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5wbGF0ZSB7XHJcbiAgY29sb3I6ICNjMWJjYmM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2hhbmdlLXZlaGljbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjogIzJkMmQyZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogJ3JpZ2h0JztcclxuICBmbGV4OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi52YWx1ZSB7XHJcbiAgZmxleDogMTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzJkMmQyZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi50b3RhbC13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctbGVmdDogMTdweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogNTJweDtcclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLnZlaGljbGUtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLndyYXBwZXItdmVoaWNsZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDc0JTtcbn1cblxuLmRhdGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5rZXkge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyZDJkMmQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBsYXRlIHtcbiAgY29sb3I6ICNjMWJjYmM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNoYW5nZS12ZWhpY2xlIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IFwicmlnaHRcIjtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnZhbHVlIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnRvdGFsLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYm9va2luZy1idG4ge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/booking/booking.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/booking/booking.page.ts ***!
  \***********************************************/
/*! exports provided: BookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPage", function() { return BookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/manage-vehicle.service */ "./src/app/services/manage-vehicle.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _components_booking_success_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/booking/success/success.component */ "./src/app/components/booking/success/success.component.ts");
/* harmony import */ var _components_booking_fail_fail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/booking/fail/fail.component */ "./src/app/components/booking/fail/fail.component.ts");

// import { FailComponent } from './../../components/booking/fail/fail.component';
// import { SuccessComponent } from './../../components/booking/success/success.component';









let BookingPage = class BookingPage {
    constructor(
    // private modalCtrl: ModalController,
    activatedRoute, navCtrl, actionCtrl, storage, vehicleSvc, db, modalCtrl) {
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.actionCtrl = actionCtrl;
        this.storage = storage;
        this.vehicleSvc = vehicleSvc;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.vehicleList = [];
        this.buttons = [];
        this.arrivalTimeSet = false;
        this.leavingTimeSet = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
                this.backToHome();
            }
            this.placeId = paramMap.get('id') + '';
            this.pricePerHour = Number(paramMap.get('price'));
            this.duration = '-';
            this.plateNo = '-';
            //
            // this.arrivalDateTime = Date.parse(new Date(this.form.value.arrivalDateTime).toISOString());
            // this.leavingDateTime = Date.parse(new Date(this.form.value.leavingDateTime).toISOString());
            // const diff = this.leavingDateTime - this.arrivalDateTime;
            // console.log(diff);
        });
    }
    calculateDuration(timeId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (timeId === 1) {
                // this.arrivalDateTime = this.leavingTime;
                this.arrivalDateTime = new Date(this.arrivalTime).getTime();
                console.log(this.arrivalDateTime);
                this.arrivalTimeSet = true;
            }
            if (timeId === 2) {
                // this.leavingDateTime = await this.form.value.leavingDateTime;
                this.leavingDateTime = new Date(this.leavingTime).getTime();
                console.log(this.leavingDateTime);
                this.leavingTimeSet = true;
            }
            if (this.arrivalTimeSet && this.leavingTimeSet) {
                console.log(this.arrivalDateTime, this.leavingDateTime);
                const arrive = new Date(this.arrivalTime).getTime();
                const leave = new Date(this.leavingTime).getTime();
                const diff = (leave - arrive) / 3600000;
                // const diff = (this.leavingDateTime - this.arrivalDateTime) / 3600000;
                this.duration = String(Math.ceil(diff));
                this.totalPrice = String(Math.ceil(diff) * this.pricePerHour);
            }
            else {
                this.duration = '-';
            }
        });
    }
    changeVehicle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const email = yield this.storage.get('token');
            yield this.vehicleSvc.getVehicles(email).subscribe(res => {
                this.vehicleList = [];
                this.vehicleList = res;
                console.log('Booking', this.vehicleList);
                this.vehicleList.forEach(v => {
                    console.log(v.plateNo);
                    this.buttons.push({
                        text: v.plateNo,
                        handler: () => {
                            this.plateNo = v.plateNo;
                        },
                    });
                });
                console.log('Buttons', this.buttons);
                this.actionCtrl.create({
                    header: 'Select Vehicle Plate Number',
                    buttons: this.buttons,
                }).then(action => {
                    action.present();
                });
            });
        });
    }
    bookingPlace() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Creating Booking');
            console.log('toDateString()', new Date().toDateString());
            console.log('toISOString()', new Date().toISOString());
            console.log('toTimeString()', new Date().toTimeString());
            const email = yield this.storage.get('token');
            const created = new Date().toISOString();
            console.log(email, this.plateNo, this.placeId, this.duration, this.arrivalDateTime, this.leavingDateTime, this.totalPrice, created);
            const res = this.db.collection('bookings').add({
                customerEmail: email,
                customerPlateNo: this.plateNo,
                placeId: this.placeId,
                duration: this.duration,
                arrivalDateTime: this.arrivalDateTime,
                leavingDateTime: this.leavingDateTime,
                totalPrice: this.totalPrice,
                createdAt: created,
            });
            console.log(res);
            // Check if success or not
            const success = 1;
            if (success) {
                const modal = yield this.modalCtrl.create({
                    component: _components_booking_success_success_component__WEBPACK_IMPORTED_MODULE_8__["SuccessComponent"],
                });
                yield modal.present();
            }
            else {
                const modal = yield this.modalCtrl.create({
                    component: _components_booking_fail_fail_component__WEBPACK_IMPORTED_MODULE_9__["FailComponent"],
                });
                yield modal.present();
            }
        });
    }
    backToHome() {
        this.navCtrl.navigateBack('/tabs/parking').then(r => r);
    }
};
BookingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"] },
    { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_5__["AsyncStorageService"] },
    { type: _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["ManageVehicleService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('bookingForm', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
], BookingPage.prototype, "form", void 0);
BookingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-booking',
        template: __webpack_require__(/*! raw-loader!./booking.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/booking/booking.page.html"),
        styles: [__webpack_require__(/*! ./booking.page.scss */ "./src/app/pages/booking/booking.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
        _native_async_storage_service__WEBPACK_IMPORTED_MODULE_5__["AsyncStorageService"],
        _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["ManageVehicleService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
], BookingPage);



/***/ })

}]);
//# sourceMappingURL=pages-booking-booking-module-es2015.js.map