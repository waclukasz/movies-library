import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MainNavbarComponent} from "./components/main-navbar/main-navbar.component";
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { SingleMovieComponent } from "./components/single-movie/single-movie.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MovieComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
