import { Component } from '@angular/core';
import { ArticleCartService } from '../article-cart.service';
import { Article } from '../articles-list/Article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {


  shoppingList$: Observable<Article[]>;

  constructor(private shoppingCart: ArticleCartService) {
    this.shoppingList$ = shoppingCart.shoppingList.asObservable();
  }
  removeMethod(article: Article): void {
    this.shoppingCart.removeArticle(article);
  }


}
