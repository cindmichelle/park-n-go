(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-place-add-place-add-place-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-place/add-place/add-place.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-place/add-place/add-place.page.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add Place</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"backToManage()\">\r\n        <ion-icon name=\"close\" class=\"close-btn\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #addPlace=\"ngForm\">\r\n    <ion-list padding lines=\"full\" class=\"ion-padding\">\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Area Name</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"text\"\r\n                name=\"areaName\"\r\n                ngModel\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Address</ion-label>\r\n        <ion-textarea required class=\"input\" name=\"address\" ngModel></ion-textarea>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Price per hour</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"numeric\"\r\n                name=\"pricePerHour\"\r\n                ngModel\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n<!--      <ion-item class=\"input-container\">-->\r\n<!--        <ion-label position=\"stacked\">Location ***put map here***</ion-label>-->\r\n<!--        <ion-input-->\r\n<!--                class=\"input\"-->\r\n<!--                required-->\r\n<!--                inputmode=\"numeric\"-->\r\n<!--        ></ion-input>-->\r\n<!--      </ion-item>-->\r\n<!--      <ion-item class=\"input-container\">-->\r\n<!--        <ion-label position=\"stacked\">Upload Picture **need more info**</ion-label>-->\r\n<!--        <ion-input-->\r\n<!--                class=\"input\"-->\r\n<!--                required-->\r\n<!--                inputmode=\"numeric\"-->\r\n<!--        ></ion-input>-->\r\n<!--      </ion-item>-->\r\n    </ion-list>\r\n    <ion-button expand=\"block\" (click)=\"addPlaceLatLng()\">Set Location on Map</ion-button>\r\n<!--    <ion-button expand=\"block\" color=\"tertiary\" type=\"submit\" class=\"upload-btn\">Upload from Gallery</ion-button>-->\r\n    <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"add-btn\"\r\n            [routerLink]=\"['/', 'account', 'manage-place']\"\r\n            (click)=\"addPlaceToDB()\"\r\n            [disabled]=\"!locLatLng\"\r\n    >Add Place</ion-button\r\n    >\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manage-place/add-place/add-place.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/manage-place/add-place/add-place.module.ts ***!
  \******************************************************************/
/*! exports provided: AddPlacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlacePageModule", function() { return AddPlacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-place.page */ "./src/app/pages/manage-place/add-place/add-place.page.ts");







var routes = [
    {
        path: '',
        component: _add_place_page__WEBPACK_IMPORTED_MODULE_6__["AddPlacePage"]
    }
];
var AddPlacePageModule = /** @class */ (function () {
    function AddPlacePageModule() {
    }
    AddPlacePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_place_page__WEBPACK_IMPORTED_MODULE_6__["AddPlacePage"]],
        })
    ], AddPlacePageModule);
    return AddPlacePageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-place/add-place/add-place.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/manage-place/add-place/add-place.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1wbGFjZS9hZGQtcGxhY2UvYWRkLXBsYWNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/manage-place/add-place/add-place.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/manage-place/add-place/add-place.page.ts ***!
  \****************************************************************/
/*! exports provided: AddPlacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlacePage", function() { return AddPlacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_manage_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/manage-place.service */ "./src/app/services/manage-place.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_pick_location_pick_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/pick-location/pick-location.component */ "./src/app/components/pick-location/pick-location.component.ts");







var AddPlacePage = /** @class */ (function () {
    function AddPlacePage(placeService, navCtrl, storage, modalCtrl) {
        this.placeService = placeService;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.locLatLng = false;
        this.places = {
            areaName: '',
            address: '',
            email: '',
            pricePerHour: 0,
            locLatitude: 0,
            locLongitude: 0,
        };
    }
    AddPlacePage.prototype.ngOnInit = function () {
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
    AddPlacePage.prototype.addPlaceToDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var areaName, address, pricePerHour, locLatitude, locLongitude, email;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        areaName = this.form.value.areaName;
                        address = this.form.value.address;
                        pricePerHour = this.form.value.pricePerHour;
                        locLatitude = this.locLat;
                        locLongitude = this.locLng;
                        email = this.emailUser;
                        this.places = {
                            address: address,
                            areaName: areaName,
                            email: email,
                            locLatitude: locLatitude,
                            locLongitude: locLongitude,
                            pricePerHour: pricePerHour,
                        };
                        console.log(this.places);
                        return [4 /*yield*/, this.placeService.addPlace(this.places)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPlacePage.prototype.addPlacePicture = function () {
        console.log('Picture Added');
    };
    AddPlacePage.prototype.addPlaceLatLng = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _components_pick_location_pick_location_component__WEBPACK_IMPORTED_MODULE_6__["PickLocationComponent"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss().then(function (location) {
                                console.log('add place page ts', location);
                                console.log('add place page ts', location.data.lat, location.data.lng);
                                _this.locLat = location.data.lat;
                                _this.locLng = location.data.lng;
                            }).then(function () {
                                _this.locLatLng = true;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPlacePage.prototype.backToManage = function () {
        this.navCtrl.navigateBack('account/manage-place').then(function (r) { return r; });
    };
    AddPlacePage.ctorParameters = function () { return [
        { type: _services_manage_place_service__WEBPACK_IMPORTED_MODULE_3__["ManagePlaceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('addPlace', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], AddPlacePage.prototype, "form", void 0);
    AddPlacePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-place',
            template: __webpack_require__(/*! raw-loader!./add-place.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-place/add-place/add-place.page.html"),
            styles: [__webpack_require__(/*! ./add-place.page.scss */ "./src/app/pages/manage-place/add-place/add-place.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_manage_place_service__WEBPACK_IMPORTED_MODULE_3__["ManagePlaceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], AddPlacePage);
    return AddPlacePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manage-place-add-place-add-place-module-es5.js.map