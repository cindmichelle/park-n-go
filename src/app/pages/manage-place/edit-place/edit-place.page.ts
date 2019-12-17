import { ManagePlaceService } from './../../../services/manage-place.service';
import { Place } from './../../../model/place.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AsyncStorageService } from '../../../native/async-storage.service';
import { PickLocationComponent } from '../../../components/pick-location/pick-location.component';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.page.html',
  styleUrls: ['./edit-place.page.scss'],
})
export class EditPlacePage implements OnInit {

  @ViewChild('editPlace', { static: true }) form!: NgForm;
  private placeId!: string;

  place: Place = {
    areaName: '',
    address: '',
    email: '',
    pricePerHour: 0,
    locLatitude: 0,
    locLongitude: 0,
    booked: false,
  };
  locLat!: number;
  locLng!: number;
  locLatLng = false;
  booked!: boolean;

  constructor(
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private activatedRoute: ActivatedRoute,
    private storage: AsyncStorageService,
    private firestore: AngularFirestore,
    private placeService: ManagePlaceService,
    private modalCtrl: ModalController
  ) {
  }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.backToManage();
      }

      this.placeId = paramMap.get('id') + '';
      console.log(this.placeId);

      const data = this.firestore.doc<Place>('places/' + this.placeId);
      const result = data.valueChanges();
      result.subscribe(res => {
        // @ts-ignore
        this.areaName = res.areaName;
        // @ts-ignore
        this.address = res.address;
        // @ts-ignore
        this.pricePerHour = res.pricePerHour;
        // @ts-ignore
        this.booked = res.booked;
      });
    });
  }

  async editPlaceLatLng() {
    const modal = await this.modalCtrl.create({
      component: PickLocationComponent
    });

    await modal.present();

    await modal.onDidDismiss().then((location) => {
      console.log('edit place page ts', location);
      if (location.data !== undefined) {
        console.log('edit place page ts', location.data.lat, location.data.lng);
        this.locLat = location.data.lat;
        this.locLng = location.data.lng;
      } else {
        console.log('edit location canceled');
        this.locLat = -6.1753871;
        this.locLng = 106.8249641;
      }
    }).then(() => {
      this.locLatLng = true;
    });
  }

  async editPlaceInDB() {
    const loading = await this.loadCtrl.create({
      message: 'Editing your place...',
    });
    await loading.present();

    const areaName = this.form.value.areaName;
    const address = this.form.value.address;
    const pricePerHour = this.form.value.pricePerHour;
    const locLatitude = this.locLat;
    const locLongitude = this.locLng;
    const email = await this.storage.get('token');
    const booked = this.booked;

    console.log(areaName, address, pricePerHour, locLatitude, locLongitude, email);

    this.place = {
      areaName,
      address,
      email,
      pricePerHour,
      locLatitude,
      locLongitude,
      booked
    };

    console.log(this.place);

    await this.placeService.updatePlace(this.place, this.placeId);

    await loading.dismiss();
    this.backToManage();
  }

  async deletePlaceFromDB() {
    const loading = await this.loadCtrl.create({
      message: 'Editing your place...',
    });
    await loading.present();

    await this.placeService.removePlace(this.placeId);

    await loading.dismiss();
    this.backToManage();
  }

  backToManage() {
    this.navCtrl.navigateBack('account/manage-place');
  }

}
