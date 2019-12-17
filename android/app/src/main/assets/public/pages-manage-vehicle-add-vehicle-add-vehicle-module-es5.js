(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-vehicle-add-vehicle-add-vehicle-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add Vehicle</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"backToManage()\">\r\n        <ion-icon name=\"close\" class=\"close-btn\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #addVehicle=\"ngForm\" (ngSubmit)=\"addVehicleToDB()\">\r\n    <ion-list padding lines=\"full\" class=\"ion-padding\">\r\n      <ion-item class=\"input-container\">\r\n        <ion-label style=\"font-size: 13px;\">Vehicle Type</ion-label>\r\n        <ion-select interface=\"action-sheet\" class=\"selector\" name=\"vType\" ngModel>\r\n          <ion-select-option value=\"Motorcycle\" style=\"font-size:20px\">Motorcycle</ion-select-option>\r\n          <ion-select-option value=\"Car\">Car</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Vehicle Model</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"text\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n                name=\"vModel\"\r\n                ngModel\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Plate Number</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"text\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n                name=\"plateNo\"\r\n                ngModel\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-button expand=\"block\" type=\"submit\" class=\"add-btn\">Add Vehicle</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.module.ts ***!
  \************************************************************************/
/*! exports provided: AddVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehiclePageModule", function() { return AddVehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-vehicle.page */ "./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.ts");







var routes = [
    {
        path: '',
        component: _add_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddVehiclePage"]
    }
];
var AddVehiclePageModule = /** @class */ (function () {
    function AddVehiclePageModule() {
    }
    AddVehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["AddVehiclePage"]]
        })
    ], AddVehiclePageModule);
    return AddVehiclePageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --ion-color-base: transparent !important;\n  --background: transparent;\n  background-image: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 57px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.selector {\n  font-size: 12px;\n}\n\n.close-btn {\n  color: white;\n  font-size: 35px;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.input {\n  font-family: \"regular\";\n  font-size: 14px;\n}\n\n.add-btn {\n  border: 1px #f17800 solid;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 10px;\n  font-size: 18px;\n  height: 52px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLXZlaGljbGUvYWRkLXZlaGljbGUvQzpcXFByb2plY3RcXHBhcmstbi1nby9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZS12ZWhpY2xlXFxhZGQtdmVoaWNsZVxcYWRkLXZlaGljbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYW5hZ2UtdmVoaWNsZS9hZGQtdmVoaWNsZS9hZGQtdmVoaWNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdlLXZlaGljbGUvYWRkLXZlaGljbGUvYWRkLXZlaGljbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDU3cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdib2xkJztcclxuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5zZWxlY3RvciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmFkZC1idG4ge1xyXG4gIGJvcmRlcjogMXB4ICNmMTc4MDAgc29saWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4iLCJpb24tdG9vbGJhciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaGVhZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1N3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zZWxlY3RvciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNsb3NlLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWRkLWJ0biB7XG4gIGJvcmRlcjogMXB4ICNmMTc4MDAgc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.ts ***!
  \**********************************************************************/
/*! exports provided: AddVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehiclePage", function() { return AddVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/manage-vehicle.service */ "./src/app/services/manage-vehicle.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");






var AddVehiclePage = /** @class */ (function () {
    function AddVehiclePage(manageVehicleSvc, loadCtrl, navCtrl, storage) {
        this.manageVehicleSvc = manageVehicleSvc;
        this.loadCtrl = loadCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    AddVehiclePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('token')];
                    case 1:
                        _a.emailUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddVehiclePage.prototype.addVehicleToDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, type, model, plate, email, vehicle;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Adding vehicle...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        type = this.form.value.vType;
                        model = this.form.value.vModel;
                        plate = this.form.value.plateNo;
                        email = this.emailUser;
                        vehicle = {
                            type: type, model: model, email: email, plate: plate,
                        };
                        console.log(vehicle);
                        return [4 /*yield*/, this.manageVehicleSvc.addVehicles(email, plate, model, type)];
                    case 3:
                        _a.sent();
                        // await this.manageVehicleSvc.addVehiclesByObject(vehicle);
                        return [4 /*yield*/, loading.dismiss()];
                    case 4:
                        // await this.manageVehicleSvc.addVehiclesByObject(vehicle);
                        _a.sent();
                        return [4 /*yield*/, this.backToManage()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddVehiclePage.prototype.backToManage = function () {
        this.navCtrl.navigateBack('account/manage-vehicle');
    };
    AddVehiclePage.ctorParameters = function () { return [
        { type: _services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["ManageVehicleService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_5__["AsyncStorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addVehicle', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], AddVehiclePage.prototype, "form", void 0);
    AddVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-vehicle',
            template: __webpack_require__(/*! raw-loader!./add-vehicle.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./add-vehicle.page.scss */ "./src/app/pages/manage-vehicle/add-vehicle/add-vehicle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manage_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["ManageVehicleService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _native_async_storage_service__WEBPACK_IMPORTED_MODULE_5__["AsyncStorageService"]])
    ], AddVehiclePage);
    return AddVehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manage-vehicle-add-vehicle-add-vehicle-module-es5.js.map