import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { MatCardModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { baseURL } from '../shared/baseurl';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatCardModule,
        MatListModule,
        MatProgressSpinnerModule,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [ AboutComponent ],
      providers: [{ provide: 'BaseURL', useValue: baseURL}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
