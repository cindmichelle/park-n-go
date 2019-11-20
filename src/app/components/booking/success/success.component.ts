import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}

  closeModal() {
    this.router.navigateByUrl('/tabs/history');
    this.modalCtrl.dismiss();
  }
}
