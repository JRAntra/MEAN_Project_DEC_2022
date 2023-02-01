import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikelistSubscriptionService } from './services/likelist-subscription.service';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent {
  @Input() hidden = true

  constructor(private likelistService: LikelistSubscriptionService) {}

  subList = new Subscription()

  ngAfterContentInit() {
    this.subList = this.likelistService.updateLikelist.subscribe(
      list => {
        console.log("likelist", list[0]);
        
        this.likeList = list
      }
    )
  }

  ngOnDestroy() {
    this.subList.unsubscribe()
  }

  likeList = [
    {publisherName: "", publishedTime: "", content: {text: ""}}
  ]
}
