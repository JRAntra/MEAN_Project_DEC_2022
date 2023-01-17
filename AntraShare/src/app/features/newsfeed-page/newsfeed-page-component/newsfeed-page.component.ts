import { Component, OnInit } from '@angular/core';
import {faHeart,faShareSquare} from '@fortawesome/free-regular-svg-icons';
import {faComment} from '@fortawesome/free-regular-svg-icons' ;
import {faTag} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.scss']
})
export class NewsfeedPageComponent implements OnInit {
  commentList: String[] = [];
  newComment : String = "";
  heart = faHeart;
  comment = faComment;
  arrow = faShareSquare;
  tag = faTag;
  viewMore = false;
  viewComments = false;

  constructor() {
    
   }

  ngOnInit(): void {
  }
  
}
