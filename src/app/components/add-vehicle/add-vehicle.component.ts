import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss'],
})
export class AddVehicleComponent implements OnInit {

  vehiclePicture: any;

  constructor(
    private modalCtrl: ModalController,
    private camera: Camera,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss()
  }

  addVehicleToDB(){
    // this.closeModal()
    console.log("Vehicle Added")
    console.log("Closing Modal")
    this.closeModal()
  }

  addVehiclePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.vehiclePicture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error(err);
    });
  }
}
