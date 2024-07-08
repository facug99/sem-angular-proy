import { Component } from '@angular/core';
import { Article } from "./Article";
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {
  private suscripcionDeDatos: Subscription;
  articles: Article[] = []
  constructor(
    private shoppingCart: ArticleCartService,
    private articleDataService: ArticleDataService
  ) {

  }

  ngOnInit(): void {
    this.suscripcionDeDatos = this.articleDataService.getAll().subscribe(articles => this.articles = articles);

  }


  ngOnDestroy(): void {
    this.suscripcionDeDatos.unsubscribe();
  }
  addToCart(article: Article): void {
    if (article.quantity > 0 && article.quantity <= article.stock) {
      this.shoppingCart.addToShoppingList(article);
      article.stock -= article.quantity;
      article.quantity = 0;
      localStorage.setItem(article.name, article.stock.toString());
    }
  }




}






