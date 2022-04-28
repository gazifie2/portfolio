import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';

declare var particlesJS: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent implements OnInit {
  backgroundWrapColor: any;
  Xcoord: number = 0;
  Ycoord: number = 0;

  constructor(private uiService: UiServiceService) { }

  ngOnInit(): void {
    this.backgroundWrapColor = 'linear-gradient(90deg, rgba(5,41,66,1) 19%, rgb(1, 65, 108) 83%, rgb(36, 63, 109) 100%)';
    //this.backgroundWrapColor = '#5210ac';
    this.uiService.setWrapColor(this.backgroundWrapColor);
    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";
    //----


    // ----------Intro------
    
    // ----------/Intro------

    //animating the picture
    var element = document.getElementsByClassName('card')[0] as HTMLElement;
    if (element) {
      element.style.opacity = '0';
      setTimeout(function () {
        element.style.opacity = '1';
        element.style.transition = 'opacity 1000ms 5s ease-in';
      }, 0);
    }
    var intro = document.getElementById('intro') as HTMLElement;
    var background = document.getElementById('bachground-container') as HTMLElement;
    var titleBlock = document.getElementsByClassName('titleBlock')[0] as HTMLElement;
    var title = document.getElementsByClassName('title')[0] as HTMLElement;
    var titleSurroundsUp = document.getElementsByClassName('titleSurrounds-up')[0] as HTMLElement;
    var titleSurroundsDown = document.getElementsByClassName('titleSurrounds-down') as any;
    var actionBtn = document.getElementsByClassName('action-btn')[0] as HTMLElement;
    var learnMore = document.getElementsByClassName('learn-more')[0] as HTMLElement;
    var BluredSideText = document.getElementsByClassName('blured-side-text')[0] as HTMLElement;

    if (intro) {
      var depth = sessionStorage.getItem('depth');
      // if (depth == 'true') intro.style.display = 'none';
      
      setTimeout(function () {
        intro.style.display = 'none';
      }, 5500);
    }
    if (titleBlock) {
      titleBlock.style.opacity = '0';
      setTimeout(function () {
        titleBlock.style.opacity = '1';
        titleBlock.style.transition = 'opacity 1000ms ease-in-out';
      }, 0);
    }

    if (title) {
      title.style.marginLeft = '0';
      setTimeout(function () {
        title.style.marginLeft = '3vw';
        title.style.transition = 'margin-left 700ms 4.5s ease-in';
      }, 0);
    }
    if (titleSurroundsUp) {
      setTimeout(function () {
        titleSurroundsUp.style.marginLeft = '3vw';
        titleSurroundsUp.style.transition = 'margin-left 500ms 4.5s ease-in-out';
      }, 0);
    }
    if (titleSurroundsDown) {
      [...titleSurroundsDown].forEach(element => {
        element.style.opacity = '0';
        element.style.marginLeft = '2vw';
        setTimeout(function () {
          element.style.marginLeft = '4vw';
          element.style.opacity = '1';
          element.style.transition = 'margin-left 800ms 4600ms ease-in-out, opacity 800ms 4700ms ease-in-out';
        }, 0);
      });
    }

    if (actionBtn) {
      actionBtn.style.opacity = '0';
      setTimeout(function () {
        actionBtn.style.marginLeft = '4vw';
        actionBtn.style.opacity = '1';
        // actionBtn.style.transition = 'margin-left 1000ms 300ms ease-in-out, opacity 1000ms 300ms ease-in-out';
      }, 0);
    }
    if (learnMore) {
      learnMore.style.opacity = '0';
      setTimeout(function () {
        learnMore.style.marginLeft = '4vw';
        learnMore.style.opacity = '1';
        //learnMore.style.transition = 'margin-left 1000ms 500ms ease-in-out, opacity 1000ms 500ms ease-in-out';
      }, 0);
    }
    if (BluredSideText) {
      BluredSideText.style.opacity = '0';
      setTimeout(function () {
        BluredSideText.style.opacity = '0.1';
        //BluredSideText.style.transition = 'opacity 1000ms 500ms ease-in-out';
      }, 0);
    }

    if (background) {
      //background.style.opacity = '0';
      setTimeout(function () {
        background.style.opacity = '0.5';
        background.style.transition = 'opacity 1000ms ease-in-out';
      }, 10);
    }

    this.Xcoord = 0;
    this.Ycoord = 0;

    document.body.style.setProperty('--XcoordTitle', 0 + '%');
    document.body.style.setProperty('--YcoordTitle', 0 + '%');
    document.body.style.setProperty('--XcoordTitleDeg', 0 + 'deg');
    document.body.style.setProperty('--YcoordTitleDeg', 0 + 'deg');

    // get mouse position
    window.addEventListener('mousemove', this.mouseMove, true);    
    
  }

  ngAfterViewInit(){
    particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
      // console.log('particles.js is working');
    });
  }

  ngOnDestroy():void {
    window.removeEventListener('mousemove', this.mouseMove, true);
    sessionStorage.setItem('depth', 'true')
  }
 

  mouseMove = (event: any): void => {
    var card = document.getElementsByClassName('card')[0] as HTMLElement;
    // var titleBlock = document.getElementsByClassName('titleBlock')[0] as HTMLElement;

    if (card && document.body.offsetWidth > 700) {
      this.Xcoord = (event.pageX - (card.offsetLeft + card.offsetWidth / 2)) * 0.01;
      this.Ycoord = (event.pageY - (card.offsetTop + card.offsetHeight / 2)) * 0.01;

      // document.body.style.setProperty('--Xcoord', (-this.Xcoord).toString() + '%');
      // document.body.style.setProperty('--Ycoord', (-this.Ycoord).toString() + '%');
      // document.body.style.setProperty('--XcoordDeg', (-this.Xcoord).toString() + 'deg');
      // document.body.style.setProperty('--YcoordDeg', (-this.Ycoord).toString() + 'deg');

      document.body.style.setProperty('--XcoordTitle', (-this.Xcoord * 0.1).toString() + '%');
      document.body.style.setProperty('--YcoordTitle', (-this.Ycoord * 0.3).toString() + '%');
      document.body.style.setProperty('--XcoordTitleDeg', (-this.Xcoord * 0.3).toString() + 'deg');
      document.body.style.setProperty('--YcoordTitleDeg', (-this.Ycoord * 0.3).toString() + 'deg');

      // if (document.body.offsetWidth > 700)
        card.style.transform = 'translate(' + (-50 - this.Xcoord) + '%, ' + (8 - this.Ycoord) + '%) rotateX(' + this.Ycoord + 'deg) rotateY(' + this.Xcoord + 'deg)';
      // if (document.body.offsetWidth < 700)
      //   card.style.transform = 'translate(' + (0 - this.Xcoord) + '%, ' + (8 - this.Ycoord) + '%) rotateX(' + this.Ycoord + 'deg) rotateY(' + this.Xcoord + 'deg)';
    } else if(card && document.body.offsetWidth < 700) {
        card.style.transform = 'translate(0%, 0%) rotateX(0deg) rotateY(0deg)';
    }


  }

}
