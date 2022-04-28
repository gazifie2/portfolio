import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';

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
  title = 'portfolio';
  isOpen = false;
  backgroundWrapColor:any;
  //backgroundWrapColor = 'linear-gradient(90deg, rgba(5,41,66,1) 19%, rgb(1, 65, 108) 83%, rgb(36, 63, 109) 100%)';

  constructor(private uiService: UiServiceService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  
  ngAfterViewChecked():void {
    this.backgroundWrapColor = this.uiService.colorGen();
    this.cd.detectChanges();
  }

  prepareRouteAnimation(outlet: RouterOutlet) {
    //console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  prepareRouteDepth(outlet: RouterOutlet) {
    //console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.depth;
  }
  prepareRouteFade(outlet: RouterOutlet) {
    //console.log(outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation)
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.fade;
  }

}