import { TestBed } from '@angular/core/testing';

import { DemissionService } from './demission.service';

describe('DemissionService', () => {
  let service: DemissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
