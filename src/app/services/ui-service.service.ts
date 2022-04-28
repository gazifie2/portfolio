import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  color:any;
  constructor() { }

  setWrapColor(color:any){
    this.color = color;
    sessionStorage.setItem('wrapColor', color);
  }

  colorGen():any{
    return this.color;
  }

  YTembedVideos(id:string, source:string){
    return environment.YTembed+id+"?enablejsapi=1&origin="+source;
  }
  GDembedVideos(id:string){
    return environment.GDembed+id+"/preview";
  }

  
}
