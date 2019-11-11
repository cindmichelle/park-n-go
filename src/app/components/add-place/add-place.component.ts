import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss'],

})
export class AddPlaceComponent implements OnInit {

  placePicture: any;

  constructor(
    private modalCtrl: ModalController,
    private camera: Camera,
  ) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  addPlaceToDB(){
    console.log("Vehicle Added")
    console.log("Closing Modal")
    this.closeModal()
  }

  addPlacePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.placePicture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error(err);
    });
  }

}
