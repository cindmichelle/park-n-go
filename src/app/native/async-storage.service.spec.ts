import { TestBed } from '@angular/core/testing';

import { AsyncStorageService } from './async-storage.service';

describe('AsyncStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncStorageService = TestBed.get(AsyncStorageService);
    expect(service).toBeTruthy();
  });
});
