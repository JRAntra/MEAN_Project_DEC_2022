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
    {publisherName: "Louvel Sauvageon", publishedTime: "07/14/1789", content: {text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}},
    {publisherName: "John Doe", publishedTime: "01/23/2023", content: {text: "01234567890123456789"}},
    {publisherName: "Octavius Corvinus", publishedTime: "05/29/1453", content: {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}},
  ]
  a = [1,2] 
  Content = "content: 0123456789abcdefg"
}
