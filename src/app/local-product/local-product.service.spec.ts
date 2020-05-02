import { TestBed } from '@angular/core/testing';

import { LocalProductService } from './local-product.service';

describe('LocalProductService', () => {
  let service: LocalProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
