import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { 
  MatSidenavModule, 
  MatMenuModule, 
  MatIconModule,
  MatSnackBarModule, 
  MatToolbarModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
  
} from '@angular/material';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent }
];

@NgModule({
  exports: [
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
  ],
  declarations: [
    AppComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent
  ],
  imports: [
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    BrowserModule,
    [BrowserAnimationsModule],
    RouterModule.forRoot(
      appRoutes, { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
