(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-place-edit-place-edit-place-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-place/edit-place/edit-place.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-place/edit-place/edit-place.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Add Place</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button slot=\"icon-only\" (click)=\"backToManage()\">\r\n        <ion-icon name=\"close\" class=\"close-btn\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #editPlace=\"ngForm\" (ngSubmit)=\"editPlaceInDB()\">\r\n    <ion-list padding lines=\"full\" class=\"ion-padding\">\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Area Name</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"text\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n                name=\"areaName\"\r\n                [(ngModel)]=\"areaName\"\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Address</ion-label>\r\n        <ion-textarea required class=\"input\" name=\"address\" [(ngModel)]=\"address\"></ion-textarea>\r\n\r\n      </ion-item>\r\n\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Price per hour</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"numeric\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n                name=\"pricePerHour\"\r\n                [(ngModel)]=\"pricePerHour\"\r\n        ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\">Location ***put map here***</ion-label>\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"numeric\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item class=\"input-container\">\r\n        <ion-label position=\"stacked\"\r\n        >Upload Picture **need more info**</ion-label\r\n        >\r\n        <ion-input\r\n                class=\"input\"\r\n                required\r\n                inputmode=\"numeric\"\r\n                oninput=\"handleFirstNameValue(event)\"\r\n        ></ion-input>\r\n      </ion-item>\r\n    </ion-list>\r\n<!--    <ion-button expand=\"block\" color=\"tertiary\" type=\"submit\" class=\"upload-btn\"-->\r\n<!--    >Upload from Gallery</ion-button-->\r\n<!--    >-->\r\n    <ion-button expand=\"block\" (click)=\"editPlaceLatLng()\" color=\"tertiary\">Update Location</ion-button>\r\n    <ion-button\r\n            expand=\"block\"\r\n            type=\"submit\"\r\n            class=\"add-btn\"\r\n            [routerLink]=\"['/', 'tabs', 'parking']\"\r\n    >Edit Place</ion-button\r\n    >\r\n    <ion-button expand=\"block\" color=\"danger add-btn\" (click)=\"deletePlaceFromDB()\">Delete Vehicle</ion-button>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manage-place/edit-place/edit-place.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-place/edit-place/edit-place.module.ts ***!
  \********************************************************************/
/*! exports provided: EditPlacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlacePageModule", function() { return EditPlacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-place.page */ "./src/app/pages/manage-place/edit-place/edit-place.page.ts");







var routes = [
    {
        path: '',
        component: _edit_place_page__WEBPACK_IMPORTED_MODULE_6__["EditPlacePage"]
    }
];
var EditPlacePageModule = /** @class */ (function () {
    function EditPlacePageModule() {
    }
    EditPlacePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_place_page__WEBPACK_IMPORTED_MODULE_6__["EditPlacePage"]]
        })
    ], EditPlacePageModule);
    return EditPlacePageModule;
}());



/***/ }),

/***/ "./src/app/pages/manage-place/edit-place/edit-place.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/manage-place/edit-place/edit-place.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1wbGFjZS9lZGl0LXBsYWNlL2VkaXQtcGxhY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/manage-place/edit-place/edit-place.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/manage-place/edit-place/edit-place.page.ts ***!
  \******************************************************************/
/*! exports provided: EditPlacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlacePage", function() { return EditPlacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_manage_place_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/manage-place.service */ "./src/app/services/manage-place.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _components_pick_location_pick_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/pick-location/pick-location.component */ "./src/app/components/pick-location/pick-location.component.ts");









var EditPlacePage = /** @class */ (function () {
    function EditPlacePage(navCtrl, loadCtrl, activatedRoute, storage, firestore, placeService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.firestore = firestore;
        this.placeService = placeService;
        this.modalCtrl = modalCtrl;
        this.place = {
            areaName: '',
            address: '',
            email: '',
            pricePerHour: 0,
            locLatitude: 0,
            locLongitude: 0,
        };
    }
    EditPlacePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.activatedRoute.paramMap.subscribe(function (paramMap) {
                    if (!paramMap.has('id')) {
                        _this.backToManage();
                    }
                    _this.placeId = paramMap.get('id') + '';
                    console.log(_this.placeId);
                    var data = _this.firestore.doc('places/' + _this.placeId);
                    var result = data.valueChanges();
                    result.subscribe(function (res) {
                        // @ts-ignore
                        _this.areaName = res.areaName;
                        // @ts-ignore
                        _this.address = res.address;
                        // @ts-ignore
                        _this.pricePerHour = res.pricePerHour;
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    EditPlacePage.prototype.editPlaceLatLng = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _components_pick_location_pick_location_component__WEBPACK_IMPORTED_MODULE_8__["PickLocationComponent"],
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.dismiss(function (location) {
                                console.log(location.lat, location.lng);
                                _this.locLat = location.lat;
                                _this.locLng = location.lng;
                            }).then(function () {
                                // this.locLatLng = true;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPlacePage.prototype.editPlaceInDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, areaName, address, pricePerHour, locLatitude, locLongitude, email;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Editing your place...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        areaName = this.form.value.areaName;
                        address = this.form.value.address;
                        pricePerHour = this.form.value.pricePerHour;
                        locLatitude = 0;
                        locLongitude = 0;
                        return [4 /*yield*/, this.storage.get('token')];
                    case 3:
                        email = _a.sent();
                        console.log(areaName, address, pricePerHour, locLatitude, locLongitude, email);
                        this.place = {
                            areaName: areaName,
                            address: address,
                            email: email,
                            pricePerHour: pricePerHour,
                            locLatitude: locLatitude,
                            locLongitude: locLongitude,
                        };
                        console.log(this.place);
                        return [4 /*yield*/, this.placeService.updatePlace(this.place, this.placeId)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, loading.dismiss()];
                    case 5:
                        _a.sent();
                        this.backToManage();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPlacePage.prototype.deletePlaceFromDB = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Editing your place...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.placeService.removePlace(this.placeId)];
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
    EditPlacePage.prototype.backToManage = function () {
        this.navCtrl.navigateBack('account/manage-place');
    };
    EditPlacePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_7__["AsyncStorageService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _services_manage_place_service__WEBPACK_IMPORTED_MODULE_1__["ManagePlaceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('editPlace', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"])
    ], EditPlacePage.prototype, "form", void 0);
    EditPlacePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-place',
            template: __webpack_require__(/*! raw-loader!./edit-place.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-place/edit-place/edit-place.page.html"),
            styles: [__webpack_require__(/*! ./edit-place.page.scss */ "./src/app/pages/manage-place/edit-place/edit-place.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _native_async_storage_service__WEBPACK_IMPORTED_MODULE_7__["AsyncStorageService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _services_manage_place_service__WEBPACK_IMPORTED_MODULE_1__["ManagePlaceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], EditPlacePage);
    return EditPlacePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manage-place-edit-place-edit-place-module-es5.js.map