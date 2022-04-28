import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import 'img-comparison-slider';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  backgroundWrapColor: any;
  isZoom: boolean = false;

  idImg:any;
  beforeImg:string='';
  afterImg:string='';
  routeImg:string='';

  constructor(private uiService: UiServiceService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.backgroundWrapColor = '#333333';
    this.uiService.setWrapColor(this.backgroundWrapColor);

    //to fiix the background color split when animating routes
    document.body.style.backgroundColor = sessionStorage.getItem('wrapColor') as string;
    //document.body.style.transition = "all 600ms";
    //----

    //animating the zoomBtn
    var element = document.getElementById('zoomBtn') as HTMLElement;
    element.style.opacity = '0';
    setTimeout(function () {
      element.style.opacity = '1';
      element.style.transition = 'opacity 600ms';
    }, 600);

    
    let pic = new Pictures()

    this.idImg = pic.getId(this.route.snapshot.paramMap.get('id')+'.jpg');
    this.beforeImg = pic.getBefore(this.route.snapshot.paramMap.get('id')+'.jpg');
    this.afterImg = this.route.snapshot.paramMap.get('id')+'.jpg';
    this.routeImg = pic.getRoute(this.route.snapshot.paramMap.get('id')+'.jpg');

    
    console.log(this.idImg);
    console.log(this.beforeImg);
    console.log(this.afterImg);
    console.log(this.routeImg);
  }

  zoomOnClick(event?: any) {
    //console.log(event.target);
    this.isZoom = !this.isZoom;
  }
}

class Pictures {

  id:number= 0;
  before:String='';
  after:String='';
  route:String='';

  constructor() {}

  pictures = [
    {id:++this.id, before: '_MG_9955.jpg', after: '_MG_9955f.jpg'},
    {id:++this.id, before: 'IMG_0982.jpg', after: 'IMG_0982ff.jpg'},
    {id:++this.id, before: 'IMG_6966.jpg', after: 'IMG_6966f.jpg'},
    {id:++this.id, before: 'IMG_7791.jpg', after: 'IMG_7791f.jpg'},
    {id:++this.id, before: 'IMG_8831.jpg', after: 'IMG_8831f.jpg', route: 'project-silhouette'},
    {id:++this.id, before: 'IMG_8879.jpg', after: 'IMG_8879f.jpg'},
    {id:++this.id, before: 'me_vs_Red_Squirre1.jpg', after: 'me_vs_Red_Squirre2.jpg'},
  ]

  public getId(givenAfter:string):any {
    const result = this.pictures.find( ({ after }) => after === givenAfter );
    return result?.id;
  }

  public getBefore(givenAfter:string):any {
    const result = this.pictures.find( ({ after }) => after === givenAfter );
    return result?.before;
  }

  public getRoute(givenAfter:string):any {
    const result = this.pictures.find( ({ after }) => after === givenAfter );
    return result?.route;
  }
}

