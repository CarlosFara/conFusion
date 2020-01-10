import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing/routes';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule, MatGridListModule, MatListModule, MatToolbarModule, MatDialogModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule, MatSliderModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        AppRoutingModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatSliderModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        DishdetailComponent,
        ContactComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'conFusion'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('conFusion');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Ristorante Con Fusion');
  }));
});
