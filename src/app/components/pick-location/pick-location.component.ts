import { Component, OnInit, NgZone } from '@angular/core';
import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps,
  GoogleMapsEvent,
  Marker,
} from '@ionic-native/google-maps/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-pick-location',
  templateUrl: './pick-location.component.html',
  styleUrls: ['./pick-location.component.scss'],
})
export class PickLocationComponent implements OnInit {
  map!: GoogleMap;
  private placeLocation!: any;
  mapClick = false;
  locLat: any;
  locLong: any;

  constructor(
    private platform: Platform,
    private modalCtrl: ModalController,
    private geoLoc: Geolocation,
    private ngZone: NgZone,
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    await this.platform.ready();
    await this.loadMapForLoc();
    const nodeList = document.querySelectorAll('#map_canvas');
    console.log('node list', nodeList);
  }

  ionViewWillLeave() {
    const nodeList = document.querySelectorAll('#map_canvas');

    for (let k = 0; k < nodeList.length; ++k) {
      nodeList.item(k).classList.remove('_gmaps_cdv_');
    }
  }

  async loadMapForLoc() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
    });

    const currentLocation = await this.geoLoc.getCurrentPosition();

    const currLat = currentLocation.coords.latitude;
    const currLng = currentLocation.coords.longitude;

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: currLat,
          lng: currLng,
        },
        zoom: 18,
        tilt: 30,
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.on(GoogleMapsEvent.CAMERA_MOVE).subscribe(() => {
      // console.log(loc.lat, loc.lng);
      // @ts-ignore
      const lat = this.map.getCameraPosition().target.lat;
      // @ts-ignore
      const lng = this.map.getCameraPosition().target.lng;
      console.log(
        'pick-location component ts',
        this.map.getCameraPosition().target,
      );
      console.log('pick-location component ts', lat, lng);
    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((loc) => {
      this.ngZone.run(() => (this.mapClick = true));
      console.log('loc', loc);
      console.log('loc[0]', loc[0]);
      console.log('loc[0].lat', loc[0].lat);
      // console.log(loc[0].LatLng.lat, loc[0].LatLng.lng);
      this.map.clear().then(() => {
        this.placeLocation = {
          lat: loc[0].lat,
          lng: loc[0].lng,
        };
        const marker: Marker = this.map.addMarkerSync({
          title: 'Selected Location',
          position: {
            lat: loc[0].lat,
            lng: loc[0].lng,
          },
        });
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {});
      });
    });
  }

  setLocation() {
    this.modalCtrl.dismiss(this.placeLocation);
  }

  cancel() {
    this.modalCtrl.dismiss().then((r) => r);
  }
}
