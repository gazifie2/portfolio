import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import 'img-comparison-slider';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  backgroundWrapColor: any;
  id: any;

  constructor(private uiService: UiServiceService, private router: ActivatedRoute, private location:Location) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#333333';
    this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";
    //----

    setTimeout(() => {
      this.location.replaceState(this.location.path());
    }, 0);
  }
    
}
