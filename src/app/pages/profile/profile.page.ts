import { AsyncStorageService } from './../../native/async-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserViewModel } from './../../model/user.model';
import { UserService } from './../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user!: UserViewModel;
  name = 'Sample Name';
  email = 'Sample Email';
  constructor(
    private storage: AsyncStorageService, private router: Router, private userService: UserService) {}

  async ngOnInit() {
    const token: string = await this.storage.get('token');
    this.userService.getAllUserInfo(token);
    // @ts-ignore
    await this.userService.getUser().subscribe((res) => {
      this.user = res[0];
      this.name = res[0].firstName + ' ' + res[0].lastName;
      this.email = res[0].email;
      console.log('LOGGED IN USER FROM ON INIT PROFILE', this.user);
    });
  }

  async onLogOut() {
    await this.storage.delete('token');
    this.router.navigateByUrl('/auth');
  }
}
