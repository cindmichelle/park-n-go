import { AsyncStorageService } from './../../../native/async-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagePlaceService } from '../../../services/manage-place.service';
import { Place } from '../../../model/place.model';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { PickLocationComponent } from '../../../components/pick-location/pick-location.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { storage } from 'firebase';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})

export class AddPlacePage implements OnInit {

  private locLat!: number;
  private locLng!: number;
  imageStr!: string;

  locLatLng = false;

  places: Place = {
    areaName: '',
    address: '',
    email: '',
    pricePerHour: 0,
    locLatitude: 0,
    locLongitude: 0,
    booked: false,
    imageUrl: '',
  };

  @ViewChild('addPlace', { static: true }) form!: NgForm;
  private emailUser!: string;

  constructor(
    private placeService: ManagePlaceService,
    private navCtrl: NavController,
    private asyncStorage: AsyncStorageService,
    private modalCtrl: ModalController,
    private loadCtrl: LoadingController,
    private camera: Camera,
  ) {
  }

  async ngOnInit() {
    this.emailUser = await this.asyncStorage.get('token');
  }

  async addPlaceToDB() {

    const areaName = this.form.value.areaName;
    const address = this.form.value.address;
    const pricePerHour = this.form.value.pricePerHour;

    const locLatitude = this.locLat;
    const locLongitude = this.locLng;

    const email = this.emailUser;
    const booked = false;
    const imageUrl = this.imageStr;

    this.places = {
      address,
      areaName,
      email,
      locLatitude,
      locLongitude,
      pricePerHour,
      booked,
      imageUrl,
    };

    console.log(this.places);

    await this.placeService.addPlace(this.places);
  }

  async takePictureFromPhotoAlbum() {
    try {
      const loading = await this.loadCtrl.create({
        message: 'Uploading picture...',
      });
      await loading.present();
      const options: CameraOptions = {
        quality: 50,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
        correctOrientation: true,
      };

      const result = await this.camera.getPicture(options);

      const img = `data:image/jpeg;base64,${result}`;

      const picture = storage().ref(`placePictures/${this.form.value.areaName}.jpg`);
      picture.putString(img, 'data_url').then(
        this.imageStr = await storage().ref().child('placePictures/' + this.form.value.areaName + '.jpg').getDownloadURL(),
      );
      await loading.dismiss();
    } catch (e) {
      console.error(e);
    }
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
