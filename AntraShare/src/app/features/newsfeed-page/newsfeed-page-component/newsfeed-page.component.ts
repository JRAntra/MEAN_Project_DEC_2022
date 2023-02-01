import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { GetAllNewsService } from 'app/features/newsfeed-page/newsfeed-page-component/news.service';
import { Subscription } from 'rxjs';
import { News } from '../../../shared/models/news.model';
import { LikedListService } from '../likedList.service';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.scss'],
})
export class NewsfeedPageComponent implements OnInit {
  commentList: String[] = [];
  newComment: String = '';
  heart = faHeart;
  viewMore = false;
  viewComments = false;
  errorMessage: string = '';
  new: undefined | News;
  toggle = true;
  subscription!: Subscription;
  news: any[] = [];
  newsList: Array<News> = [];
  likeList: Array<News> = [];
  constructor(
    private newsService: GetAllNewsService,
    private likeService: LikedListService // private like: LikedListService
  ) {
    // this.subscription = this.like.getBlogs().subscribe((blog) => {
    //   if (blog) {
    //     this.likeList.push(blog);
    //     console.log(this.likeList);
    //   } else {
    //     this.likeList = [];
    //   }
    // });
  }

  ngOnInit(): void {
    this.newsService
      .getNews()
      .pipe()
      .subscribe(
        (response) => {
          console.log('Response received.');
          this.news = response;
        },
        (error) => {
          console.error('Request failed.'), (this.errorMessage = error);
        }
      );
  }

  onItemClick(news: News) {
    // this.toggle = !this.toggle;
    if (this.likeService.checkExist(news)) {
      this.likeService.removeExist(news);
    } else {
      this.likeService.addNew(news);
    }
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
