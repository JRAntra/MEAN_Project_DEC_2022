import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewsStoriesService } from '../services/news-stories.service';
import { News, Comment } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss']
})
export class NewsStoriesComponent implements OnInit {
  
  @Output() newLikeList = new EventEmitter<News>();

  stories: News[] = [];
  
  // todo: change fix pages, news to dynamic
  // reverse the order of the storys
  numsOfPage: number = 34;
  numsOfNews: number = 5;

  constructor(
    private newsService: NewsStoriesService,

  ) { }

  ngOnInit(): void {

    // this.receiveNews();
    this.receiveAllNews();
  }

// to do: Infinite page: modify numbers of page, number of news per page?
// consider renaming function names
// return type for function
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

  onLike(news: News){
    console.log("I like :" + news._id )
    this.newLikeList.emit(news);
  }
  // getLikeCount
  getCount(ids: string[]){
    return ids.length
  }
}
