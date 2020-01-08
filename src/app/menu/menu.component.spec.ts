import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { MatGridListModule, MatCardModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HomeComponent } from '../home/home.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { APP_BASE_HREF } from '@angular/common';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatGridListModule,
        RouterModule,
        AppRoutingModule,
        MatCardModule,
        MatListModule
      ],
      declarations: [
        MenuComponent,
        HomeComponent,
        DishdetailComponent,
        ContactComponent,
        AboutComponent
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //NullInjectorError: No provider for Router!
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
