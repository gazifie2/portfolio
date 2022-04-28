import { Component, OnInit } from '@angular/core';
import { UiServiceService } from '../services/ui-service.service';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { environment } from 'src/environments/environment';

declare var particlesJS: any;

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {

  backgroundWrapColor: any;

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
    this.backgroundWrapColor = 'rgb(159, 7, 7)';
    this.uiService.setWrapColor(this.backgroundWrapColor);
  }

  ngAfterViewInit(){
    particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
      // console.log('particles.js is working');
    });
  }
}
