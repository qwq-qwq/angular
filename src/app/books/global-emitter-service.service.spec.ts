import { TestBed, inject } from '@angular/core/testing';

import { GlobalSyncService } from './global-emitter-service.service';

describe('GlobalSyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalSyncService]
    });
  });

  it('should be created', inject([GlobalSyncService], (service: GlobalSyncService) => {
    expect(service).toBeTruthy();
  }));
});
