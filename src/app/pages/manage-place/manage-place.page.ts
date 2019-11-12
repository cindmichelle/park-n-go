import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagePlaceService } from '../../services/manage-place.service'
import { Place } from '../../model/place.model';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.page.html',
  styleUrls: ['./manage-place.page.scss'],
})
export class ManagePlacePage implements OnInit {

  places: Place[] | undefined;

  constructor(private routeCtrl: Router, private placeService: ManagePlaceService) {}

  ngOnInit() {
    this.placeService.getPlaces().subscribe(res => {
      this.places = res;
      console.log(this.places);
    });
  }

  addPlace() {
    console.log('Add button clicked!');

    this.routeCtrl.navigateByUrl('/add-place');

  }
}
