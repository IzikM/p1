import { TestBed, async, inject } from '@angular/core/testing';

import { QaGuard } from './qa.guard';

describe('QaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QaGuard]
    });
  });

  it('should ...', inject([QaGuard], (guard: QaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
