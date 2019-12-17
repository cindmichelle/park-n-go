(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-place-manage-place-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manage-place/manage-place.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manage-place/manage-place.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-back-button\r\n        slot=\"start\"\r\n        defaultHref=\"/tabs/profile\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Manage Place</ion-title>\r\n    <ion-label\r\n      slot=\"primary\"\r\n      class=\"ion-padding btn\"\r\n      (click)=\"addPlace()\"\r\n      color=\"primary\"\r\n      >Add</ion-label\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list *ngFor=\"let p of places\">\r\n    <ion-item lines=\"full\" class=\"list-item\" [routerLink]=\"['/','edit-place', p.id]\">\r\n      <div class=\"wrapper-place\">\r\n        <h3 class=\"place-name\">{{ p.areaName }}</h3>\r\n        <ion-label class=\"plate\">{{ p.address }}</ion-label>\r\n      </div>\r\n      <ion-img\r\n              style=\"width: 80px; height: 80px;\"\r\n              src=\"http://www.desertsun.co.uk/blog/images/Apartment%201.jpg\"\r\n      ></ion-img>\r\n    </ion-item>\r\n<!--    <ion-item lines=\"full\" class=\"list-item\">-->\r\n<!--      <div class=\"wrapper-place\">-->\r\n<!--        <h3 class=\"place-name\">Ruko Newton Barat No.19</h3>-->\r\n<!--        <ion-label class=\"plate\">Short Description Parking Place</ion-label>-->\r\n<!--      </div>-->\r\n<!--      <ion-img-->\r\n<!--        style=\"width: 80px; height: 80px;\"-->\r\n<!--        src=\"http://www.desertsun.co.uk/blog/images/Apartment%201.jpg\"-->\r\n<!--      ></ion-img>-->\r\n<!--    </ion-item>-->\r\n<!--    <ion-item lines=\"full\" class=\"list-item\">-->\r\n<!--      <div class=\"wrapper-place\">-->\r\n<!--        <h3 class=\"place-name\">Ruko Newton Barat No.19</h3>-->\r\n<!--        <ion-label class=\"plate\">Short Description Parking Place</ion-label>-->\r\n<!--      </div>-->\r\n<!--      <ion-img-->\r\n<!--        style=\"width: 80px; height: 80px;\"-->\r\n<!--        src=\"https://static3.businessinsider.com/image/5681799ce6183e55008b526d-480/carmel-place-nyc-micro-apartment.jpg\"-->\r\n<!--      ></ion-img>-->\r\n<!--    </ion-item>-->\r\n  </ion-list>\r\n  <ion-button\r\n    expand=\"block\"\r\n    class=\"add-btn\"\r\n    color=\"primary\"\r\n    (click)=\"addPlace()\"\r\n    >Add Place</ion-button\r\n  >\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manage-place/manage-place.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-place/manage-place.module.ts ***!
  \***********************************************************/
/*! exports provided: ManagePlacePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePlacePageModule", function() { return ManagePlacePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_place_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-place.page */ "./src/app/pages/manage-place/manage-place.page.ts");







const routes = [
    {
        path: '',
        component: _manage_place_page__WEBPACK_IMPORTED_MODULE_6__["ManagePlacePage"]
    }
];
let ManagePlacePageModule = class ManagePlacePageModule {
};
ManagePlacePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manage_place_page__WEBPACK_IMPORTED_MODULE_6__["ManagePlacePage"]],
    })
], ManagePlacePageModule);



/***/ }),

/***/ "./src/app/pages/manage-place/manage-place.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-place/manage-place.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  padding-left: 15px;\n  padding-right: 15px;\n  height: 100px;\n}\n\n.wrapper-place {\n  padding-left: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  width: 74%;\n}\n\n.place-name {\n  margin: 0px;\n  color: #2d2d2d;\n  font-size: 14px;\n}\n\n.list {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.plate {\n  color: #c1bcbc;\n  font-size: 12px;\n}\n\n.place-type {\n  font-size: 12px;\n  color: #2d2d2d;\n  text-align: right;\n}\n\nion-back-button {\n  --color: white;\n}\n\n.btn {\n  color: white;\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\nion-toolbar {\n  --ion-color-base: transparent !important;\n  --background: transparent;\n  background-image: url('header.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nion-title {\n  color: white;\n  font-size: 17px;\n  font-family: \"bold\";\n  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);\n}\n\n.add-btn {\n  margin-left: 18px;\n  margin-right: 18px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  height: 52px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLXBsYWNlL0M6XFxQcm9qZWN0XFxwYXJrLW4tZ28vc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2UtcGxhY2VcXG1hbmFnZS1wbGFjZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZS1wbGFjZS9tYW5hZ2UtcGxhY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtFQUNBLDBDQUFBO0FDRUY7O0FEQUE7RUFDRSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUNHRjs7QURBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdlLXBsYWNlL21hbmFnZS1wbGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLndyYXBwZXItcGxhY2Uge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDc0JTtcclxufVxyXG5cclxuLnBsYWNlLW5hbWUge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ucGxhdGUge1xyXG4gIGNvbG9yOiAjYzFiY2JjO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucGxhY2UtdHlwZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMmQyZDJkO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LWZhbWlseTogJ2JvbGQnO1xyXG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmFkZC1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuIiwiLmxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi53cmFwcGVyLXBsYWNlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogNzQlO1xufVxuXG4ucGxhY2UtbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzJkMmQyZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnBsYXRlIHtcbiAgY29sb3I6ICNjMWJjYmM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnBsYWNlLXR5cGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMmQyZDJkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hlYWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIHRleHQtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFkZC1idG4ge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manage-place/manage-place.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/manage-place/manage-place.page.ts ***!
  \*********************************************************/
/*! exports provided: ManagePlacePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePlacePage", function() { return ManagePlacePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../native/async-storage.service */ "./src/app/native/async-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_manage_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/manage-place.service */ "./src/app/services/manage-place.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ManagePlacePage = class ManagePlacePage {
    constructor(routeCtrl, placeService, storage, loadCtrl) {
        this.routeCtrl = routeCtrl;
        this.placeService = placeService;
        this.storage = storage;
        this.loadCtrl = loadCtrl;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadCtrl.create({
                message: 'Loading your place...',
            });
            yield loading.present();
            const email = yield this.storage.get('token');
            this.placeService.getMyPlaces(email).subscribe(res => {
                this.places = res;
                console.log(this.places);
            });
            console.log(this.places);
            yield loading.dismiss();
        });
    }
    addPlace() {
        console.log('Add button clicked!');
        this.routeCtrl.navigateByUrl('/add-place');
    }
};
ManagePlacePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_manage_place_service__WEBPACK_IMPORTED_MODULE_4__["ManagePlaceService"] },
    { type: _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ManagePlacePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-manage-place',
        template: __webpack_require__(/*! raw-loader!./manage-place.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manage-place/manage-place.page.html"),
        styles: [__webpack_require__(/*! ./manage-place.page.scss */ "./src/app/pages/manage-place/manage-place.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_manage_place_service__WEBPACK_IMPORTED_MODULE_4__["ManagePlaceService"],
        _native_async_storage_service__WEBPACK_IMPORTED_MODULE_1__["AsyncStorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
], ManagePlacePage);



/***/ })

}]);
//# sourceMappingURL=pages-manage-place-manage-place-module-es2015.js.map