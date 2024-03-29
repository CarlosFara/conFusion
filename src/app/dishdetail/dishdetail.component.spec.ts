import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DishdetailComponent } from './dishdetail.component';
import { DishService } from '../services/dish.service';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { baseURL } from '../shared/baseurl';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';

describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[
        MatCardModule,
        MatListModule,
        MatDialogModule,
        MatGridListModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatSliderModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [ 
        DishdetailComponent,
        HomeComponent,
        MenuComponent,
        ContactComponent,
        AboutComponent
      ],
      providers: [
        DishService,
        { provide: APP_BASE_HREF, useValue : '/' },
        { provide: 'BaseURL', useValue: baseURL }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
