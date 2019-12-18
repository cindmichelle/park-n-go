import { AsyncStorageService } from './../../../native/async-storage.service';
import { Login } from './../../../model/login.model';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  input: Login = {
    email: '',
    password: '',
  };

  constructor(
    private authSvc: AuthService,
    private toastCtrl: ToastController,
    private router: Router,
    private loadCtrl: LoadingController,
    private storage: AsyncStorageService,
  ) {
  }

  async ngOnInit() {

  }

  async onLogin() {
    const loading = await this.loadCtrl.create({
      message: 'Loging in . . .',
    });
    await loading.present();
    this.authSvc.login(this.input.email, this.input.password).subscribe(
      async (resp) => {
        try {
          if (resp.idToken) {
            await this.storage.set('token', this.input.email);
            await this.presentSuccessToast();
            await this.loadCtrl.dismiss();
            this.router.navigateByUrl('/tabs/parking');
          }
        } catch (error) {
          console.log(error);
        }
      },
      (errorResp) => {
        this.presentFailedToast();
        console.log('error', errorResp);
      },
    );
  }

  async presentSuccessToast() {
    const toast = await this.toastCtrl.create({
      message: `Welcome back. Let's book parking! `,
      duration: 3000,
    });
    await toast.present();
  }

  async presentFailedToast() {
    const toast = await this.toastCtrl.create({
      message: `Incorrect email/password. Please try again.`,
      duration: 3000,
    });
    await toast.present();
  }
}
