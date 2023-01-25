import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from 'app/shared/models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllNewsService {

  url = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) { }
  
  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.url);
  }
}
