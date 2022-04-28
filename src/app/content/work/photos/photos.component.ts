import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import 'img-comparison-slider';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['../../../Articles/work/photos/photos-articles-styleSheet.scss','./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  backgroundWrapColor: any;
  id: any;

  constructor(private uiService: UiServiceService, private location:Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#333333';
    this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";
    //----

    document.body.scrollTo(0, 0);

    // annimating back btn
    // var element2 = document.getElementsByClassName('top-control-container')[0] as HTMLElement;
    // element2.style.opacity = '0';
    // setTimeout(function () {
    //   element2.style.opacity = '1';
    //   element2.style.transition = 'opacity 600ms';
    // }, 600);

    // to scroll to fragment position
    this.route.fragment.subscribe((fragment:any) => {
      this.scrollToAnchor(fragment);
    });


    //to remove fragment from url
    setTimeout(() => {
      this.location.replaceState(this.location.path());
    }, 0);
  }

  public scrollToAnchor(location: any, wait = 0): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        document.body.scrollTo(0, (element as HTMLElement).offsetTop)
      }, wait);
    }
  }
    
}
