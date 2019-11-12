import { Component, OnInit } from '@angular/core';
import { ManagePlaceService } from '../../../services/manage-place.service';
import { Place } from '../../../model/place.model';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {

  places: Place[] | undefined;

  constructor(private placeService: ManagePlaceService) { }

  ngOnInit() {}

  addPlaceToDB(){
    console.log('Vehicle Added');
    console.log('Closing Modal');
  }

  addPlacePicture(){
    console.log('Picture Added');
  }

}
