import { Component, OnInit } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';
import { News } from '../news';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit{
  newsList?:News[]
  constructor(private news_service:NewsFeedService){}
  ngOnInit(){
    //console.log(123555555);
    this.news_service.getNewsinfo().subscribe((news:News[])=>{
      console.log(news);
      this.newsList=news;
    })

    
    

  }
  



}
