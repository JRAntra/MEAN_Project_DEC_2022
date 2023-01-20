import { Component, OnInit } from '@angular/core';
import { PopupserviceService } from 'src/app/shared/services/popupservice.service';
import { NewsFeedPipe } from './news-feed.pipe';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit{
  name:string='abcdefghijklmnopq....'
  constructor(private appservice:PopupserviceService){
  }
  ngOnInit(): void {
    //this.appservice.currentPopUpService.subscribe(val=>{this.name=val})
    //console.log(this.appservice.currentPopUpService)
    console.log(this.name)
  }
  

}
