import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UiServiceService } from '../services/ui-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isCollapsed:boolean = false;
  navBarColor:any;
  elemPosition: any;
  SwitchNabBarColor: boolean = false;
  constructor(private uiService: UiServiceService, private cd: ChangeDetectorRef) { }

  ngDoCheck():void {
    //if (window.location.href.split('/')[window.location.href.split('/').length-1] =='about'){
    if (sessionStorage.getItem('wrapColor') == 'yellow'){
      this.SwitchNabBarColor = true;
    } else {
      this.SwitchNabBarColor = false;
    }
  }
  ngOnInit():void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngAfterViewChecked():void {
    this.navBarColor = this.uiService.colorGen();
    this.cd.detectChanges();

  }

  setColor(){
    let myClasses = {
      activeSwitchColor: this.SwitchNabBarColor == true,
      notactiveSwitchColor: this.SwitchNabBarColor == false,
    }
    return myClasses;
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  BtnCollapseCss(){
    let myClasses = {
      activeCollapse: this.isCollapsed == false,
      notactiveCollapse: this.isCollapsed == true,
    }
    return myClasses;
  }


  scroll = (event: any): void => {

    //scrollingElement was working, somehow stopped working after outlet annimation. lol
    //this.elemPosition = this.elemPosition != undefined||0 ? document.scrollingElement?.scrollTop : 0;
    this.elemPosition = this.elemPosition != undefined||0 ? document.body.scrollTop : 0;

    //console.log(document.scrollingElement?.scrollTop);
    
    //BackToTop button
    if(this.elemPosition > 130) {

      if(document.getElementById("scrollTopBtn")?.classList.contains('hidden')){
        document.getElementById("scrollTopBtn")?.classList.remove('hidden');
        document.getElementById("scrollTopBtn")?.classList.add('showScrollTopBtn');
      }
    }
    else if (this.elemPosition < 90) {
      document.getElementById("scrollTopBtn")?.classList.remove('showScrollTopBtn');
      document.getElementById("scrollTopBtn")?.classList.add('hidden');
    }

    //////

    var colorSwitchArrow = sessionStorage.getItem('switch-arrow-color');
    var colorSwitchBurger = sessionStorage.getItem('switch-burger-color');
    //console.log(colorSwitchArrow);
    if (colorSwitchArrow == 'true') {
      (document.getElementById('scrollTopBtn')as HTMLElement).classList.add('light-color-arrow');
    } else {
      (document.getElementById('scrollTopBtn')as HTMLElement).classList.remove('light-color-arrow');
    }
    if (colorSwitchBurger == 'true') {
      (document.getElementById('mob-nav-btn')as HTMLElement).classList.add('light-color-burger');
    } else {
      (document.getElementById('mob-nav-btn')as HTMLElement).classList.remove('light-color-burger');
    }
  };

  scrollTop(el: any) {
    el.scrollIntoView({behavior: "smooth"});
  }

}
