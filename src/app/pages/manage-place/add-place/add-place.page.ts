import { AsyncStorageService } from './../../../native/async-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagePlaceService } from '../../../services/manage-place.service';
import { Place } from '../../../model/place.model';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})

export class AddPlacePage implements OnInit {

    places: Place = {
      areaName: '',
      address: '',
      email: '',
      pricePerHour: 0,
      locLatitude: '',
      locLongitude: '',
    };

  @ViewChild('addPlace', { static: true }) form!: NgForm;
  private emailUser!: string;

  constructor(private placeService: ManagePlaceService, private navCtrl: NavController, private storage: AsyncStorageService) {}

  async ngOnInit() {
    this.emailUser = await this.storage.get('token');
  }

  async addPlaceToDB() {
    const areaName = this.form.value.areaName;
    const address = this.form.value.address;
    const pricePerHour = this.form.value.pricePerHour;
    const locLatitude = '-1.10419';
    const locLongitude = '110.41421';
    const email = this.emailUser;

    this.places = {
      address,
      areaName,
      email,
      locLatitude,
      locLongitude,
      pricePerHour,
    };

    console.log(this.places);

    await this.placeService.addPlace(this.places);
  }

  addPlacePicture() {
    console.log('Picture Added');
  }

  backToManage() {
    this.navCtrl.navigateBack('account/manage-place');
  }

}
