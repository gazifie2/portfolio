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
    //
  }
  
  back() {
    this.location.back();
  }
}
