import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News, Comment } from 'src/app/shared/models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsStoriesService {
  apiUrl = 'http://localhost:4231';

  constructor(private http: HttpClient) { }


  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/api/news/`);
  }

  getNews(page: number, perpage: number): Observable<News[]> {
    return this.http.get<News[]>(`${this.apiUrl}/api/news/` + page + '/' + perpage);
  }

  getNewsFromId(id: string) {
    return this.http.get(`${this.apiUrl}/api/news/` + id);
  }

  postNews(story: News) {
    return this.http.post(`${this.apiUrl}/api/news/`, story);
  }

  patchComment(id: string, comment: Comment) {
    return this.http.patch(`${this.apiUrl}/api/news/addComment/` + id, comment);
  }

  deleteNews(story: News, id: string){
    return this.http.delete(`${this.apiUrl}/api/news/deletePost/` + id);
  }

  deleteComment(story: News, postId: string, commentId: string){
    return this.http.delete(`${this.apiUrl}/api/news/deleteComment/` + postId + '/' + commentId);
  }



  
}
