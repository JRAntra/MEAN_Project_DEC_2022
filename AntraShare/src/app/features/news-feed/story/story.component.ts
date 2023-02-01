import { Component, OnInit } from '@angular/core';
import { LikelistSubscriptionService } from 'src/app/shared/components/like-list/services/likelist-subscription.service';
import { News } from '../news';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit{
  newsList?:News[];
  // need to be changed after implementing user login
  currentUser = {userId
      : 
      "6240fd4fe3aa9b31f24002bf",
      _id
      : 
      "62597ce9332c15df143459f9"}
  likedList: News[] = []
  constructor(private news_service:NewsFeedService, private likelist_service: LikelistSubscriptionService){
  }
  ngOnInit(): void {
    this.news_service.getNewsInfo().subscribe((news)=>{
      this.newsList=news;
      // console.log(this.newsList);
      this.newsList.forEach(post => {
        if (post.likedIdList.filter(user => user._id === this.currentUser._id).length !== 0) {
          post.liked = "red"
        this.likedList.push(post)
        this.likelist_service.updateLikelist.next(this.likedList)
      }
      })
      
    })
  }

  likes(news:News) {
    // console.log(news);
    if (!news.liked) {
      news.liked = "red"
      news.likedIdList.push(this.currentUser)
      this.likedList.push(news)
  }
    else { 
      news.liked = null
      news.likedIdList = news.likedIdList.filter(user => user._id !== this.currentUser._id)
      this.likedList = this.likedList.filter(post => post._id !== news._id)
    }
    console.log(this.likedList);
    this.likelist_service.updateLikelist.next(this.likedList)
    
  }


}
