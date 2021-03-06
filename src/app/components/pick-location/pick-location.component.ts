import { Component, OnInit } from '@angular/core';
import {
  Environment,
  GoogleMap,
  GoogleMapOptions,
  GoogleMaps, GoogleMapsEvent, Marker,
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
  ) {
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMapForLoc();
  }

  async loadMapForLoc() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAs-bPFk39cMX-gV34ksx3MrLXpcviS1NQ',
    });

    await this.geoLoc.getCurrentPosition()
      .then((resp) => {
        this.locLat = resp.coords.latitude;
        this.locLong = resp.coords.longitude;
      })
      .catch((error: any) => {
        console.error('Error getting location', error);
      });

    const mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.locLat,
          lng: this.locLong,
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
      console.log('pick-location component ts', this.map.getCameraPosition().target);
      console.log('pick-location component ts', lat, lng);
    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((loc) => {
      this.mapClick = true;
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
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe();
      });
    });
  }

  setLocation() {
    this.modalCtrl.dismiss(this.placeLocation);
  }

  cancel() {
    this.modalCtrl.dismiss().then(r => r);
  }
}
