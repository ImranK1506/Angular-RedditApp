import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // Component property
  // articles: Array<Article>; // Component property, different notation

  constructor() {
    this.articles = [
      new Article(
        'Angular',
        'http://angular.io',
        3
      ),
      new Article(
        'Fullstack',
        'http://fullstack.io',
        2),
      new Article(
        'Angular Homepage',
        'http://angular.io',
        1
      )
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: '${title.value}' and link: ${link.value}`);
    // Create a new article instance to the array
    this.articles.push(new Article(title.value, link.value, 0));
    // Clear the input field values after submit
    title.value = '';
    link.value = '';
    return false;
  }

  // Sort vote by number of votes
  sortedArticles(): Article[] {
    return this.articles.sort((
      a: Article, b: Article) => b.votes - a.votes
    );
  }
}
