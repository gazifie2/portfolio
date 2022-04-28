import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  backgroundWrapColor: any;
  googleEarthUrl = 'https://earth.google.com/web/search/tunis/@34.09121331,10.13512431,373.71966298a,1524904.41449583d,35y,-0.00003517h,0.43685558t,0r/data=CnAaRhJACiUweDEyZmQzMzdmNWU3ZWY1NDM6MHhkNjcxOTI0ZTcxNGEwMjc1GXAyuzg7Z0JAIZBhurXxXCRAKgV0dW5pcxgCIAEiJgokCQo4D-D7TkFAEamLHT2us0BAGfaDbgnjXCJAIXgP-N368h1A?utm_source=referral&utm_campaign=earthview&utm_term=gallery';
  age: any

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = 'yellow';
    this.uiService.setWrapColor(this.backgroundWrapColor);
    
    this.age = this.calculateAge("04/03/1992", new Date);

    //console.log( (document.getElementById("navBar") as HTMLElement).getElementsByTagName("ul")[0] );
    //(document.getElementById("navBar") as HTMLElement).getElementsByTagName("ul")[0].style.color='#000 !important';
  }

  calculateAge(birthDate: any, otherDate: any) {
    //MM/DD/YYYY
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    if (otherDate.getMonth() < birthDate.getMonth() ||
      otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
      years--;
    }

    return years;
  }

}
