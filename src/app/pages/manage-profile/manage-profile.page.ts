import { Component, OnInit, ViewChild } from '@angular/core';
import { AsyncStorageService } from '../../native/async-storage.service';
import { UserService } from '../user.service';
import { LoadingController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireStorageModule } from '@angular/fire/storage';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.page.html',
  styleUrls: ['./manage-profile.page.scss'],
})
export class ManageProfilePage implements OnInit {

  @ViewChild('editProfile', { static: true }) form!: NgForm;

  userEmail!: string;
  userFirstName!: string;
  userLastName!: string;
  userPhoneNumber!: string;
  userId: any;

  constructor(
    private navCtrl: NavController,
    private asyncStorage: AsyncStorageService,
    private userService: UserService,
    private loadCtrl: LoadingController,
    // private camera: Camera,
  ) {
  }

  async ngOnInit() {
    const token: string = await this.asyncStorage.get('token');
    this.userService.getAllUserInfo(token);
    this.userService.getUser().subscribe(res => {
      this.userId = res[0].id;
      this.userEmail = res[0].email;
      this.userFirstName = res[0].firstName;
      this.userLastName = res[0].lastName;
      this.userPhoneNumber = res[0].phoneNo;
    });
  }

  async editProfileInDB() {
    console.log('UPDATE START', this.form.value.userLastName);
    const loading = await this.loadCtrl.create({
      message: 'Editing your profile...',
    });
    await loading.present();

    const uId = this.userId;
    const ufirstName = this.form.value.userFirstName;
    const ulastName = this.form.value.userLastName;
    const uEmail = this.form.value.userEmail;
    const uphNo = this.form.value.userPhoneNumber;

    this.userService.editUserProfile(uId, uEmail, ufirstName, ulastName, uphNo);
    console.log('UPDATE END');

    await loading.dismiss();
    this.backToManage();
  }

  editProfilePicture() {
    console.log('EDIT PROFILEEEE !!!!!!!!!!!!!!');

  }

  async takePicture() {
    try {
      console.log('WIP CAMERA');
    } catch (e) {
      console.error(e);
    }
  }

  backToManage() {
    this.navCtrl.navigateBack('tabs/profile').then(r => r);
    console.log('wip asdasd');
  }
}
