import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  color:any;
  constructor() { }

  //---------------------------------- Setting background color for every root ------------------------------------//
  setWrapColor(color:any){
    this.color = color;
    sessionStorage.setItem('wrapColor', color);
  }

  colorGen():any{
    return this.color;
  }

  //--------------------------------- For video content -------------------------------------//

  YTembedVideos(id:string, source:string){
    //document.cookie = "SameSite=None; Secure";
    return environment.YTembed+id+"?enablejsapi=1&origin="+source;
  }
  GDembedVideos(id:string){
    return environment.GDembed+id+"/preview";
  }


  //--------------------------------- UI elements -------------------------------------//

  // for scroll events
  scroll = (event: any): void => {
    var scrollHeight = document.body.scrollTop;
    var section2 = (document.getElementById('section2') as HTMLElement)?.offsetTop;

    // to compensate for hamburger menu icon
    var threshold: number;
    if (document.body.offsetWidth > 700)
      threshold = section2 - 10;
    else
      threshold = section2 - 18;

    if (scrollHeight > threshold) { // the start of section2 - 10 px of the margin of the back-to-top-btn
      sessionStorage.setItem('switch-arrow-color', 'true');
    }
    else {
      sessionStorage.removeItem('switch-arrow-color');
    }

    if (scrollHeight > section2 + 25) { // the start of section2 + 25 px of the margin buttom
      sessionStorage.setItem('switch-burger-color', 'true');
    }
    else {
      sessionStorage.removeItem('switch-burger-color');
    }

    //animating header text
    var headerText = document.querySelector('.header-pic-text') as HTMLElement;
    if (headerText) {
      headerText.style.top = 50 + scrollHeight * 0.08 + '%';
    }

    var scroll_down_arrow = document.querySelectorAll('.arrow-down');
    scroll_down_arrow.forEach(element => {
      this.annimateElement_inView(element, 'shadow-annimation-arrow-down');
    });
    
  };

  isInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  annimateElement_inView(element:any, className:string='') {
    this.isInViewport(element)?element.classList.add(className)  : element.classList.remove(className) ;
  }

  // Annimating UI elements for Photos projects
  UIelementsAnnimation(){
    setTimeout(() => {
      // annimate first scroll down arrow
      var scroll_down_arrow = document.querySelector('.scroll-down-arrow-wrap') as HTMLElement;
      this.annimateElement_inView(scroll_down_arrow, 'scroll-arrow-annimation');
    }, 600);
  }

  //---

  // ----- Animating text on scroll

  IntersectSetup() {
    const options = {
        rootMargin: '5% 0px 5% 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {          

            if(entry.isIntersecting) {
                entry.target.classList.add('show');   
                observer.unobserve(entry.target);
            } else {
              entry.target.classList.remove('show');
              return;
            }
        })
    }, options);

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));

    const imgs = document.querySelectorAll('.small-preview');
    imgs.forEach(img => observer.observe(img));
    
}
//----
  
}
