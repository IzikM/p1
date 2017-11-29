import { TestBed, async, inject } from '@angular/core/testing';

import { Kav2Guard } from './kav2.guard';

describe('Kav2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Kav2Guard]
    });
  });

  it('should ...', inject([Kav2Guard], (guard: Kav2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
