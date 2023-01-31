import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/shared/models/news';
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent implements OnInit {
  item: News[] = [];
  showLikedList = false;
  likeList = new Set(this.item);
  sub = new Subscription();

  constructor(
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
  }

  removeLikedList(event: News){
    this.likeList.delete(event);
  }

  toggleLikeList(){
    if (this.showLikedList == false) {
      this.showLikedList = true;
    } else {
      this.showLikedList = false;
    }
  }

  ngAfterContentInit(){
    this.sub = this.sharedService.sendData.subscribe(
      data => {
        this.likeList = new Set(data)
      }
    )
  }

  ngOnDestroy(){
    if (this.sub){
      this.sub.unsubscribe()
    }
  }
}
