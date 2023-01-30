import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from 'app/shared/models/news.model';
import { Observable } from 'rxjs';
import { Post } from 'app/shared/models/post.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }
  
  getNews(): Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  postNews(news: Post){
    return this.http.post(this.url, news);
  }
}
