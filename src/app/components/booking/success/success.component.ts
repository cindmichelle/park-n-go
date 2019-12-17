import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  LaunchNavigator,
  LaunchNavigatorOptions,
} from '@ionic-native/launch-navigator/ngx';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  @Input()
  lng!: number;
  lat!: number;
  placeName!: string;

  constructor(
    private launchNavigator: LaunchNavigator,
    private modalCtrl: ModalController,
    private router: Router,
  ) {}

  ngOnInit() {}

  async navigateToMap() {
    const options: LaunchNavigatorOptions = {
      start: '',
    };

    this.launchNavigator
      .navigate([this.lat, this.lng], options)
      .then(
        (success) => console.log('SUCCESS Launched navigator'),
        (error) => console.log('Error launching navigator: ' + error),
      );
  }

  closeModal() {
    this.router.navigateByUrl('/tabs/history');
    this.modalCtrl.dismiss();
  }
}
