import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss']
})
export class LikeListComponent {
  isHidden = false
  @Input() hidden = true

  Content = "content: 0123456789abcdefg"
}
