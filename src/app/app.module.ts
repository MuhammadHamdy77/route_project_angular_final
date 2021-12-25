import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgwWowModule } from 'ngx-wow';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { NetworkComponent } from './pages/network/network.component';
import { LoginComponent } from './sign/login/login.component';
import { RegisterComponent } from './sign/register/register.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { PepolComponent } from './pages/pepol/pepol.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalService } from './providers/services/global.service';
import { AuthInterceptor } from './providers/interceptor/auth.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderhomeComponent } from './pages/headerhome/headerhome.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { SeemorePipe } from './providers/pipes/seemore.pipe';
import { PersondetailsComponent } from './pages/persondetails/persondetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    MoviesComponent,
    TvComponent,
    NetworkComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    Notfound404Component,
    PepolComponent,
    ProfileComponent,
    HeaderhomeComponent,
    MoviedetailsComponent,
    SeemorePipe,
    PersondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgwWowModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
     
    }),
  ],
  providers: [
    GlobalService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
