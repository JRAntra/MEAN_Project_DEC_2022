import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit{
  newsList?:News[];
  constructor(private news_service:NewsFeedService){
  }
  ngOnInit(): void {
    this.news_service.getNewsInfo().subscribe((news)=>{
      this.newsList=news;

    })
  }


}
