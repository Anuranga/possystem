import { TestBed } from '@angular/core/testing';

import { TileServiceService } from './tile-service.service';

describe('TileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TileServiceService = TestBed.get(TileServiceService);
    expect(service).toBeTruthy();
  });
});
