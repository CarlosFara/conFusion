import { TestBed } from '@angular/core/testing';

import { LeaderService } from './leader.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { baseURL } from '../shared/baseurl';

describe('LeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers: [{ provide: 'BaseURL', useValue: baseURL}]
  }));

  it('should be created', () => {
    const service: LeaderService = TestBed.inject(LeaderService);
    expect(service).toBeTruthy();
  });
});
