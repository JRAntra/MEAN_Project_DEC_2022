import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { News } from 'app/shared/models/news.model';
import { Post } from 'app/shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class LikedPostService {
  private _post$ = new BehaviorSubject<Post[]>([]);
  readonly posts$ = this._post$.asObservable();

  private likedPosts: Post[] = [];
  private id = '0';
  constructor() { }

  addLikedPost(post: Post){
    // this.id = post._id;
    this.likedPosts.push(post);
    this._post$.next(Object.assign([], this.likedPosts));
  }

  removeLikedPost(postId: string){
    this.likedPosts.forEach((post, idx) => {
        if(post._id === postId) {
          this.likedPosts.splice(idx, 1);
        }
        this._post$.next(Object.assign([], this.likedPosts));
    })
  }
}
