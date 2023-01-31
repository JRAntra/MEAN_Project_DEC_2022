import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewsStoriesService } from '../services/news-stories.service';
import { News, Comment } from 'src/app/shared/models/news';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.scss']
})
export class NewsStoriesComponent implements OnInit {
  
  @Output() newLikeList = new EventEmitter<News>();

  stories: News[] = [];
  showCommentArea = false;
  displayNewComment = false;
  commentAreaForm:FormGroup = new FormGroup({});
  userName =localStorage.getItem('userName');

  
  // todo: change fix pages, news to dynamic
  // reverse the order of the storys
  numsOfPage: number = 34;
  numsOfNews: number = 5;

  constructor(
    private newsService: NewsStoriesService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.commentAreaForm = this.fb.group({
      imageUrl: '',
      image : '',
      videoUrl: '',
      video: '',
      textUrl: '',
      text: '',
      _id: ''
    })

    // this.receiveNews();
    this.receiveAllNews();
  }

// to do: Infinite page: modify numbers of page, number of news per page?
// consider renaming function names
// return type for function
  receiveNews(): void {
    this.newsService.getNews(this.numsOfPage,this.numsOfNews)
      .subscribe(Response => {
        this.stories = Response;
        this.stories.reverse();

      })
  }

  receiveAllNews(): void {
    this.newsService.getAllNews()
      .subscribe(Response => {
        this.stories = Response;
        this.stories.reverse();
      })
  }

  onComment(news: News){
    if (this.showCommentArea === true){
      this.showCommentArea = false;
    } else {
      this.showCommentArea = true
    }
    
  }

  onSubmitComment(news: News){
    const text = this.commentAreaForm.get('text')?.value;

    // TODO: Users should be able to submit image and video
    this.commentAreaForm.setValue({
      imageUrl: '',
      image : '',
      videoUrl: '',
      video: '',
      textUrl: '',
      text: text,
      _id: ''
    });

    const comment: Comment = {
      publisherName: this.userName? this.userName: '' ,
      content: this.commentAreaForm.value,
      publishedTime: new Date(),
      _id: '',
    }

    console.log('I commented:' + text)

    this.newsService.patchComment(news._id, comment)
    .subscribe(response => {
      console.log(response)
      console.log('comment successfully submitted')
    })

    news.comment?.push(comment)
  }

  onLike(news: News){
    console.log("I like :" + news._id )
    this.newLikeList.emit(news);
  }

  // getLikeCount
  getCount(ids: string[]){
    return ids.length
  }
}
