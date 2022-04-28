import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ServicesComponent } from './content/services/services.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { CodingComponent } from './content/work/coding/coding.component';
import { ItComponent } from './content/work/it/it.component';
import { PhotoDetailsComponent } from './content/work/photos/photo-details/photo-details.component';
import { PhotosComponent } from './content/work/photos/photos.component';
import { VideosComponent } from './content/work/videos/videos.component';
import { WorkComponent } from './content/work/work.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent, data: { animation: 0, fade: 1}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild([
      // {path: 'welcome', component: WelcomeComponent, data: { animation: 0}}, //no need for this since it's defined in the Routes up
      {path: 'about', component: AboutComponent, data: { animation: 1, depth: 0, fade: 0}},
      {path: 'work', component: WorkComponent, data: { animation: 2, depth: "work", fade: 0}},
      {path: 'services', component: ServicesComponent, data: { animation: 3, depth: 0, fade: 0}},
      {path: 'photos', component: PhotosComponent, data: { animation: 2, depth: "photos", fade: 0}}, 
      {path: 'photo-details/:id', component: PhotoDetailsComponent, data: { animation: 2, depth: "photo-details", fade: 0}}, 
      {path: 'videos', component: VideosComponent, data: { animation: 2, depth: "videos", fade: 0}},
      {path: 'coding', component: CodingComponent, data: { animation: 2, depth: "coding", fade: 0}},
      {path: 'it', component: ItComponent, data: { animation: 2, depth: 'it'}},

      {path: 'contact', component: ContactComponent, data: { fade: 1}},

      { path: '**', redirectTo: 'welcome' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
