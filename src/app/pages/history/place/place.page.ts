import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../../model/user.model';
import { DAY_NAME, MONTH_NAME } from '../../../model/time.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.page.html',
  styleUrls: ['./place.page.scss'],
})
export class PlacePage implements OnInit {
  // Place
  placeAddress = '';
  placeName = '';

  // Order
  parkingDuration = '';
  totalPrice = '';
  arrivalTime = '';
  leavingTime = '';
  createdAt = '';

  // Customer
  customerFirstName = '';
  customerLastName = '';
  customerFullName = '';
  customerPhoneNo = '';
  customerEmail = '';

  // Vehicle
  vehiclePlateNo = '';
  vehicleModel = '';
  vehicleType = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private firestore: AngularFirestore,
    private loadCtrl: LoadingController,
  ) {}

  async ngOnInit() {
    const loading = await this.loadCtrl.create({
      message: 'Creating your booking...',
    });
    await loading.present();

    await this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('custEmail')) {
        this.backToHistory();
      }

      // Customer
      this.customerEmail = paramMap.get('custEmail') + '';
      this.firestore
        .collection<User>('users/', (ref) =>
          ref.where('email', '==', this.customerEmail),
        )
        .valueChanges()
        .pipe()
        .subscribe((res) => {
          res.map((a) => {
            // this.userInfo = a; // Bisa diakses, tp undefined ?
            console.log('userInfo', a);

            this.customerFirstName = a.firstName;
            this.customerLastName = a.lastName;
            this.customerFullName = a.firstName + ' ' + a.lastName;
            this.customerPhoneNo = a.phoneNo;
            this.customerEmail = a.email;
          });
        });

      // Vehicle
      this.vehiclePlateNo = paramMap.get('vehiclePlateNo') + '';
      this.vehicleModel = paramMap.get('vehicleModel') + '';
      this.vehicleType = paramMap.get('vehicleType') + '';

      // Place
      this.placeAddress = paramMap.get('address') + '';
      this.placeName = paramMap.get('placeName') + '';

      // Order
      this.parkingDuration = paramMap.get('duration') + '';
      this.totalPrice = paramMap.get('price') + '';
      this.arrivalTime = paramMap.get('arrivalTime') + '';
      this.leavingTime = paramMap.get('leavingTime') + '';
      this.createdAt = paramMap.get('createdAt') + '';

      // Time Format
      const tempArrTime = new Date(this.arrivalTime);
      const tempLeaveTime = new Date(this.leavingTime);
      const tempCreatedAt = new Date(this.createdAt);

      this.arrivalTime = `${
        DAY_NAME[tempArrTime.getDay()]
      }, ${tempArrTime.getDate()} ${
        MONTH_NAME[tempArrTime.getMonth()]
      } ${tempArrTime.getFullYear()}, ${tempArrTime.getHours()}:${tempArrTime.getMinutes()} WIB`;

      this.leavingTime = `${
        DAY_NAME[tempLeaveTime.getDay()]
      }, ${tempLeaveTime.getDate()} ${
        MONTH_NAME[tempLeaveTime.getMonth()]
      } ${tempLeaveTime.getFullYear()}, ${tempLeaveTime.getHours()}:${tempLeaveTime.getMinutes()} WIB`;

      this.createdAt = `${
        DAY_NAME[tempCreatedAt.getDay()]
      }, ${tempCreatedAt.getDate()} ${
        MONTH_NAME[tempCreatedAt.getMonth()]
      } ${tempCreatedAt.getFullYear()}, ${tempCreatedAt.getHours()}:${tempCreatedAt.getMinutes()} WIB`;
    });

    await loading.dismiss();
  }

  backToHistory() {
    this.navCtrl.navigateBack('tabs/history').then((r) => r);
  }
}
