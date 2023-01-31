import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { News, PostNews } from 'src/app/shared/models/news';
import { NewsStoriesService } from './services/news-stories.service';
import { first } from 'rxjs/operators';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit{

  isHidden = false; // 5 sec countdown
  
  item: News[] = [];
  showLikedList = false;
  newStory: FormGroup = this.fb.group({})
  userName = localStorage.getItem('userName');

  constructor(
    private newsService: NewsStoriesService,
    private sharedService: SharedService,
    private fb: FormBuilder
  )
  {}
  ngOnInit(): void {
    this.hideDiv();

    this.newStory = this.fb.group({
      publisherName: ["upoiu"],
      content: ['']
    })
  }

  // onPost(news: News){
  onPost(): void{    
    console.log("Submitted!")  //  not implemented yet
    
    const pulisherName = this.userName? this.userName: '' ;
    const content = this.newStory.get('content')?.value;
    this.newStory.setValue({
      publisherName: pulisherName,
      content: {
        text: content,
      },
    })

    const post: PostNews = {
      publisherName: pulisherName,
      content: {
        text: content,
      },
      publishedTime: new Date(),
    }

    console.log(post);

    this.newsService.postNews(post)
    .pipe(first())
    .subscribe(val => {
      console.log(val);
      
    })
    
  }

  hideDiv(){
    setTimeout(() => {
      console.log("Hidden");
      this.isHidden = true;
      
    }, 5000)
  }

  addLikeList(event: News){
    this.item.push(event)
    this.sharedService.sendData.next(this.item);
    console.log(this.item)
  }
}
