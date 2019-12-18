import {
  ActionSheetController,
  ModalController,
  NavController,
} from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AsyncStorageService } from '../../native/async-storage.service';
import { ManageVehicleService } from '../../services/manage-vehicle.service';
import { VehicleViewModel } from '../../model/vehicle.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { SuccessComponent } from '../../components/booking/success/success.component';
import { FailComponent } from '../../components/booking/fail/fail.component';
import { Place, PlaceViewModel } from '../../model/place.model';
import { Bookings } from '../../model/booking.model';
import { ManagePlaceService } from '../../services/manage-place.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  placeId!: string;
  pricePerHour!: number;
  totalPrice!: string;
  duration!: string;
  plateNo!: string;
  arrivalTime!: string;
  leavingTime!: string;

  placeInfo!: PlaceViewModel;
  placeEmailOwner!: string;
  placeBooked!: boolean;
  locLat!: number;
  locLng!: number;

  vehicleList: VehicleViewModel[] = [];
  buttons: any[] = [];
  address!: string;

  arrivalTimeSet = false;
  leavingTimeSet = false;

  @ViewChild('bookingForm', { static: true }) form!: NgForm;
  leavingDateTime!: number;
  arrivalDateTime!: number;
  placeName!: string;
  plateModel!: any;

  constructor(
    // private modalCtrl: ModalController,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private actionCtrl: ActionSheetController,
    private storage: AsyncStorageService,
    private vehicleSvc: ManageVehicleService,
    private db: AngularFirestore,
    private modalCtrl: ModalController,
    private placeSvc: ManagePlaceService,
  ) {}

  async ionViewDidEnter() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.backToHome();
      }

      this.placeId = paramMap.get('id') + '';
      this.pricePerHour = Number(paramMap.get('price'));
      this.duration = '-';

      this.getPlaceInfo().then((r) => r);
    });

    const token = await this.storage.get('token');

    await this.vehicleSvc.getUnparkedVehicles(token).subscribe((res) => {
      this.vehicleList = res;

      this.plateNo = this.vehicleList[0].plateNo;
      this.vehicleList.forEach((v) => {
        this.buttons.push({
          text: v.plateNo,
          handler: () => {
            this.plateNo = v.plateNo;
          },
        });
      });
    });
  }

  async ngOnInit() {}

  async getPlaceInfo() {
    const data = this.db.doc<Place>('places/' + this.placeId).valueChanges();
    data.subscribe((res) => {
      if (res) {
        this.placeEmailOwner = res.email;
        this.locLat = res.locLatitude;
        this.locLng = res.locLongitude;
        this.placeName = res.areaName;
        this.address = res.address;
        this.placeBooked = !!res.booked;
      }
    });
  }

  async calculateDuration(timeId: number) {
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
    } else {
      this.duration = '-';
    }
  }

  async changeVehicle() {
    this.actionCtrl
      .create({
        header: 'Select Vehicle Plate Number',
        buttons: this.buttons,
      })
      .then((action) => {
        action.present();
      });
  }

  async bookingPlace() {
    try {
      const email = await this.storage.get('token');
      const createdAt = new Date().toISOString();

      const selectedVehicle = this.vehicleList.find((vehicle) => {
        return vehicle.plateNo === this.plateNo;
      });

      const res = await this.db.collection<Bookings>('bookings').add({
        customerEmail: email,
        customerPlateNo: this.plateNo,

        placeId: this.placeId,
        placeEmailOwner: this.placeEmailOwner,
        placeName: this.placeName,
        address: this.address,
        vehicleModel: selectedVehicle ? selectedVehicle.vehicleModel : '',
        vehicleType: selectedVehicle ? selectedVehicle.vehicleType : '',
        duration: this.duration,
        arrivalDateTime: this.arrivalTime,
        leavingDateTime: this.leavingTime,
        totalPrice: this.totalPrice,
        createdAt,
        ongoing: true,
      });

      await this.placeSvc.updateBookedPlace(this.placeId, this.placeBooked);

      console.log('>> db response: ', res);

      const modal = await this.modalCtrl.create({
        component: SuccessComponent,
        componentProps: {
          lat: this.locLat,
          lng: this.locLng,
          placeName: this.placeName,
        },
      });
      await modal.present();
    } catch (err) {
      const modal = await this.modalCtrl.create({
        component: FailComponent,
      });
      await modal.present();
      console.log('ERRORRRRR : ', err);
    }
  }

  backToHome() {
    this.navCtrl.navigateBack('/tabs/parking').then((r) => r);
  }
}
