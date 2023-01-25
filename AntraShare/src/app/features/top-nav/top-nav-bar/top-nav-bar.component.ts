import { Component, OnInit } from '@angular/core';
import { LikedListService } from 'app/features/newsfeed-page/likedList.service';
import { Subscription } from 'rxjs';
import { News } from '../../../shared/models/news.model';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
})
export class TopNavBarComponent implements OnInit {
  subscription!: Subscription;
  likeList: News[] = [];
  // likeList = [1, 2, 3];

  constructor(
    private likeService: LikedListService,
    private changeDetector: ChangeDetectorRef
  ) {
    // this.subscription = this.like.getBlogs().subscribe((blog) => {
    //   // if (blog) {
    //   //   this.likeList.push(blog);
    //   //   console.log(this.likeList);
    //   // }
    // });
  }

  ngOnInit(): void {
    this.subscription = this.likeService.getBlogs().subscribe((list) => {
      this.likeList = list;
      this.changeDetector.detectChanges();
      console.log(this.likeList);
      console.log(typeof this.likeList);
    });
  }
}