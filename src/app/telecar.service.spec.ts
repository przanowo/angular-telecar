import { TestBed } from '@angular/core/testing';

import { TelecarService } from './telecar.service';

describe('TelecarService', () => {
  let service: TelecarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelecarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
