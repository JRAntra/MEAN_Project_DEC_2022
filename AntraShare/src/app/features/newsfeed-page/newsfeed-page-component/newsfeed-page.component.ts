import { Component, OnInit } from '@angular/core';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { GetAllNewsService } from 'app/features/newsfeed-page/newsfeed-page-component/news.service';
import { News } from '../../../shared/models/news.model';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.scss'],
})
export class NewsfeedPageComponent implements OnInit {
  commentList: String[] = [];
  newComment: String = '';
  heart = faHeart;
  comment = faComment;
  arrow = faShareSquare;
  tag = faTag;
  viewMore = false;
  viewComments = false;

  news: News[] = [];
  errorMessage: string = '';
  new: undefined | News;

  constructor(private newsService: GetAllNewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response) => {
        this.news = response;
      }
    );
  }

}
