import { AsyncStorageService } from './../../native/async-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserViewModel } from './../../model/user.model';
import { UserService } from './../user.service';
import { storage } from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user!: UserViewModel;
  name = 'Sample Name';
  email = 'Sample Email';
  profilePic = 'https://www.freeiconspng.com/uploads/no-image-icon-11.PNG';

  constructor(
    private asyncStorage: AsyncStorageService, private router: Router, private userService: UserService) {
  }

  async ngOnInit() {

  }

  async ionViewWillEnter() {
    const token: string = await this.asyncStorage.get('token');
    this.userService.getAllUserInfo(token);
    await this.userService.getUser().subscribe((res) => {
      this.user = res[0];
      this.name = res[0].firstName + ' ' + res[0].lastName;
      this.email = token;
      // this.getProfilePicture();
      console.log('LOGGED IN USER FROM ON INIT PROFILE', this.user);
    });

    this.getProfilePicture();
  }

  getProfilePicture() {
    storage().ref().child('profilePictures/' + this.email + '.jpg').getDownloadURL().then((url) => {
      console.log(url)
      this.profilePic = url;
    });
  }

  async onLogOut() {
    await this.asyncStorage.delete('token');
    this.router.navigateByUrl('/auth');
  }
}
