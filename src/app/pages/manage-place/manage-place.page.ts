import { AsyncStorageService } from './../../native/async-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagePlaceService } from '../../services/manage-place.service'
import { Place } from '../../model/place.model';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.page.html',
  styleUrls: ['./manage-place.page.scss'],
})
export class ManagePlacePage implements OnInit {

  places: Place[] | undefined;

  constructor(private routeCtrl: Router, private placeService: ManagePlaceService, private storage: AsyncStorageService, private loadCtrl: LoadingController,) {}

  async ngOnInit() {
    const loading = await this.loadCtrl.create({
      message: 'Loading your place...',
    });
    await loading.present();

    const email = await this.storage.get('token');
    this.placeService.getPlaces(email).subscribe(res => {
      this.places = res;
      console.log(this.places);
    });

    console.log(this.places);

    await loading.dismiss();
  }

  addPlace() {
    console.log('Add button clicked!');

    this.routeCtrl.navigateByUrl('/add-place');

  }
}
