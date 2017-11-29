import { TestBed, async, inject } from '@angular/core/testing';

import { ProductionGuard } from './production.guard';

describe('ProductionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionGuard]
    });
  });

  it('should ...', inject([ProductionGuard], (guard: ProductionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
