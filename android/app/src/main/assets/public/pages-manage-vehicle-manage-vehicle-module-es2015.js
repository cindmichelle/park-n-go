(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-vehicle-manage-vehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-vehicle/add-vehicle.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-vehicle/add-vehicle.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add Vehicle</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"closeModal()\">\r\n        <ion-icon name=\"close\" class=\"close-btn\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #addVehicle>\r\n    <ion-list padding lines=\"full\" class=\"ion-padding\">\r\n      <ion-item class=\"input-container\">\r\n        <ion-label style=\"font-size: 13px;\">Vehicle Type</ion-label>\r\n        <ion-select interface=\"action-sheet\" class=\"selector\">\r\n          <ion-select-option value=\"motorcycle\" style=\"font-size:20px\"\r\n            >Motorcycle</ion-select-option\r\n          >\r\n          <ion-select-option value=\"car\">Car</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Vehicle Model</ion-label>\r\n        <ion-input\r\n          class=\"input\"\r\n          required\r\n          inputmode=\"text\"\r\n          oninput=\"handleFirstNameValue(event)\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Plate Number</ion-label>\r\n        <ion-input\r\n          class=\"input\"\r\n          required\r\n          inputmode=\"text\"\r\n          oninput=\"handleFirstNameValue(event)\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"block\" type=\"submit\" class=\"add-btn\"\r\n      >Add Vehicle</ion-button\r\n    >\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-vehicle/manage-vehicle.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-vehicle/manage-vehicle.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button\r\n        slot=\"start\"\r\n        defaultHref=\"/tabs/profile\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Manage Vehicles</ion-title>\r\n    <ion-label\r\n      slot=\"primary\"\r\n      class=\"ion-padding btn\"\r\n      (click)=\"addVehicle()\"\r\n      color=\"primary\"\r\n      >Add</ion-label\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list *ngFor=\"let v of vehicleList\">\r\n    <ion-item lines=\"full\" class=\"list-item\" [routerLink]=\"['/','edit-vehicle',v.id]\">\r\n      <div class=\"wrapper-vehicle\">\r\n        <h3 class=\"vehicle-name\">{{ v.vehicleModel }}</h3>\r\n        <ion-label class=\"plate\">{{ v.plateNo }}</ion-label>\r\n      </div>\r\n      <ion-label class=\"vehicle-type\">{{ v.vehicleType }}</ion-label>\r\n    </ion-item>\r\n<!--  <ion-list>-->\r\n<!--    <ion-item lines=\"full\" class=\"list-item\">-->\r\n<!--      <div class=\"wrapper-vehicle\">-->\r\n<!--        <h3 class=\"vehicle-name\">Honda Supra X</h3>-->\r\n<!--        <ion-label class=\"plate\">B 1234 XYZ</ion-label>-->\r\n<!--      </div>-->\r\n<!--      <ion-label class=\"vehicle-type\">Motorcycles</ion-label>-->\r\n<!--    </ion-item>-->\r\n<!--    <ion-item lines=\"full\" class=\"list-item\">-->\r\n<!--      <div class=\"wrapper-vehicle\">-->\r\n<!--        <h3 class=\"vehicle-name\">Range Rover</h3>-->\r\n<!--        <ion-label class=\"plate\">B 1234 XYZ</ion-label>-->\r\n<!--      </div>-->\r\n<!--      <ion-label class=\"vehicle-type\">Car</ion-label>-->\r\n<!--    </ion-item>-->\r\n  </ion-list>\r\n  <ion-button\r\n    expand=\"block\"\r\n    class=\"add-btn\"\r\n    color=\"primary\"\r\n    (click)=\"addVehicle()\"\r\n    >Add Vehicle</ion-button\r\n  >\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/components/add-vehicle/add-vehicle.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-vehicle/add-vehicle.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-color-base: transparent !important;\n  --background: transparent;\n  background-image: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 57px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.selector {\n  font-size: 12px;\n}\n\n.close-btn {\n  color: white;\n  font-size: 35px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.input {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n\n.add-btn {\n  border: 1px #f17800 solid;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  height: 52px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdmVoaWNsZS9DOlxcUHJvamVjdFxccGFyay1uLWdvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZGQtdmVoaWNsZVxcYWRkLXZlaGljbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtdmVoaWNsZS9hZGQtdmVoaWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA1N3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnYm9sZCc7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uc2VsZWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICBib3JkZXI6IDFweCAjZjE3ODAwIHNvbGlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2VsZWN0b3Ige1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFkZC1idG4ge1xuICBib3JkZXI6IDFweCAjZjE3ODAwIHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-vehicle/add-vehicle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-vehicle/add-vehicle.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AddVehicleComponent = class AddVehicleComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    addVehicleToDB() {
        // this.closeModal()
        console.log("Vehicle Added");
        console.log("Closing Modal");
        this.closeModal();
    }
    addVehiclePicture() {
        console.log("Picture Added");
    }
};
AddVehicleComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
AddVehicleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicle',
        template: __webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-vehicle/add-vehicle.component.html"),
        styles: [__webpack_require__(/*! ./add-vehicle.component.scss */ "./src/app/components/add-vehicle/add-vehicle.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], AddVehicleComponent);



/***/ }),

/***/ "./src/app/pages/manage-vehicle/manage-vehicle.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/manage-vehicle.module.ts ***!
  \***************************************************************/
/*! exports provided: ManageVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVehiclePageModule", function() { return ManageVehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-vehicle.page */ "./src/app/pages/manage-vehicle/manage-vehicle.page.ts");
/* harmony import */ var src_app_components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/add-vehicle/add-vehicle.component */ "./src/app/components/add-vehicle/add-vehicle.component.ts");








const routes = [
    {
        path: '',
        component: _manage_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["ManageVehiclePage"]
    }
];
let ManageVehiclePageModule = class ManageVehiclePageModule {
};
ManageVehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manage_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["ManageVehiclePage"], src_app_components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["AddVehicleComponent"]],
        entryComponents: [src_app_components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["AddVehicleComponent"]]
    })
], ManageVehiclePageModule);



/***/ }),

/***/ "./src/app/pages/manage-vehicle/manage-vehicle.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/manage-vehicle.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-red {\n  background-color: red;\n}\n\n.bg-green {\n  background-color: green;\n}\n\n.surrounding-padding {\n  padding-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.list-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 65px;\n}\n\n.wrapper-vehicle {\n  padding-left: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  width: 74%;\n}\n\n.vehicle-name {\n  margin: 0px;\n  color: #2d2d2d;\n  font-size: 14px;\n}\n\n.plate {\n  color: #c1bcbc;\n  font-size: 12px;\n}\n\n.vehicle-type {\n  font-size: 12px;\n  color: #2d2d2d;\n  text-align: right;\n}\n\nion-back-button {\n  --color: white;\n}\n\n.btn {\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\nion-toolbar {\n  --ion-color-base: transparent !important;\n  --background: transparent;\n  background-image: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.add-btn {\n  margin-left: 18px;\n  margin-right: 18px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLXZlaGljbGUvQzpcXFByb2plY3RcXHBhcmstbi1nby9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZS12ZWhpY2xlXFxtYW5hZ2UtdmVoaWNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZS12ZWhpY2xlL21hbmFnZS12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7RUFDQSwwQ0FBQTtBQ0dGOztBRERBO0VBQ0Usd0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0lGOztBRERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDSUY7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS12ZWhpY2xlL21hbmFnZS12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmJnLWdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnN1cnJvdW5kaW5nLXBhZGRpbmcge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4ud3JhcHBlci12ZWhpY2xlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiA3NCU7XHJcbn1cclxuXHJcbi52ZWhpY2xlLW5hbWUge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnBsYXRlIHtcclxuICBjb2xvcjogI2MxYmNiYztcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnZlaGljbGUtdHlwZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnYm9sZCc7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYWRkLWJ0biB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogNTJweDtcclxufVxyXG4iLCIuYmctcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uYmctZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLnN1cnJvdW5kaW5nLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogNjVweDtcbn1cblxuLndyYXBwZXItdmVoaWNsZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgd2lkdGg6IDc0JTtcbn1cblxuLnZlaGljbGUtbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzJkMmQyZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGxhdGUge1xuICBjb2xvcjogI2MxYmNiYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udmVoaWNsZS10eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzJkMmQyZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9oZWFkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGQtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMThweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDUycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/manage-vehicle/manage-vehicle.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/manage-vehicle.page.ts ***!
  \*************************************************************/
/*! exports provided: ManageVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageVehiclePage", function() { return ManageVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/manage-vehicle.service */ "./src/app/services/manage-vehicle.service.ts");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");





let ManageVehiclePage = class ManageVehiclePage {
    constructor(router, manageVehicleSvc, storage) {
        this.router = router;
        this.manageVehicleSvc = manageVehicleSvc;
        this.storage = storage;
        this.vehicleList = [];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const email = yield this.storage.get('token');
            console.log('ngOnInit', email);
            this.manageVehicleSvc.getVehicles(email).subscribe(res => {
                this.vehicleList = res;
                console.log(this.vehicleList);
            });
        });
    }
    addVehicle() {
        console.log('Add button clicked!');
        this.router.navigateByUrl('add-vehicle').then(r => r);
    }
};
ManageVehiclePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["ManageVehicleService"] },
    { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_4__["AsyncStorageService"] }
];
ManageVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-vehicle',
        template: __webpack_require__(/*! raw-loader!./manage-vehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-vehicle/manage-vehicle.page.html"),
        styles: [__webpack_require__(/*! ./manage-vehicle.page.scss */ "./src/app/pages/manage-vehicle/manage-vehicle.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["ManageVehicleService"],
        _native_async_storage_service__WEBPACK_IMPORTED_MODULE_4__["AsyncStorageService"]])
], ManageVehiclePage);



/***/ })

}]);
//# sourceMappingURL=pages-manage-vehicle-manage-vehicle-module-es2015.js.map