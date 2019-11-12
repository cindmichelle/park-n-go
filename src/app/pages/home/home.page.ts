import { UserService } from './../user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image = 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png';
  constructor(private userService: UserService) {
    console.log('LOGGED IN USER', this.userService.getUser());
  }
}
