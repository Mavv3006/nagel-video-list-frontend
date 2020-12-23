import { TestBed } from '@angular/core/testing';

import { MockLevelService } from './mock-level.service';

describe('MockLevelService', () => {
  let service: MockLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
