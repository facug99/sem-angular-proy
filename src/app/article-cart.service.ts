import { Injectable } from '@angular/core';
import { Article } from './articles-list/Article';
import { BehaviorSubject } from 'rxjs';
import { ArticlesListComponent } from './articles-list/articles-list.component';


@Injectable({
  providedIn: 'root'
})
export class ArticleCartService {

  private _shoppingList: Article[] = [];
  shoppingList: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);



  constructor() {

  }
  addToShoppingList(article: Article) {
    let item = this._shoppingList.find((v1) => v1.name == article.name);
    if (!item) {
      this._shoppingList.push({ ...article });
    } else {
      item.quantity += article.quantity;
    }

    this.shoppingList.next(this._shoppingList);
  }

  removeArticle(article: Article): void {
    let index = this._shoppingList.findIndex((v1) => v1.name == article.name);
    this._shoppingList.splice(index);
    this.shoppingList.next(this._shoppingList);

  }

}



