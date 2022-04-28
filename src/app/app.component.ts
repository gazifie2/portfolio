import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { environment } from 'src/environments/environment';

import {
  transition,
  trigger,
  state,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

import { slider, open_close, zoomInOut } from './route-animations'; 
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    // fader,
    // slider,
    // transformer,
    //stepper
    slider,
    zoomInOut,
    open_close
  ],
})
export class AppComponent implements AfterViewChecked {
  title = 'Ghazi Boubaker';
  isOpen = false;
  backgroundWrapColor:any;
  backColor:any;

  email = environment.email;

  //backgroundWrapColor = 'linear-gradient(90deg, rgba(5,41,66,1) 19%, rgb(1, 65, 108) 83%, rgb(36, 63, 109) 100%)';

  constructor(
    private uiService: UiServiceService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private metaService: Meta,
    ) { }

  ngOnInit(): void {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      // console.log("mobile device");
    }else{
      // false for not mobile device
      // console.log("NOT mobile device");
    }

    // const baseUrl = window.location.protocol + '//' + window.location.hostname;
    // const imageUrl = baseUrl + '/assets/images/thumbnail2.webp';
    // this.metaService.addTag( { property: 'og:image', content: imageUrl } );

    // console.log('imageUrl', imageUrl);
      
    
    console.log('%c Made with %c❤ \n%c by %cGhazi Boubaker \n\n %cEmail: %c'+this.email,
      "font-size:1rem; color: black;",
      "font-size:1rem; color:red;", 
      "font-size:1rem; color: black;",
      "color:black; font-weight:900; font-size:1.1rem;",

      "font-size:1rem; color: black;",
      "color:black; font-weight:900; font-size:1.1rem;"
    );
  }
  

  ngAfterViewChecked():void {
    this.backgroundWrapColor = this.uiService.colorGen();

    if (this.backgroundWrapColor == undefined) {
      this.backgroundWrapColor = sessionStorage.getItem('wrapColor') as string;
      this.uiService.setWrapColor(this.backgroundWrapColor);
    }
    if (sessionStorage.getItem('wrapColor') === 'null') {
      this.backgroundWrapColor = 'green';
      this.uiService.setWrapColor(this.backgroundWrapColor);
    }
    
    this.backColor = this.backgroundWrapColor;
    if (this.backgroundWrapColor.includes('linear-gradient')) this.backColor = 'rgb(1, 65, 108)';
    if (this.backgroundWrapColor == 'yellow') {
      this.backColor = '#ffd42d';
      this.backgroundWrapColor = '#ffd42d';
    }

    var style = document.body.style;
    style.setProperty('--backColor', this.backColor);
    style.setProperty('--wrapBackColor', this.backColor);

    this.cd.detectChanges();
  }

  prepareRouteAnimation(outlet: RouterOutlet) {
    //console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  prepareRouteDepth(outlet: RouterOutlet) {
    // console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.depth)
    // console.log(outlet.activatedRouteData.depth);
    // sessionStorage.setItem('depth', outlet.activatedRouteData.depth);

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.depth;
  }
  prepareRouteFade(outlet: RouterOutlet) {
    //console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.fade)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.fade;
  }

}