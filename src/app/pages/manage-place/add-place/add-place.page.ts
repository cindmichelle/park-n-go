import { AsyncStorageService } from './../../../native/async-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagePlaceService } from '../../../services/manage-place.service';
import { Place } from '../../../model/place.model';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { PickLocationComponent } from '../../../components/pick-location/pick-location.component';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})

export class AddPlacePage implements OnInit {

  private locLat!: number;
  private locLng!: number;

  locLatLng = false;

  places: Place = {
    areaName: '',
    address: '',
    email: '',
    pricePerHour: 0,
    locLatitude: 0,
    locLongitude: 0,
    booked: false,
  };

  @ViewChild('addPlace', { static: true }) form!: NgForm;
  private emailUser!: string;

  constructor(
    private placeService: ManagePlaceService,
    private navCtrl: NavController,
    private storage: AsyncStorageService,
    private modalCtrl: ModalController,
  ) {
  }

  async ngOnInit() {
    this.emailUser = await this.storage.get('token');
  }

  async addPlaceToDB() {
    const areaName = this.form.value.areaName;
    const address = this.form.value.address;
    const pricePerHour = this.form.value.pricePerHour;

    const locLatitude = this.locLat;
    const locLongitude = this.locLng;

    const email = this.emailUser;
    const booked = false;

    this.places = {
      address,
      areaName,
      email,
      locLatitude,
      locLongitude,
      pricePerHour,
      booked
    };

    console.log(this.places);

    await this.placeService.addPlace(this.places);
  }

  addPlacePicture() {
    console.log('Picture Added');
  }

  async addPlaceLatLng() {
    const modal = await this.modalCtrl.create({
      component: PickLocationComponent,
    });

    await modal.present();

    await modal.onDidDismiss().then((location) => {
      console.log('add place page ts', location);
      if (location.data !== undefined) {
        console.log('add place page ts', location.data.lat, location.data.lng);
        this.locLat = location.data.lat;
        this.locLng = location.data.lng;
      } else {
        console.log('location canceled');
        this.locLat = -6.1753871;
        this.locLng = 106.8249641;
      }
    }).then(() => {
      this.locLatLng = true;
    });
  }

  backToManage() {
    this.navCtrl.navigateBack('account/manage-place').then(r => r);
  }

}
