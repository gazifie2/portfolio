import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-project-turkish-lights',
  templateUrl: './project-turkish-lights.component.html',
  styleUrls: ['./project-turkish-lights.component.scss']
  //styleUrls: ['../project-silhouette/project-silhouette.component.scss']
})
export class ProjectTurkishLightsComponent implements OnInit {

  backgroundWrapColor: any;
  isZoom: boolean = false;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('switch-arrow-color');
    sessionStorage.removeItem('switch-burger-color');
    this.backgroundWrapColor = '#333333';
    this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";
    //----

    document.body.scrollTo(0, 0);
    //animating the zoomBtn
    var element = document.getElementById('zoomBtn') as HTMLElement;
    element.style.opacity = '0';
    setTimeout(function () {
      element.style.opacity = '1';
      element.style.transition = 'opacity 600ms';
    }, 600);
    //animating the top-control-container
    var element2 = document.getElementsByClassName('top-control-container')[0] as HTMLElement;
    element2.style.opacity = '0';
    setTimeout(function () {
      element2.style.opacity = '1';
      element2.style.transition = 'opacity 600ms';
    }, 600);

    window.addEventListener('scroll', this.scroll, true);
    
  }

  scroll = (event: any): void => {
    var scrollHeight = document.body.scrollTop;
    var section2 = (document.getElementById('section2') as HTMLElement)?.offsetTop;
    
    // to compensate for hamburger menu icon
    var threshold: number;
    if (document.body.offsetWidth > 700)
      threshold = section2 - 70;
    else
      threshold = section2 - 78;

    if (scrollHeight  > threshold ) { // the start of section2 - 70 px of the margin of the back-to-top-btn
      sessionStorage.setItem('switch-arrow-color', 'true');
    }
    else {
      sessionStorage.removeItem('switch-arrow-color');
    }

    if (scrollHeight  > section2 - 35) { // the start of section2 - 35 px of the margin buttom
      sessionStorage.setItem('switch-burger-color', 'true');
    }
    else {
      sessionStorage.removeItem('switch-burger-color');
    }

  };

  zoomOnClick(event?: any) {
    //console.log(event.target);
    this.isZoom = !this.isZoom;
  }

  ngOnDestroy () {
    sessionStorage.removeItem('switch-arrow-color');
  }

}
