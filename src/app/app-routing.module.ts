import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MaRegieComponent } from './Articles/work/coding/ma-regie/ma-regie.component';
import { PortfolioComponent } from './Articles/work/coding/portfolio/portfolio.component';
import { ProjectBlankStarePortraitComponent } from './Articles/work/photos/project-blank-stare-portrait/project-blank-stare-portrait.component';
import { ProjectFrontPortraitComponent } from './Articles/work/photos/project-front-portrait/project-front-portrait.component';
import { ProjectSilhouetteComponent } from './Articles/work/photos/project-silhouette/project-silhouette.component';
import { ProjectSkyLanternsComponent } from './Articles/work/photos/project-sky-lanterns/project-sky-lanterns.component';
import { ProjectThinkerPortraitComponent } from './Articles/work/photos/project-thinker-portrait/project-thinker-portrait.component';
import { ProjectTurkishLightsComponent } from './Articles/work/photos/project-turkish-lights/project-turkish-lights.component';
import { About2Component } from './content/about2/about2.component';
import { ContactComponent } from './content/contact/contact.component';
import { ServicesComponent } from './content/services/services.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { CodingComponent } from './content/work/coding/coding.component';
import { ItComponent } from './content/work/it/it.component';
import { PhotosComponent } from './content/work/photos/photos.component';
import { VideosComponent } from './content/work/videos/videos.component';
import { WorkComponent } from './content/work/work.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, data: { animation: 0, fade: 0}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild([
      // {path: 'welcome', component: WelcomeComponent, data: { animation: 0, fade: 0}}, //no need for this since it's defined in the Routes up
      {path: 'about', component: About2Component, data: { animation: 1, depth: 0, fade: 0}},
      {path: 'work', component: WorkComponent, data: { animation: 2, depth: "work", fade: 0}},
      {path: 'services', component: ServicesComponent, data: { animation: 3, depth: 0, fade: 0}},
      {path: 'photos', component: PhotosComponent, data: { animation: 2, depth: "photos", fade: 0}}, 

      {path: 'project-silhouette', component: ProjectSilhouetteComponent, data: { animation: 2, depth: "photo-details", fade: 0}},
      {path: 'project-turkish-lights', component: ProjectTurkishLightsComponent, data: { animation: 2, depth: "photo-details", fade: 0}},
      {path: 'project-sky-lanterns', component: ProjectSkyLanternsComponent, data: { animation: 2, depth: "photo-details", fade: 0}},
      {path: 'project-thinker-portrait', component: ProjectThinkerPortraitComponent, data: { animation: 2, depth: "photo-details", fade: 0}},
      {path: 'project-blank-stare-portrait', component: ProjectBlankStarePortraitComponent, data: { animation: 2, depth: "photo-details", fade: 0}},
      {path: 'project-front-portrait', component: ProjectFrontPortraitComponent, data: { animation: 2, depth: "photo-details", fade: 0}},

      {path: 'videos', component: VideosComponent, data: { animation: 2, depth: "videos", fade: 0}},
      {path: 'coding', component: CodingComponent, data: { animation: 2, depth: "coding", fade: 0}},

      {path: 'project-portfolio', component: PortfolioComponent, data: { animation: 4, depth: 0, fade: 0}},
      {path: 'project-maregie', component: MaRegieComponent, data: { animation: 4, depth: 0, fade: 0}},

      {path: 'it', component: ItComponent, data: { animation: 2, depth: 'it'}},

      {path: 'contact', component: ContactComponent, data: { fade: 1}},
      {path: '404', component: Page404Component, data: { animation: 0, depth: 0, fade: 0}},
      
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},

      { path: '**', redirectTo: '404' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
