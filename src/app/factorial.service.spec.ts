import { TestBed, inject } from '@angular/core/testing';

import { FactorialService } from './factorial.service';

describe('FactorialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactorialService]
    });
  });

  it('should ...', inject([FactorialService], (service: FactorialService) => {
    expect(service).toBeTruthy();
  }));
});
