import { Component } from '@angular/core';
import { Article } from "./Article";
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {

  constructor(
    private shoppingCart: ArticleCartService,
    private articleDataService: ArticleDataService
  ) {

  }
  addToCart(article: Article): void {
    this.shoppingCart.addToShoppingList(article);
    article.stock -= article.quantity;
    article.quantity = 0;

  }
  //Fake Data
  articles: Article[] = [
    {
      name: 'ENA Whey Protein True Made Cookies and Cream',
      size: '1000 gr',
      price: 35400,
      stock: 30,
      image: 'assets/img/protein.webp',
      quantity: 0,
    },
    {
      name: 'STAR NUTRITION Creatina',
      size: '300 gr',
      price: 32500,
      stock: 10,
      image: 'assets/img/creatina.webp',
      quantity: 0,
    },
    {
      name: 'NF NUTRITION Focus PreWork',
      size: '240 gr',
      price: 24000,
      stock: 5,
      image: 'assets/img/preentreno.webp',
      quantity: 0,
    },
  ]
}
