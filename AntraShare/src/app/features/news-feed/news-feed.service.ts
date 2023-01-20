import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';


@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private baseurl='http://localhost:4231';
  private newspath='api/news';

  constructor(private http:HttpClient) { 
       
    }
  getNewsinfo():Observable<News[]>{
      const url=[this.baseurl,this.newspath].join('/');
      return this.http.get<News[]>(url);
  }
}
