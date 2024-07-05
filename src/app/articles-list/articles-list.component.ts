import { Component } from '@angular/core';
import { Article } from "./Article";
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {

  articles: Article[] = []
  constructor(
    private shoppingCart: ArticleCartService,
    private articleDataService: ArticleDataService
  ) {
  }

  ngOnInit(): void {
    this.articleDataService.getAll().subscribe(articles => this.articles = articles);

  }




  addToCart(article: Article): void {
    if (article.quantity > 0) {
      this.shoppingCart.addToShoppingList(article);
      article.stock -= article.quantity;
      article.quantity = 0;


    }
  }



}






