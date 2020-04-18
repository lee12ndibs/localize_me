import { TestBed } from '@angular/core/testing';

import { AmisService } from './amis.service';

describe('AmisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmisService = TestBed.get(AmisService);
    expect(service).toBeTruthy();
  });
});
