import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { faSearchPlus, faSearchMinus  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-turkish-lights',
  templateUrl: './project-turkish-lights.component.html',
  styleUrls: ['../photos-articles-styleSheet.scss', './project-turkish-lights.component.scss']
  //styleUrls: ['../project-silhouette/project-silhouette.component.scss']
})
export class ProjectTurkishLightsComponent implements OnInit {

  backgroundWrapColor: any;
  isZoom: boolean = false;
  fa_searchPlus = faSearchPlus;
  fa_searchMinus = faSearchMinus;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('switch-arrow-color');
    sessionStorage.removeItem('switch-burger-color');
    this.backgroundWrapColor = '#333333';
    this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";
    //----

    document.body.scrollTo(0, 0);
    
    this.uiService.UIelementsAnnimation();

    window.addEventListener('scroll', this.uiService.scroll, true);
    setTimeout(() => {
      this.uiService.IntersectSetup();
    }, 500);

  }

  zoomOnClick(event?: any) {
    //console.log(event.target);
    this.isZoom = !this.isZoom;
  }

  ngOnDestroy() {
    sessionStorage.removeItem('switch-arrow-color');
  }

}
