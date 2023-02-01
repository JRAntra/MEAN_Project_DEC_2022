import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikelistSubscriptionService {
  updateLikelist = new Subject<any> ()

  constructor() { }
}
