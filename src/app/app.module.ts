import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

import { RouteOneModule } from './+route-one';
import { RouteTwoModule } from './+route-two';

@NgModule({
  imports: [
    BrowserModule,

    AppRoutingModule,

    RouteOneModule,
    RouteTwoModule,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
