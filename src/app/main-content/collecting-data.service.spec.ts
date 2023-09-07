import { TestBed } from '@angular/core/testing';

import { CollectingDataService } from './collecting-data.service';

describe('CollectingDataService', () => {
  let service: CollectingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
