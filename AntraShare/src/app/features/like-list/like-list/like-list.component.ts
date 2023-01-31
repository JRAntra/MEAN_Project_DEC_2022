import { Component, OnInit } from '@angular/core';
import { News } from 'app/shared/models/news.model';
import { Post } from 'app/shared/models/post.model';
import { Observable } from 'rxjs';
import { LikedPostService } from '../services/liked-post.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss'],
})
export class LikeListComponent implements OnInit {
  longText: string =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  // trimmed: boolean = false;
  tooLong: boolean = false;
  output: string = "";
  likedPosts$: Observable<Post[]>;

  constructor(private likeService: LikedPostService) {
    this.likedPosts$ = this.likeService.posts$;
  }

  ngOnInit(): void {
  }

  showMore(content: HTMLParagraphElement): void{
    console.log(content);
    this.tooLong = false;
  }

  removeLike(news: Post){
    if (news._id) {
      this.likeService.removeLikedPost(news._id);
    }
    else {
      console.log("Not valid post.");
    }
  }

}
