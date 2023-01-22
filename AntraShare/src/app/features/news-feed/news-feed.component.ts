import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit{

  isHidden = false;
  

  ngOnInit(): void {
    console.log("Start");
    
    this.hideDiv();
  }

  onSubmit(){
    console.log("Submitted!")
  }

  hideDiv(){
    setTimeout(() => {
      console.log("Hidden");
      this.isHidden = true;
      
    }, 5000)
  }

}
