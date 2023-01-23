import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit{

  isHidden = false; // 5 sec countdown
  
  item: News[] = [];
  likeList = new Set(this.item);

  showLikedList = false;


  ngOnInit(): void {
    console.log("Start");
    
    this.hideDiv();
  }

  onSubmit(){
    console.log("Submitted!")  //  not implemented yet
  }

  hideDiv(){
    setTimeout(() => {
      console.log("Hidden");
      this.isHidden = true;
      
    }, 5000)
  }

  toggleLikeList(){
    if (this.showLikedList == false) {
      this.showLikedList = true;
    } else {
      this.showLikedList = false;
    }
    
  }


  addLikeList(event: News){
    this.likeList.add(event);
  }

  removeLikedList(event: News){
    this.likeList.delete(event);
  }

}
