import { TestBed } from '@angular/core/testing';

import { InterceptorErrorsService } from './interceptor-errors.service';

describe('InterceptorErrorsService', () => {
  let service: InterceptorErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
