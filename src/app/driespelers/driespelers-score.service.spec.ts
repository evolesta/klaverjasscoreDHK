import { TestBed } from '@angular/core/testing';

import { DriespelersScoreService } from './driespelers-score.service';

describe('DriespelersScoreService', () => {
  let service: DriespelersScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriespelersScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
