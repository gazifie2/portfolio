import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-ma-regie',
  templateUrl: './ma-regie.component.html',
  styleUrls: ['../coding-articles-styleSheet.scss','./ma-regie.component.scss']
})
export class MaRegieComponent implements OnInit {

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    document.body.scrollTo(0, 0);

    sessionStorage.removeItem('switch-arrow-color');
    sessionStorage.removeItem('switch-burger-color');

    this.uiService.UIelementsAnnimation();

    window.addEventListener('scroll', this.uiService.scroll, true);
    this.uiService.IntersectSetup();
  }

  ngOnDestroy() {
    sessionStorage.removeItem('SwitchNabBarColor');
    sessionStorage.removeItem('switch-arrow-color');

  }
}
