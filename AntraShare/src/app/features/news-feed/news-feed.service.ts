import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {News} from './news'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {
  private baseurl='http://localhost:4231';
  private newspath='api/news';

  constructor(private http:HttpClient) { }
  getNewsInfo():Observable<News[]>{
    const url=[this.baseurl,this.newspath].join('/');
    return this.http.get<News[]>(url);
  }
}
