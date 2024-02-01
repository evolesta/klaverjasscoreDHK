import { TestBed } from '@angular/core/testing';

import { BoomScoreService } from './boom-score.service';

describe('BoomScoreService', () => {
  let service: BoomScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoomScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
