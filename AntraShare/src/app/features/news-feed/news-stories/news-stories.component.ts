import { Component, OnInit } from '@angular/core';
import { NewsStoriesService } from 'src/app/services/news-stories.service';
import { News, Comment } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss']
})
export class NewsStoriesComponent implements OnInit {
  
  stories: News[] = [];
  
  // todo: change fix pages, news to dynamic
  numsOfPage: number = 34;
  numsOfNews: number = 5;

  constructor(
    private newsService: NewsStoriesService,

  ) { }

  ngOnInit(): void {

    // this.receiveNews();
    this.receiveAllNews();
  }


// to do: modify numbers of page, number of news per page
  receiveNews(): void {
    this.newsService.getNews(this.numsOfPage,this.numsOfNews)
      .subscribe(Response => {
        this.stories = Response;
        
      })
  }

  receiveAllNews(): void {
    this.newsService.getAllNews()
      .subscribe(Response => {
        this.stories = Response;
        
      })
  }


  onLike(){
    console.log("Liked!")
  }

}
