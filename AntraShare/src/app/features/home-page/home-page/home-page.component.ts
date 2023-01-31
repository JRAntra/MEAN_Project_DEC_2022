import { Component, OnInit } from '@angular/core';
import { LikedPostService } from 'app/features/like-list/services/liked-post.service';
import { first, Observable } from 'rxjs';
import { NewsService } from '../services/news.service';
import { FormControl } from '@angular/forms';
import { Post } from 'app/shared/models/post.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  allNews: Post[] = [];
  posts$: Observable<Post[]>;
  postForm = new FormControl();
  userName = localStorage.getItem('userName') === null ? "currentUser" : localStorage.getItem('userName');

  constructor(private newsService: NewsService, 
    private LikeService: LikedPostService) { 
      this.posts$ = LikeService.posts$;
    }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response) => {
        this.allNews = response;
      }
    );
  }

  toggleLiked(news: Post){
    this.LikeService.addLikedPost(news);
  }

  onSubmit(textContent: string){
    console.log(textContent + this.userName);
    const post: Post = {
      publisherName: this.userName,
      content: {
        text: textContent
      },
      publishedTime: new Date()
    }
    // console.log(post);
    this.newsService.postNews(post).pipe(first()).subscribe(val => {
      console.log(val);
    })
  }

}
