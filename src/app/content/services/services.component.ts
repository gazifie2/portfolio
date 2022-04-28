import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  backgroundWrapColor:any;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#f86449'; // <-- this is orangy, or this --> blueish #5210ac
    this.uiService.setWrapColor(this.backgroundWrapColor);
  }

}
