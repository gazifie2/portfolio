import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ItComponent implements OnInit {

  backgroundWrapColor:any;
  isZoom: boolean = false;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#333333';
    this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);

   //to fiix the background color split when animating routes
   document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string; 
   //document.body.style.transition = "all 600ms";
   //----
  }

}
