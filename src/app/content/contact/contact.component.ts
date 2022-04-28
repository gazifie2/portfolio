import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  backgroundWrapColor:any;
  constructor(
    private uiService: UiServiceService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    if (this.backgroundWrapColor == undefined){
      this.backgroundWrapColor = sessionStorage.getItem('wrapColor');
      this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);
    }
    if (sessionStorage.getItem('wrapColor') === 'null'){
    this.backgroundWrapColor = 'green';
    this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);
    }
    //this.backgroundWrapColor = 'green';
    //this.backgroundWrapColor = this.uiService.setWrapColor(this.backgroundWrapColor);
  }
  
  back() {
    this.location.back();
  }
}
