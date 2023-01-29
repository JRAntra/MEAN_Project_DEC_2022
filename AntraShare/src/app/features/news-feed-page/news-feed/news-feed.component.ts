import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { News, PostNews } from 'src/app/shared/models/news';
import { NewsStoriesService } from './services/news-stories.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit{

  isHidden = false; // 5 sec countdown
  
  item: News[] = [];
  likeList = new Set(this.item);
  showLikedList = false;
  newStory: FormGroup = this.fb.group({})
  userName = localStorage.getItem('userName');

  constructor(
    private newsService: NewsStoriesService,
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

  toggleLikeList(){
    if (this.showLikedList == false) {
      this.showLikedList = true;
    } else {
      this.showLikedList = false;
    }
    
  }


  addLikeList(event: News){
    this.likeList.add(event);
  }

  removeLikedList(event: News){
    this.likeList.delete(event);
  }

}
