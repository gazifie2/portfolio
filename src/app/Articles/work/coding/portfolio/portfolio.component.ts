import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['../coding-articles-styleSheet.scss','./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  backgroundWrapColor:any;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    // this.backgroundWrapColor = '#ddeedd';
    // this.uiService.setWrapColor(this.backgroundWrapColor);
    
    // //to fiix the background color split when animating routes
    // document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string; 
    // //document.body.style.transition = "all 600ms";
    // //----

    sessionStorage.setItem('SwitchNabBarColor', 'true');
    
    document.body.scrollTo(0, 0);

    sessionStorage.removeItem('switch-arrow-color');
    sessionStorage.removeItem('switch-burger-color');

    this.uiService.UIelementsAnnimation();

    window.addEventListener('scroll', this.uiService.scroll, true);

    setTimeout(() => {
      this.uiService.IntersectSetup();
    }, 500);
  }

  ngOnDestroy() {
    sessionStorage.removeItem('SwitchNabBarColor');
    sessionStorage.removeItem('switch-arrow-color');

  }

}
