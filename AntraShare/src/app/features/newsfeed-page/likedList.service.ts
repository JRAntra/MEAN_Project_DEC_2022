import { Injectable } from '@angular/core';
import { News } from 'app/shared/models/news.model';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LikedListService {
  likeListsubject = new Subject<News[]>();
  likeList: News[] = [];
  obj = {};
  addNew(blog: News) {
    this.likeList.push(blog);
    this.likeListsubject.next(this.likeList);
  }
  getBlogs(): Observable<any> {
    return this.likeListsubject.asObservable();
  }
  checkExist(blog: News) {
    return this.likeList.includes(blog);
  }
  removeExist(blog: News) {
    const index: number = this.likeList.indexOf(blog);
    if (index !== -1) {
      this.likeList.splice(index, 1);
    }
  }
}
