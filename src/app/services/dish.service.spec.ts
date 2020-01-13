import { TestBed } from '@angular/core/testing';

import { DishService } from './dish.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { baseURL } from '../shared/baseurl';

describe('DishService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule,
    ],
    providers:[
      { provide: 'BaseURL', useValue: baseURL }
    ]
  }));

  it('should be created', () => {
    const service: DishService = TestBed.get(DishService);
    expect(service).toBeTruthy();
  });
});
