import { FailComponent } from './../../components/booking/fail/fail.component';
import { SuccessComponent } from './../../components/booking/success/success.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async bookingPlace() {
    const success = 1;
    if (success) {
      const modal = await this.modalCtrl.create({
        component: SuccessComponent,
      });
      await modal.present();
    } else {
      const modal = await this.modalCtrl.create({
        component: FailComponent,
      });
      await modal.present();
    }
  }
}
