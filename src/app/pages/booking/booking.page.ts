import {
  ActionSheetController,
  LoadingController,
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
  plateNo = '-';
  vehicleId!: string;
  vehicleParked!: boolean;
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

  availableFrom!: Date;
  availableTo!: Date;
  leavingToMax!: Date;

  today = new Date(Date.now() + 7 * 60 * 60 * 1000);

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
    private loadCtrl: LoadingController,
  ) {}

  async ionViewWillEnter() {
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
      this.vehicleId = this.vehicleList[0].id;
      this.vehicleList.forEach((v) => {
        this.buttons.push({
          text: v.plateNo,
          handler: () => {
            this.plateNo = v.plateNo;
            this.vehicleId = v.id;
            this.vehicleParked = v.parked;
          },
        });
      });
    });
  }

  async ngOnInit() {
    console.log(this.today);
    this.availableFrom = new Date(this.today.toISOString());

    console.log(this.arrivalTime);
    const dateTo = new Date(this.today.getTime() + 24 * 60 * 60 * 1000);
    const dateToMax = new Date(dateTo.getTime() + 24 * 60 * 60 * 1000);
    this.availableTo = new Date(dateTo);
    this.leavingToMax = new Date(dateToMax);
  }

  async getPlaceInfo() {
    const data = this.db.doc<Place>('places/' + this.placeId).valueChanges();
    data.subscribe((res) => {
      if (res) {
        this.placeEmailOwner = res.email;
        this.locLat = res.locLatitude;
        this.locLng = res.locLongitude;
        this.placeName = res.areaName;
        this.address = res.address;
        this.placeBooked = res.booked;
      }
    });
  }

  async calculateDuration(timeId: number) {
    if (timeId === 1) {
      this.arrivalDateTime = new Date(this.arrivalTime).getTime();
      console.log(this.arrivalDateTime);
      this.arrivalTimeSet = true;
    }
    if (timeId === 2) {
      this.leavingDateTime = new Date(this.leavingTime).getTime();
      console.log(this.leavingDateTime);
      this.leavingTimeSet = true;
    }

    if (this.arrivalTimeSet && this.leavingTimeSet) {
      console.log(this.arrivalDateTime, this.leavingDateTime);

      const arrive = new Date(this.arrivalTime).getTime();
      const leave = new Date(this.leavingTime).getTime();
      const diff = (leave - arrive) / 3600000;

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
      const loading = await this.loadCtrl.create({
        message: 'Creating your booking...',
      });
      await loading.present();

      const email = await this.storage.get('token');
      // const createdAt = this.today;

      const selectedVehicle = this.vehicleList.find((vehicle) => {
        return vehicle.plateNo === this.plateNo;
      });

      const res = await this.db.collection<Bookings>('bookings').add({
        customerEmail: email,
        customerPlateNo: this.plateNo,
        vehicleId: this.vehicleId,
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
        createdAt: this.today.toISOString(),
        ongoing: true,
      });

      await this.placeSvc.updateBookedPlace(this.placeId, this.placeBooked);
      await this.vehicleSvc.updateVehicleStatus(
        this.vehicleId,
        this.vehicleParked,
      );

      console.log('>> db response: ', res);

      await loading.dismiss();

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
      console.error('ERRORRRRR : ', err);
    }
  }

  backToHome() {
    this.navCtrl.navigateBack('/tabs/parking').then((r) => r);
  }
}
