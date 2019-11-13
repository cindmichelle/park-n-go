import { VehicleViewModel } from './../../model/vehicle.model';
import { PlaceViewModel } from './../../model/place.model';
import { AsyncStorageService } from './../../native/async-storage.service';
import { UserViewModel } from './../../model/user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: UserViewModel;
  places: PlaceViewModel[] = [];
  vehicles: VehicleViewModel[] = [];

  image = 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png';
  constructor(
    private userService: UserService,
    private storage: AsyncStorageService,
  ) {}

  async ngOnInit() {
    const token: string = await this.storage.get('token');

    this.userService.getAllUserInfo(token);

    this.userService.getUser().subscribe((res) => {
      this.user = res[0];
      // console.log('LOGGED IN USER FROM ON INIT', this.user);
    });

    this.userService.getVehicles().subscribe((res) => {
      this.vehicles = res;
      // console.log('LOGGED IN USER FROM ON INIT V', this.vehicles);
    });

    this.userService.getPlaces().subscribe((res) => {
      this.places = res;
      // console.log('LOGGED IN USER FROM ON INIT P', this.places);
    });
  }
}
