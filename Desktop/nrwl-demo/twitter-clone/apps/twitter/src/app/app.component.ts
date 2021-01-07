import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tweet } from './models/tweet.model';
import * as TweetActions from './actions/tweets.action'


interface AppState{
  tweet:Tweet
}

@Component({
  selector: 'twitter-clone-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twitter';
  tweetPost:string = '';

  tweet$:Observable<Tweet>;

  constructor(private store:Store<AppState>){
    this.tweet$ = this.store.select('tweet')
  }

  post(){
    this.store.dispatch(new TweetActions.EditTweet(this.tweetPost));
  }

  like(){
    this.store.dispatch(new TweetActions.LikeTweet());
  }

  dislike(){
    this.store.dispatch(new TweetActions.DislikeTweet());
  }


}
