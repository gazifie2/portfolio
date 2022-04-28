import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { zoomInOut } from 'src/app/route-animations';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['../../../Articles/work/photos/photos-articles-styleSheet.scss', './videos.component.scss'],
  animations: [
    zoomInOut
  ]
})
export class VideosComponent implements OnInit {

  backgroundWrapColor: any;
  videoId = "";
  videoId_list: Array<any> = [];
  YTembedURL_list: Array<any> = [];
  GDembedURL_list: Array<any> = [];
  showSpinner: boolean = true;
  counter: Number = 0;

  constructor(private uiService: UiServiceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.showSpinner = true;

    this.backgroundWrapColor = '#333333';
    this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";

    document.body.scrollTo(0, 0);

    //  //animating the top-control-container
    //  var element2 = document.getElementsByClassName('top-control-container')[0] as HTMLElement;
    //  element2.style.opacity = '0';
    //  setTimeout(() => {
    //    element2.style.opacity = '1';
    //    element2.style.transition = 'opacity 600ms';
    //  }, 600);

    //----

    var YTlink = environment.YTembed;

    //JF doc Ena m3aha 
    this.videoId = 'PU-ajD5DOS0';
    this.videoId_list.push(this.videoId);
    //JF Teaser Active citizens 
    this.videoId = 'dq2cAgv_pSA';
    this.videoId_list.push(this.videoId);
    //JF doc Active citizens 
    this.videoId = 'ulCA5A_CJ9A';
    this.videoId_list.push(this.videoId);
    //JF doc Tadbir 
    this.videoId = 'z_2TKP87l7M';
    this.videoId_list.push(this.videoId);
    //JF doc Nebni 
    this.videoId = 'mQNYA0nqWv8';
    this.videoId_list.push(this.videoId);

    //JF Clip Ena m3aha 
    this.videoId = 'Ct5G7nLo8KQ';
    this.videoId_list.push(this.videoId);

    this.videoId_list.forEach(element => {
      this.YTembedURL_list.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.uiService.YTembedVideos(element, YTlink)));
      // console.warn(this.uiService.YTembedVideos(element, YTlink));
    });

    //this.YTembedURL_list=[];
    //JF Google drive Ena m3aha 
    this.GDembedURL_list.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.uiService.GDembedVideos('1X-qfDPCZyG-Amu18K163IWxDjL0qoaA3')));

  }

  ngOnDestroy() {
    //console.warn(document.readyState);
    this.YTembedURL_list = [];
    this.showSpinner = true;
  }

  myLoadEvent(showSpinner: any) {
    setTimeout(() => {
      this.counter = this.counter as number + 1;
      //console.log('less than 0');
    }, 0)

    if (this.counter > 0) { // counter is the way to wait untill all the iframe are loaded
      //console.log('MORE than 0');
      this.showSpinner = false;
    }

    if (!this.showSpinner) {
      for (let i = 0; i < document.getElementsByTagName('iframe').length; i++) {
        var element = document.getElementsByTagName('iframe')[i];
        element.style.visibility = "visible";
        element.style.pointerEvents = "auto";
      }
    }
  }

}
