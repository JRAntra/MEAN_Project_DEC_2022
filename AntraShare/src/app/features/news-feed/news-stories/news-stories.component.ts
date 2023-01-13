import { Component, OnInit } from '@angular/core';
import { First20CharsPipe } from 'src/app/pipes/first20-chars.pipe';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss']
})
export class NewsStoriesComponent implements OnInit {
  storyContent: string[] = [
    "When a chatbot called ChatGPT hit the internet late last year, executives at a number of Silicon Valley companies worried they were suddenly dealing with new artificial intelligence technology that could disrupt their businesses.But at Microsoft, it was a cause for celebration. For several years, Satya Nadella, Microsoft’s chief executive, had been putting the pieces in place for this moment.",
    "In 2019, Microsoft invested $1 billion in OpenAI, the tiny San Francisco company that designed ChatGPT. And in the years since, it has quietly invested another $2 billion, according to two people familiar with the investment who requested anonymity because they were not authorized to speak with the media. The $3 billion paid for the huge amounts of computing power that OpenAI needed to build the chatbot. And it meant that Microsoft could rapidly build and deploy new products based on the technology.",
]

  constructor() { }

  ngOnInit(): void {
  }


}
