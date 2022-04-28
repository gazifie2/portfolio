import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  backgroundWrapColor: any;
  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#34495e';
    this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    document.body.style.transition = "all 600ms";
    //----
  }

}
