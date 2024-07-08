import { Component } from '@angular/core';
import { Article } from "./Article";
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';
import { Subscription } from 'rxjs';

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
    this.shoppingCart.shoppingList.subscribe();

  }
  ngOnDestroy(): void {
    this.suscripcionDeDatos.unsubscribe();
  }
  addToCart(article: Article): void {
    if (article.quantity > 0 && article.quantity <= article.stock) {
      this.shoppingCart.addToShoppingList(article);
      article.stock -= article.quantity;
      article.quantity = 0;

    }
  }
  updateStock(article: Article) {
    let item = this.articles.find((v1) => v1.name == article.name)
    if (item) {
      if (article.stock != item.stock) {
        item.stock = article.stock;
      }
    }
  }



}






