import { TestBed } from '@angular/core/testing';

import { StudentrecordsService } from './services/studentrecords.service';

describe('StudentrecordsService', () => {
  let service: StudentrecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentrecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
