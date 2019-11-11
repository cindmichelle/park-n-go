import { AddPlaceComponent } from './../../components/add-place/add-place.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-place',
  templateUrl: './manage-place.page.html',
  styleUrls: ['./manage-place.page.scss'],
})
export class ManagePlacePage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  addPlace() {
    console.log('Add button clicked!');

    this.showModal();
  }

  async showModal() {
    const modalAdd = await this.modalCtrl.create({
      component: AddPlaceComponent,
    });

    await modalAdd.present();
  }
}
