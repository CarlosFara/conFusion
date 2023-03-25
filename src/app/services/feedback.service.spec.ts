import { TestBed } from '@angular/core/testing';

import { FeedbackService } from './feedback.service';
import { baseURL } from '../shared/baseurl';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [{ provide: 'BaseURL', useValue: baseURL}]
  }));

  it('should be created', () => {
    const service: FeedbackService = TestBed.inject(FeedbackService);
    expect(service).toBeTruthy();
  });
});
