import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NetworkComponent } from './pages/network/network.component';
import { Notfound404Component } from './pages/notfound404/notfound404.component';
import { PepolComponent } from './pages/pepol/pepol.component';
import { PersondetailsComponent } from './pages/persondetails/persondetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TvComponent } from './pages/tv/tv.component';
import { AuthGuard } from './providers/guards/auth.guard';
import { NotkoggedGuard } from './providers/guards/deactivate.guard';
import { LoginComponent } from './sign/login/login.component';
import { RegisterComponent } from './sign/register/register.component';

const routes: Routes = [
  {path:"" , redirectTo:'home' , pathMatch:"full"},
  {path:"home"  ,  component:HomepageComponent},
  {path:"alluser"   , component:AboutpageComponent , canActivate:[NotkoggedGuard]},
  {path:"pizza" , component:MoviesComponent , canActivate:[NotkoggedGuard]},
  {path:"sport" , component:TvComponent  , canActivate:[NotkoggedGuard]},
  {path:"news" , component:NetworkComponent  , canActivate:[NotkoggedGuard]},
  {path:"pepol" , component:PepolComponent , canActivate:[NotkoggedGuard]},
  {path:"profile", component:ProfileComponent , canActivate:[NotkoggedGuard]},
  {path:"moviedetails/:id", component:MoviedetailsComponent , canActivate:[NotkoggedGuard]},
  {path:"persondetails/:id", component:PersondetailsComponent , canActivate:[NotkoggedGuard]},

  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  }
,
  {path:"login" , component:LoginComponent , canActivate:[AuthGuard]},
  {path:"register" , component:RegisterComponent , canActivate:[AuthGuard]},
  {path:"**" , component:Notfound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
