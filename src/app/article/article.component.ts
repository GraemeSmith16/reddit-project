import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  votes:number;
  title:string;
  link:string;

  constructor() {
    this.title="Angular"
    this.link="http://angular.io"
    this.votes=10;
   }

  ngOnInit() {

  }


  voteUp():Boolean {
    this.votes ++;
    return false;
  }

  voteDown():Boolean {
    this.votes --;
    return false;
  }

}
