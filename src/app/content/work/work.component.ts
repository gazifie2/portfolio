import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  backgroundWrapColor: any;
  constructor(private uiService: UiServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#34495e';
    this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    document.body.style.transition = "all 600ms";
    //----

    document.body.scrollTo(0, 0);

    // fade in grid
    var grid = document.querySelector('.grid') as HTMLElement;
    
    var depth = sessionStorage.getItem('depth');
    if (grid) {
      if (depth == 'true') {
        grid.style.opacity = '0';
        grid.style.transition = 'opacity 1500ms ease-in';
        setTimeout (() => {
          grid.style.opacity = '1';
        },1000)
      }
    }
   
    // console.log(this.route.snapshot.data);
    
  }

  ngOnDestroy(): void {
    var el = document.querySelector('.bg-title-tr') as HTMLElement;
    if (el) el.classList.add('fadeOutOpac');

    sessionStorage.removeItem('depth');
  }

}
