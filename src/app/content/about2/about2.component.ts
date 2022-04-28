import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.scss']
})
export class About2Component implements OnInit {

  backgroundWrapColor: any;
  // googleEarthUrl = 'https://earth.google.com/web/search/tunis/@34.09121331,10.13512431,373.71966298a,1524904.41449583d,35y,-0.00003517h,0.43685558t,0r/data=CnAaRhJACiUweDEyZmQzMzdmNWU3ZWY1NDM6MHhkNjcxOTI0ZTcxNGEwMjc1GXAyuzg7Z0JAIZBhurXxXCRAKgV0dW5pcxgCIAEiJgokCQo4D-D7TkFAEamLHT2us0BAGfaDbgnjXCJAIXgP-N368h1A?utm_source=referral&utm_campaign=earthview&utm_term=gallery';
  googleEarthUrl = 'https://www.google.com/maps/place/Tunis/@34.3379146,8.2077856,6.58z/data=!4m5!3m4!1s0x12fd337f5e7ef543:0xd671924e714a0275!8m2!3d36.8064948!4d10.1815316';
  age: any
  workAge: any
  
  fa_linkedIn = faLinkedinIn;
  fa_instagram = faInstagram;
  fa_facebook = faFacebookF;
  fa_envelope = faEnvelope;

  email = environment.email;
  linkedIn = environment.linkedIn;
  instagram = environment.instagram;
  facebook = environment.facebook;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = 'yellow';
    this.uiService.setWrapColor(this.backgroundWrapColor);
    
    this.age = this.calculateAge("01/01/2009", new Date); //MM/DD/YYYY
    this.workAge = this.calculateAge("10/01/2018", new Date); //MM/DD/YYYY

    //console.log( (document.getElementById("navBar") as HTMLElement).getElementsByTagName("ul")[0] );
    //(document.getElementById("navBar") as HTMLElement).getElementsByTagName("ul")[0].style.color='#000 !important';


    this.setup();
    
  }

  setup() {
    const options = {
        // rootMargin: '-30% 0px -10% 0px'
        rootMargin: '-10% 0px -5% 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if(entry.isIntersecting) {
                entry.target.classList.add('show');   
                     
                // observer.unobserve(entry.target);
                var elemId = (entries[0].target.parentElement as HTMLElement).id;
                var value = (entries[0].target.parentElement as HTMLElement).getAttribute('value');
                if (elemId) {                  
                  var indexes = document.querySelectorAll('.index');                  
                  indexes.forEach(ind => {
                    ind.classList.remove('selected');                    
                  });
                  document.getElementById(<string>value)?.classList.add('selected');
                }
            } else {
              entry.target.classList.remove('show');
              return;
            }
        })
    }, options);

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));
}

  calculateAge(birthDate: any, otherDate: any): number {
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

  ngOnDestroy(): void {
    var el = document.querySelector('.bg-title-tr') as HTMLElement;
    if (el) el.classList.add('fadeOutOpac');

    sessionStorage.setItem('depth', 'true');
  }

  showInScreen(value:any) {
    document.getElementById(value)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});    
  }



}
