import { TestBed } from '@angular/core/testing';

import { ApiAuthServiceService } from './api-auth-service.service';

describe('ApiAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAuthServiceService = TestBed.get(ApiAuthServiceService);
    expect(service).toBeTruthy();
  });
});
