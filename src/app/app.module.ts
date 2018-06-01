import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './not-found.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'hero-detail', pathMatch: 'full' },
  { path: 'hero-detail', component: HeroDetailComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: '**', component: PageNotFoundComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PageNotFoundComponent,
    HeroFormComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }