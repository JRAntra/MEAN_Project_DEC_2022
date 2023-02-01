import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { postedNews, Content } from '../news';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent {
  content = new FormControl();
  userName = "A Hard Coded Name"

  constructor(private newsService: NewsFeedService) {}

  idGenerator() {
    //randomly generate a 24 digits id
    return ((Math.random()).toString(36).substring(2)+(Math.random()).toString(36).substring(2)+(Math.random()).toString(36).substring(2)).substring(0,24);
  }

  postStory(event:Event) {
    // event.preventDefault()
    // console.log(typeof(this.content.value));
    const news: postedNews = {
      publisherName: this.userName,
      content: {text: this.content.value} as Content,
      publishedTime: new Date(),
      comment: [],
      likedIdList: [],
    }
    this.newsService.postNews(news).subscribe(res => console.log(res))
  }

}
