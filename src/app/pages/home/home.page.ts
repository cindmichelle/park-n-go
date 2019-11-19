import { Platform } from '@ionic/angular';
import { VehicleViewModel } from './../../model/vehicle.model';
import { PlaceViewModel } from './../../model/place.model';
import { AsyncStorageService } from './../../native/async-storage.service';
import { UserViewModel } from './../../model/user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, Environment } from '@ionic-native/google-maps/ngx';
import { GoogleMapOptions } from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map!: GoogleMap;
  user!: UserViewModel;
  places: PlaceViewModel[] = [];
  vehicles: VehicleViewModel[] = [];

  image = 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png';

  constructor(
    private userService: UserService,
    private storage: AsyncStorageService,
    private platform: Platform
  ) {
  }

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

    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ'
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    const marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 43.0741904,
        lng: -89.3809802
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });

    this.map.on(GoogleMapsEvent.CAMERA_MOVE).subscribe( loc => {
      console.log(loc[0].target.lat, loc[0].target.lng);
    });
  }
}
