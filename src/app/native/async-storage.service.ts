import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AsyncStorageService {
  constructor(private storage: Storage) {}

  async set(key: string, value: any) {
    try {
      await this.storage.set(key, value);
    } catch (error) {
      console.log('ERROR SET ASYNC STORAGE', error);
    }
  }

  async get(key: string) {
    try {
      const response = await this.storage.get(key);
      return response;
    } catch (error) {
      console.log('ERROR GET ASYNC STORAGE', error);
    }
  }

  async delete(key: string) {
    try {
      await this.storage.remove(key);
      return true;
    } catch (error) {
      console.log('ERROR GET ASYNC STORAGE', error);
      return false;
    }
  }
}
