import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './content/contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { WorkComponent } from './content/work/work.component';
import { ServicesComponent } from './content/services/services.component';
import { PhotosComponent } from './content/work/photos/photos.component';
import { VideosComponent } from './content/work/videos/videos.component';
import { CodingComponent } from './content/work/coding/coding.component';
import { ItComponent } from './content/work/it/it.component';
import { ProjectSilhouetteComponent } from './Articles/work/photos/project-silhouette/project-silhouette.component';
import { ProjectTurkishLightsComponent } from './Articles/work/photos/project-turkish-lights/project-turkish-lights.component';
import { ProjectSkyLanternsComponent } from './Articles/work/photos/project-sky-lanterns/project-sky-lanterns.component';
import { ProjectThinkerPortraitComponent } from './Articles/work/photos/project-thinker-portrait/project-thinker-portrait.component';
import { ProjectBlankStarePortraitComponent } from './Articles/work/photos/project-blank-stare-portrait/project-blank-stare-portrait.component';
import { ProjectFrontPortraitComponent } from './Articles/work/photos/project-front-portrait/project-front-portrait.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { About2Component } from './content/about2/about2.component';
import { InProgressComponent } from './in-progress/in-progress.component';
import { Page404Component } from './page404/page404.component';
import { PortfolioComponent } from './Articles/work/coding/portfolio/portfolio.component';
import { MaRegieComponent } from './Articles/work/coding/ma-regie/ma-regie.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavBarComponent,
    WelcomeComponent,
    WorkComponent,
    ServicesComponent,
    PhotosComponent,
    VideosComponent,
    CodingComponent,
    ItComponent,
    ProjectSilhouetteComponent,
    ProjectTurkishLightsComponent,
    ProjectSkyLanternsComponent,
    ProjectThinkerPortraitComponent,
    ProjectBlankStarePortraitComponent,
    ProjectFrontPortraitComponent,
    About2Component,
    InProgressComponent,
    Page404Component,
    PortfolioComponent,
    MaRegieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
