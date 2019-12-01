import { ManagePlaceService } from './../../services/manage-place.service';
import { Platform } from '@ionic/angular';
import { VehicleViewModel } from './../../model/vehicle.model';
import { PlaceViewModel } from './../../model/place.model';
import { AsyncStorageService } from './../../native/async-storage.service';
import { UserViewModel } from './../../model/user.model';
import { UserService } from './../user.service';
import { Component, NgZone, OnInit } from '@angular/core';
import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  Marker,
  Environment, Geocoder
} from '@ionic-native/google-maps/ngx';
import { GoogleMapOptions } from '@ionic-native/google-maps/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Locations } from './../../model/location.model';

declare var google: any;

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
  locations: Locations[] = [];
  private locLat: any;
  private locLong: any;
  cardAreaName = '';
  cardAddress = '';
  cardPricePerHour = '';
  cardPlaceId = '';
  search = '';
  private googleAutoComplete = new google.maps.places.AutocompleteService();
  public srchResults = new Array<any>();

  image = 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png';

  constructor(
    private userService: UserService,
    private storage: AsyncStorageService,
    private platform: Platform,
    private geoLocation: Geolocation,
    private managePlaceSvc: ManagePlaceService,
    private ngZone: NgZone,
  ) {
    console.log(google);
  }

  async ngOnInit() {
    const token: string = await this.storage.get('token');
    this.userService.getAllUserInfo(token);
    // @ts-ignore
    this.userService.getUser().subscribe((res) => {
      this.user = res[0];
      console.log('LOGGED IN USER FROM ON INIT', this.user);
    });

    // @ts-ignore
    this.userService.getVehicles().subscribe((res) => {
      this.vehicles = res;
      // console.log('LOGGED IN USER FROM ON INIT V', this.vehicles);
    });

    await this.managePlaceSvc.getAllPlaces().subscribe((res) => {
      this.places = res;
      console.log('SHOW ALL NEARBY PLACES', this.places);

      this.places.forEach((it) => {
        console.log('In For each');
        const location = {
          title: it.areaName,
          position: {
            lat: it.locLatitude,
            lng: it.locLongitude,
          },
        } as Locations;
        this.locations.push(location);
        console.log('PUSH LOCATION', this.locations);

        const newMarker: Marker = this.map.addMarkerSync(location);
        newMarker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.cardAreaName = it.areaName;
          this.cardAddress = it.address;
          this.cardPricePerHour = String(it.pricePerHour);
          this.cardPlaceId = it.id;
          console.log(it);
        });
      });
    });

    await this.platform.ready();

    await this.geoLocation
      .getCurrentPosition()
      .then((resp) => {
        this.locLat = resp.coords.latitude;
        this.locLong = resp.coords.longitude;
        console.log('Current Latitude', this.locLat);
        console.log('Current Longitude', this.locLong);
      })
      .catch((error: any) => {
        console.error('Error getting location', error);
      });

    await this.loadMap(this.locLat, this.locLong);
  }

  async loadMap(locLat: number, locLong: number) {
    // This code is necessary for browser
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
    });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: locLat,
          lng: locLong,
        },
        zoom: 18,
        tilt: 30,
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    const currMarker: Marker = this.map.addMarkerSync({
      title: 'Current Location',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: locLat,
        lng: locLong,
      },
    });

    currMarker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      // alert('Current Location Marker Clicked !');
    });
  }

  searchChanged() {
    if (!this.search.trim().length) { return; }

    this.googleAutoComplete.getPlacePredictions({ input: this.search }, (predictions: any[]) => {
      this.ngZone.run(() => {
        this.srchResults = predictions;
      });
    });
  }

  async searchClick(place: any) {
    this.search = '';
    console.log(place);

    const searchedLocation: any = await Geocoder.geocode({ address: place.description });
    console.log(searchedLocation[0]);
    const goToPosition = {
      target: searchedLocation[0].position,
      zoom: 20,
      tilt: 30,
    };
    await this.map.moveCamera(goToPosition);
  }

  showBookingConfirmation(id: string) {
    console.log(id);
  }
}
