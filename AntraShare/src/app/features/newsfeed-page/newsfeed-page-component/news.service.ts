import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News, Comment } from 'app/shared/models/news.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllNewsService {
  apiUrl = 'http://localhost:4231/api/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
  patchComment(id: number, comment: Comment): Observable<any> {
    return this.http.patch(`${this.apiUrl}/api/news/addComment/` + id, comment);
  }
  getSingleNews(page: number, perpage: number): Observable<News[]> {
    return this.http.get<News[]>(
      `${this.apiUrl}/api/news/` + page + '/' + perpage
    );
  }
  getNewsFromId(id: string) {
    return this.http.get(`${this.apiUrl}/api/news/` + id);
  }

  postNews(story: News) {
    return this.http.post(`${this.apiUrl}/api/news/`, story);
  }

  deleteNews(story: News, id: string) {
    return this.http.delete(`${this.apiUrl}/api/news/deletePost/` + id);
  }

  deleteComment(story: News, postId: string, commentId: string) {
    return this.http.delete(
      `${this.apiUrl}/api/news/deleteComment/` + postId + '/' + commentId
    );
  }
}
