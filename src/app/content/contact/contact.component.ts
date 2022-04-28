import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { faInstagram, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  backgroundWrapColor:any;

  fa_linkedIn = faLinkedinIn;
  fa_instagram = faInstagram;
  fa_facebook = faFacebookF;

  email = environment.email;
  linkedIn = environment.linkedIn;
  instagram = environment.instagram;
  facebook = environment.facebook;
  
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
