import { TestBed } from '@angular/core/testing';

import { CanActivateTodosGuard } from './can-activate-todos.guard';

describe('CanActivateTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateTodosGuard = TestBed.get(CanActivateTodosGuard);
    expect(service).toBeTruthy();
  });
});
