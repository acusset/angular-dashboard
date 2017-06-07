import { TestBed, inject } from '@angular/core/testing';

import { TechCrunchService } from './techcrunch.service';

describe('TechCrunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechCrunchService]
    });
  });

  it('should be created', inject([TechCrunchService], (service: TechCrunchService) => {
    expect(service).toBeTruthy();
  }));
});
