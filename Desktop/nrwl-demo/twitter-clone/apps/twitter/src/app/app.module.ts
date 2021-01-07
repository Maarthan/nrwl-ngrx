import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TweetReducer } from './reducers/tweet-reduce.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    FormsModule,
    StoreModule.forRoot({tweet:TweetReducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
