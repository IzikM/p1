import { TestBed, async, inject } from '@angular/core/testing';

import { TstGuard } from './tst.guard';

describe('TstGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TstGuard]
    });
  });

  it('should ...', inject([TstGuard], (guard: TstGuard) => {
    expect(guard).toBeTruthy();
  }));
});
