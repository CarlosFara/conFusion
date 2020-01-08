import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishdetailComponent } from './dishdetail.component';
import { MatCardModule, MatListModule, MatDialogModule, MatGridListModule } from '@angular/material';
import { DishService } from '../services/dish.service';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

describe('DishdetailComponent', () => {
  let component: DishdetailComponent;
  let fixture: ComponentFixture<DishdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatCardModule,
        MatListModule,
        MatDialogModule,
        MatGridListModule,
        AppRoutingModule
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
        { provide: APP_BASE_HREF, useValue : '/' }
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
