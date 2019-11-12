import { AsyncStorageService } from './../../native/async-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private storage: AsyncStorageService, private router: Router) {}

  ngOnInit() {}

  async onLogOut() {
    await this.storage.delete('token');
    this.router.navigateByUrl('/auth');
  }
}
