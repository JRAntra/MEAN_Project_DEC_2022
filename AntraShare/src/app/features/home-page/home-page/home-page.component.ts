import { Component, OnInit } from '@angular/core';
import { GetAllNewsService } from '../services/get-all-news.service';
import { News } from 'app/shared/models/news.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  allNews: News[] = [];
  
  constructor(private newsService: GetAllNewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (response) => {
        console.log(response);
        this.allNews = response;
      }
    );
  }

}
