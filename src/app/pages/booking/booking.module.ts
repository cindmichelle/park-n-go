import { FailComponent } from './../../components/booking/fail/fail.component';
import { SuccessComponent } from './../../components/booking/success/success.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingPage } from './booking.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BookingPage, SuccessComponent, FailComponent],
  entryComponents: [SuccessComponent, FailComponent],
})
export class BookingPageModule {}
