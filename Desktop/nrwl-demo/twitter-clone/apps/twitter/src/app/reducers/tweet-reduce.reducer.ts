import * as TweetActions from '../actions/tweets.action';
import { Tweet } from '../models/tweet.model';

export type Action = TweetActions.All

const defaultTweet:Tweet = {
    user: '',
    post: '',
    retweets: 0
} 

const newState = (state, newS)=>{
    return Object.assign({},state,newS)
}

export function TweetReducer(state:Tweet = defaultTweet,action:Action){
    console.log('State ',state);
    console.log('Action ',action);

    switch(action.type){
        case TweetActions.EDIT_TWEET: return newState(state,{post:action.tweet})
        case TweetActions.LIKING_TWEET: return newState(state,{retweets: state.retweets+1})
        case TweetActions.DISLIKE_TWEET: return newState(state,{retweets: state.retweets-1})
        default: return state
    }
}