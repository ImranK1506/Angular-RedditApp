import {Component, HostBinding, OnInit, Input} from '@angular/core';
import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    // No longer require code below because 'article' is populated by the Input
    // this.article = new Article(
    //   'Angular',
    //   'http://angular.io',
    //   10
    // );
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;   // returning false so that the page won't refresh on click
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;   // returning false so that the page won't refresh on click
  }

  ngOnInit() {
  }

}
