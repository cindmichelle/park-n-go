import { MONTH_NAME, DAY_NAME } from './../../../model/time.model';
import { userViewModelinitialValue } from './../../../model/user.model';
import { Bookings } from './../../../model/booking.model';
import {
  LaunchNavigator,
  LaunchNavigatorOptions,
} from '@ionic-native/launch-navigator/ngx';
import {
  PlaceViewModel,
  placeInitialValue,
} from './../../../model/place.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Place } from 'src/app/model/place.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserViewModel, User } from 'src/app/model/user.model';
import { ManageVehicleService } from '../../../services/manage-vehicle.service';
import { ManagePlaceService } from '../../../services/manage-place.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private db: AngularFirestore,
    private launchNavigator: LaunchNavigator,
    private router: Router,
    private vehicleSvc: ManageVehicleService,
    private placeSvc: ManagePlaceService,
    private loadCtrl: LoadingController,
  ) {}

  token!: string;
  ownerId!: string;
  placeId!: string;
  plateNo!: string;
  vehicleId!: string;
  vehicleType!: string;
  vehicleModel!: string;

  duration!: any;
  price!: any;
  arrivalTime!: Date;
  leavingTime!: Date;
  createdAt!: Date;
  bookId!: string;
  arrivalTimeString!: string;
  leavingTimeString!: string;
  createdAtString!: string;

  placeDetail: PlaceViewModel = placeInitialValue;
  ownerDetail: UserViewModel = userViewModelinitialValue;

  ngOnInit() {}

  async ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (
        paramMap.has('bookId') &&
        paramMap.has('ownerId') &&
        paramMap.has('placeId') &&
        paramMap.has('vehiclePlateNo')
      ) {
        this.bookId = paramMap.get('bookId') || '';
        this.ownerId = paramMap.get('ownerId') || '';
        this.placeId = paramMap.get('placeId') || '';
        this.plateNo = paramMap.get('vehiclePlateNo') || '';
        this.vehicleId = paramMap.get('vehicleId') || '';
        this.vehicleType = paramMap.get('vehicleType') || '';
        this.vehicleModel = paramMap.get('vehicleModel') || '';
        this.duration = Number(paramMap.get('duration')) || 0;
        this.price = Number(paramMap.get('price')) || 0;

        const arrTime = paramMap.get('arrivalTime') || '';
        const leavingTime = paramMap.get('leavingTime') || '';
        const createdAt = paramMap.get('createdAt') || '';

        this.arrivalTime = new Date(arrTime);
        this.leavingTime = new Date(leavingTime);
        this.createdAt = new Date(createdAt);

        this.arrivalTimeString = `${
          DAY_NAME[this.arrivalTime.getDay()]
        }, ${this.arrivalTime.getDate()} ${
          MONTH_NAME[this.arrivalTime.getMonth()]
        } ${this.arrivalTime.getFullYear()}, ${this.arrivalTime.getHours()}:${this.arrivalTime.getMinutes()} WIB`;

        this.leavingTimeString = `${
          DAY_NAME[this.leavingTime.getDay()]
        }, ${this.leavingTime.getDate()} ${
          MONTH_NAME[this.leavingTime.getMonth()]
        } ${this.leavingTime.getFullYear()}, ${this.leavingTime.getHours()}:${this.leavingTime.getMinutes()} WIB`;

        this.createdAtString = `${
          DAY_NAME[this.createdAt.getDay()]
        }, ${this.createdAt.getDate()} ${
          MONTH_NAME[this.createdAt.getMonth()]
        } ${this.createdAt.getFullYear()}, ${this.createdAt.getHours()}:${this.createdAt.getMinutes()} WIB`;

        const placeCollection = this.db.collection<Place>('places', (ref) =>
          ref.where('email', '==', this.ownerId).limit(1),
        );

        const placeObservable = placeCollection.snapshotChanges().pipe(
          map((actions) => {
            return actions.map((a) => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          }),
        );

        placeObservable.subscribe((res) => {
          this.placeDetail = res[0];
        });

        const userCollection = this.db.collection<User>('users', (ref) =>
          ref.where('email', '==', this.ownerId).limit(1),
        );

        const ownerObservable = userCollection.snapshotChanges().pipe(
          map((actions) => {
            return actions.map((a) => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          }),
        );

        ownerObservable.subscribe((res) => {
          this.ownerDetail = res[0];
        });
      }
    });
  }

  async navigateToMap() {
    const options: LaunchNavigatorOptions = {
      start: '',
    };

    this.launchNavigator
      .navigate(
        [this.placeDetail.locLatitude, this.placeDetail.locLongitude],
        options,
      )
      .then(
        (success) => console.log('SUCCESS Launched navigator'),
        (error) => console.log('Error launching navigator: ' + error),
      );
  }

  async finishBooking() {
    const loading = await this.loadCtrl.create({
      message: 'Finishing your parking...',
    });
    await loading.present();
    try {
      this.db
        .collection<Bookings>('bookings')
        .doc(this.bookId)
        .update({
          ongoing: false,
        });

      console.log(this.placeId, this.vehicleId);
      await this.placeSvc.updateBookedPlace(this.placeId, true);
      await this.vehicleSvc.updateVehicleStatus(this.vehicleId, true);
      await this.router.navigateByUrl('/tabs/history');
      await loading.dismiss();
    } catch (e) {
      console.log('error while finish booking', e);
    }
  }
}
