import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './content/contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { AboutComponent } from './content/about/about.component';
import { WorkComponent } from './content/work/work.component';
import { ServicesComponent } from './content/services/services.component';
import { PhotosComponent } from './content/work/photos/photos.component';
import { VideosComponent } from './content/work/videos/videos.component';
import { CodingComponent } from './content/work/coding/coding.component';
import { ItComponent } from './content/work/it/it.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavBarComponent,
    WelcomeComponent,
    AboutComponent,
    WorkComponent,
    ServicesComponent,
    PhotosComponent,
    VideosComponent,
    CodingComponent,
    ItComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
