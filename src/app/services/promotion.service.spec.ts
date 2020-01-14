import { TestBed } from '@angular/core/testing';

import { PromotionService } from './promotion.service';
import { baseURL } from '../shared/baseurl';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PromotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [{ provide: 'BaseURL', useValue: baseURL}]
  }));

  it('should be created', () => {
    const service: PromotionService = TestBed.get(PromotionService);
    expect(service).toBeTruthy();
  });
});
