import { TestBed } from '@angular/core/testing';

import { SpotaroomService } from './spotaroom.service';

describe('SpotaroomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpotaroomService = TestBed.get(SpotaroomService);
    expect(service).toBeTruthy();
  });
});
