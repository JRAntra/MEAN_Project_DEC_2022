import { Component, OnInit } from '@angular/core';
import { FirstFewCharsPipe } from 'app/shared/pipes/first-few-chars.pipe';


@Component({
  selector: 'app-like-list',
  templateUrl: './like-list.component.html',
  styleUrls: ['./like-list.component.scss'],
  providers: [FirstFewCharsPipe]
})
export class LikeListComponent implements OnInit {
  longText: string =
    'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';
  // trimmed: boolean = false;
  tooLong: boolean = this.longText.length > 20;
  output: string = "";

  constructor(private trim: FirstFewCharsPipe) { }

  ngOnInit(): void {
    this.output = this.trim.transform(this.longText);
  }

  showMore(): void{
    console.log(this.longText);
    this.output = this.longText;
    this.tooLong = false;
  }

}
