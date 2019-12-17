// import { FailComponent } from './../../components/booking/fail/fail.component';
// import { SuccessComponent } from './../../components/booking/success/success.component';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
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

  vehicleList: VehicleViewModel [] = [];
  buttons: any[] = [];

  arrivalTimeSet = false;
  leavingTimeSet = false;

  @ViewChild('bookingForm', { static: true }) form!: NgForm;
  leavingDateTime!: number;
  arrivalDateTime!: number;
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
  ) {
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

      this.getPlaceInfo().then(r => r);
    });
  }

  async getPlaceInfo() {
    const data = this.db.doc<Place>('places/' + this.placeId).valueChanges();
    data.subscribe(r => {
      console.log('Booking Page ts place info: ', r);
      // @ts-ignore
      this.placeEmailOwner = r.email;
      // @ts-ignore
      if (r.booked == null) { r.booked = false; }
      // @ts-ignore
      this.placeBooked = r.booked;
      console.log(this.placeEmailOwner);
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
    const email = await this.storage.get('token');

    await this.vehicleSvc.getUnparkedVehicles(email).subscribe(res => {
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
  }

  async bookingPlace() {
    console.log('Creating Booking');

    console.log('toDateString()', new Date().toDateString());
    console.log('toISOString()', new Date().toISOString());
    console.log('toTimeString()', new Date().toTimeString());

    const email = await this.storage.get('token');
    const created = new Date().toISOString();

    console.log(email, this.plateNo, this.placeId, this.duration, this.arrivalDateTime, this.leavingDateTime, this.totalPrice, created);


    const res = this.db.collection<Bookings>('bookings').add({
      customerEmail: email,
      customerPlateNo: this.plateNo,
      placeId: this.placeId,
      placeEmailOwner: this.placeEmailOwner,
      duration: this.duration,
      arrivalDateTime: this.arrivalTime,
      leavingDateTime: this.leavingTime,
      totalPrice: this.totalPrice,
      createdAt: created,
      ongoing: true,
    });

    await this.placeSvc.updateBookedPlace(this.placeId, this.placeBooked);

    console.log(res);

    // Check if success or not

    const success = 1;
    if (success) {
      const modal = await this.modalCtrl.create({
        component: SuccessComponent,
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: FailComponent,
      });
      await modal.present();
    }
  }

  backToHome() {
    this.navCtrl.navigateBack('/tabs/parking').then(r => r);
  }
}
