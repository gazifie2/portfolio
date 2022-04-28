import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  backgroundWrapColor:any;
  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = 'linear-gradient(90deg, rgba(5,41,66,1) 19%, rgb(1, 65, 108) 83%, rgb(36, 63, 109) 100%)';
    //this.backgroundWrapColor = '#5210ac';
    this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);
    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string; 
    //document.body.style.transition = "all 600ms";
    //----

    //animating the picture
    var element = document.getElementsByTagName('picture')[0] as HTMLElement;
    element.style.opacity = '0';
    setTimeout(function () {
      element.style.opacity = '1';
      element.style.transition = 'opacity 1000ms ease-in';
    }, 0);
  }

}
