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

  image = 'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png';
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((res) => {
      this.user = res[0];
      console.log('LOGGED IN USER FROM ON INIT', this.user);
    });
  }
}
