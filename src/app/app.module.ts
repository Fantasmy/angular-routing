// angular stuff
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { RecentHeroesComponent } from './components/recent-heroes/recent-heroes.component';

// services
import { RecentHeroesService } from './services/recent-heroes.service';

// routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'hero/:id',  component: HeroDetailPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeroDetailPageComponent,
    RecentHeroesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // connects through <router-outlet></router-outlet>
  ],
  providers: [RecentHeroesService], // manually written from services
  bootstrap: [AppComponent]
})
export class AppModule { }
