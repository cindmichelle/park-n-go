import { TestBed } from '@angular/core/testing';

import { ManagePlaceService } from './manage-place.service';

describe('ManagePlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePlaceService = TestBed.get(ManagePlaceService);
    expect(service).toBeTruthy();
  });
});
