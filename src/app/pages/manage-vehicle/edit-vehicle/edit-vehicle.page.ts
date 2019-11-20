import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { ManageVehicleService } from '../../../services/manage-vehicle.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AsyncStorageService } from '../../../native/async-storage.service';
import { Vehicle } from '../../../model/vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})
export class EditVehiclePage implements OnInit {

  @ViewChild('editVehicle', { static: true }) form!: NgForm;
  vType!: string;
  vModel!: string;
  plateNo!: string;
  private vehicleId!: string;
  private email!: string;

  constructor(
    private navCtrl: NavController,
    private loadCtrl: LoadingController,
    private manageVehicleSvc: ManageVehicleService,
    private activatedRoute: ActivatedRoute,
    private storage: AsyncStorageService,
    private firestore: AngularFirestore
  ) {}

  async ngOnInit() {
    this.email = await this.storage.get('token');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id')) {
        this.backToManage();
      }

      this.vehicleId = paramMap.get('id') + '';
      console.log(this.vehicleId);

      const data = this.firestore.doc<Vehicle>('vehicles/' + this.vehicleId);
      const result = data.valueChanges();
      result.subscribe(res => {
        // @ts-ignore
        this.vType = res.vehicleType;
        // @ts-ignore
        this.vModel = res.vehicleModel;
        // @ts-ignore
        this.plateNo = res.plateNo;
      });
    });
  }

  async editVehicleInDB() {
    const loading = await this.loadCtrl.create({
      message: 'Editing your vehicle...',
    });
    await loading.present();

    // Get data from Form
    const model = this.form.value.vModel;
    const type = this.form.value.vType;
    const plate = this.form.value.plateNo;
    const email = await this.storage.get('token');

    await this.manageVehicleSvc.editVehicle(email, plate, model, type, this.vehicleId);

    await loading.dismiss();
    this.backToManage();
  }

  async deleteVehicleFromDB() {
    const loading = await this.loadCtrl.create({
      message: 'Deleting your vehicle...',
    });
    await loading.present();

    await this.manageVehicleSvc.deleteVehicle(this.vehicleId, this.email);

    await loading.dismiss();
    this.backToManage();
  }

  backToManage() {
    this.navCtrl.navigateBack('account/manage-vehicle').then(r => r);
  }
}
