import { Action } from '@ngrx/store';

export const EDIT_TWEET = "This action edits tweet"
export const LIKING_TWEET = "This action increases likes for a  tweet"
export const DISLIKE_TWEET = "This action descreases likes for a  tweet"

export class EditTweet implements Action{
    constructor(public tweet:string){}

    readonly type = EDIT_TWEET
}

export class LikeTweet implements Action{

    readonly type = LIKING_TWEET
}

export class DislikeTweet implements Action{

    readonly type = DISLIKE_TWEET
}

export type All = EditTweet | LikeTweet | DislikeTweet