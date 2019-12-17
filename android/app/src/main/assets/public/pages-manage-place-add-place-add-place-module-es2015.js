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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-place.page */ "./src/app/pages/manage-place/add-place/add-place.page.ts");







const routes = [
    {
        path: '',
        component: _add_place_page__WEBPACK_IMPORTED_MODULE_6__["AddPlacePage"]
    }
];
let AddPlacePageModule = class AddPlacePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_manage_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/manage-place.service */ "./src/app/services/manage-place.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_pick_location_pick_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/pick-location/pick-location.component */ "./src/app/components/pick-location/pick-location.component.ts");







let AddPlacePage = class AddPlacePage {
    constructor(placeService, navCtrl, storage, modalCtrl) {
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
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.emailUser = yield this.storage.get('token');
        });
    }
    addPlaceToDB() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const areaName = this.form.value.areaName;
            const address = this.form.value.address;
            const pricePerHour = this.form.value.pricePerHour;
            const locLatitude = this.locLat;
            const locLongitude = this.locLng;
            const email = this.emailUser;
            this.places = {
                address,
                areaName,
                email,
                locLatitude,
                locLongitude,
                pricePerHour,
            };
            console.log(this.places);
            yield this.placeService.addPlace(this.places);
        });
    }
    addPlacePicture() {
        console.log('Picture Added');
    }
    addPlaceLatLng() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_pick_location_pick_location_component__WEBPACK_IMPORTED_MODULE_6__["PickLocationComponent"],
            });
            yield modal.present();
            yield modal.onDidDismiss().then((location) => {
                console.log('add place page ts', location);
                console.log('add place page ts', location.data.lat, location.data.lng);
                this.locLat = location.data.lat;
                this.locLng = location.data.lng;
            }).then(() => {
                this.locLatLng = true;
            });
        });
    }
    backToManage() {
        this.navCtrl.navigateBack('account/manage-place').then(r => r);
    }
};
AddPlacePage.ctorParameters = () => [
    { type: _services_manage_place_service__WEBPACK_IMPORTED_MODULE_3__["ManagePlaceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-manage-place-add-place-add-place-module-es2015.js.map