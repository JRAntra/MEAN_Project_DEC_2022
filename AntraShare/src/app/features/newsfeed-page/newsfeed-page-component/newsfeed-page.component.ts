import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { GetAllNewsService } from 'app/features/newsfeed-page/newsfeed-page-component/news.service';
import { Subscription } from 'rxjs';
import { News, Comment } from '../../../shared/models/news.model';
import { LikedListService } from '../likedList.service';
@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.scss'],
})
export class NewsfeedPageComponent implements OnInit {
  commentList: any = [];
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

  commitForm: FormGroup;
  constructor(
    private newsService: GetAllNewsService,
    private likeService: LikedListService
  ) {
    this.commitForm = new FormGroup({
      content: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
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
      console.log(this.likeService);
    } else {
      this.likeService.addNew(news);
    }
  }
  viewMoreComments(news: News) {
    this.commentList = news.comment;
    this.viewComments = !this.viewComments;
    // console.log(this.commentList);
  }
  onContent(event: any, index: string): void {
    const input = event.target.value;
    console.log(input);
    console.log(index);
  }
  onSubmitComment(index: number) {
    const com: Comment = {
      publisherName: this.commitForm.get('content')?.value,
      content: {
        imageUrl: '',
        image: '',
        videoUrl: '',
        video: '',
        textUrl: '',
        text: '',
        _id: '',
      },
      publishedTime: new Date(),
      _id: '',
    };
    this.newsService.patchComment(index, com).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
