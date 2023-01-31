import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from 'app/shared/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class LikedPostService {
  private _post$ = new BehaviorSubject<Post[]>([]);
  readonly posts$ = this._post$.asObservable();

  private likedPosts: Post[] = [];
  constructor() { }

  addLikedPost(post: Post){
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
