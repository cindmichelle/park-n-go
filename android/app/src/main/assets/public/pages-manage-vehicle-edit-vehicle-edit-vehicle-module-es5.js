(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-vehicle-edit-vehicle-edit-vehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Edit Vehicle</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"backToManage()\">\r\n        <ion-icon name=\"close\" class=\"close-btn\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #editVehicle=\"ngForm\" (ngSubmit)=\"editVehicleInDB()\">\r\n    <ion-list padding lines=\"full\" class=\"ion-padding\">\r\n      <ion-item class=\"input-container\">\r\n        <ion-label style=\"font-size: 13px;\">Vehicle Type</ion-label>\r\n        <ion-select interface=\"action-sheet\" class=\"selector\" name=\"vType\" [(ngModel)]=\"vType\">\r\n          <ion-select-option value=\"Motorcycle\" style=\"font-size:20px\">Motorcycle</ion-select-option>\r\n          <ion-select-option value=\"Car\">Car</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Vehicle Model</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"text\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n                name=\"vModel\"\r\n                [(ngModel)]=\"vModel\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Plate Number</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"text\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n                name=\"plateNo\"\r\n                [(ngModel)]=\"plateNo\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"block\" type=\"submit\" class=\"add-btn\">Edit Vehicle</ion-button>\r\n    <ion-button expand=\"block\" color=\"danger add-btn\" (click)=\"deleteVehicleFromDB()\">Delete Vehicle</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.module.ts ***!
  \**************************************************************************/
/*! exports provided: EditVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehiclePageModule", function() { return EditVehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-vehicle.page */ "./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.ts");







var routes = [
    {
        path: '',
        component: _edit_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["EditVehiclePage"]
    }
];
var EditVehiclePageModule = /** @class */ (function () {
    function EditVehiclePageModule() {
    }
    EditVehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["EditVehiclePage"]]
        })
    ], EditVehiclePageModule);
    return EditVehiclePageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-color-base: transparent !important;\n  --background: transparent;\n  background-image: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 57px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.selector {\n  font-size: 12px;\n}\n\n.close-btn {\n  color: white;\n  font-size: 35px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.input {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n\n.add-btn {\n  border: 1px #f17800 solid;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  height: 52px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLXZlaGljbGUvZWRpdC12ZWhpY2xlL0M6XFxQcm9qZWN0XFxwYXJrLW4tZ28vc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2UtdmVoaWNsZVxcZWRpdC12ZWhpY2xlXFxlZGl0LXZlaGljbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYW5hZ2UtdmVoaWNsZS9lZGl0LXZlaGljbGUvZWRpdC12ZWhpY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW5hZ2UtdmVoaWNsZS9lZGl0LXZlaGljbGUvZWRpdC12ZWhpY2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA1N3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnYm9sZCc7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uc2VsZWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5hZGQtYnRuIHtcclxuICBib3JkZXI6IDFweCAjZjE3ODAwIHNvbGlkO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc2VsZWN0b3Ige1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaW5wdXQge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFkZC1idG4ge1xuICBib3JkZXI6IDFweCAjZjE3ODAwIHNvbGlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNTJweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.ts ***!
  \************************************************************************/
/*! exports provided: EditVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVehiclePage", function() { return EditVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/manage-vehicle.service */ "./src/app/services/manage-vehicle.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");








var EditVehiclePage = /** @class */ (function () {
    function EditVehiclePage(navCtrl, loadCtrl, manageVehicleSvc, activatedRoute, storage, firestore) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.manageVehicleSvc = manageVehicleSvc;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.firestore = firestore;
    }
    EditVehiclePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('token')];
                    case 1:
                        _a.email = _b.sent();
                        this.activatedRoute.paramMap.subscribe(function (paramMap) {
                            if (!paramMap.has('id')) {
                                _this.backToManage();
                            }
                            _this.vehicleId = paramMap.get('id') + '';
                            console.log(_this.vehicleId);
                            var data = _this.firestore.doc('vehicles/' + _this.vehicleId);
                            var result = data.valueChanges();
                            result.subscribe(function (res) {
                                // @ts-ignore
                                _this.vType = res.vehicleType;
                                // @ts-ignore
                                _this.vModel = res.vehicleModel;
                                // @ts-ignore
                                _this.plateNo = res.plateNo;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVehiclePage.prototype.editVehicleInDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, model, type, plate, email;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Editing your vehicle...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        model = this.form.value.vModel;
                        type = this.form.value.vType;
                        plate = this.form.value.plateNo;
                        return [4 /*yield*/, this.storage.get('token')];
                    case 3:
                        email = _a.sent();
                        this.manageVehicleSvc.editVehicle(email, plate, model, type, this.vehicleId);
                        return [4 /*yield*/, loading.dismiss()];
                    case 4:
                        _a.sent();
                        this.backToManage();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVehiclePage.prototype.deleteVehicleFromDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Deleting your vehicle...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.manageVehicleSvc.deleteVehicle(this.vehicleId, this.email)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 4:
                        _a.sent();
                        this.backToManage();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditVehiclePage.prototype.backToManage = function () {
        this.navCtrl.navigateBack('account/manage-vehicle').then(function (r) { return r; });
    };
    EditVehiclePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["ManageVehicleService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_7__["AsyncStorageService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editVehicle', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], EditVehiclePage.prototype, "form", void 0);
    EditVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-vehicle',
            template: __webpack_require__(/*! raw-loader!./edit-vehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./edit-vehicle.page.scss */ "./src/app/pages/manage-vehicle/edit-vehicle/edit-vehicle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["ManageVehicleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _native_async_storage_service__WEBPACK_IMPORTED_MODULE_7__["AsyncStorageService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], EditVehiclePage);
    return EditVehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manage-vehicle-edit-vehicle-edit-vehicle-module-es5.js.map