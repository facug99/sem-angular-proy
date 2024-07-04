import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './articles-list/Article';
import { Observable } from 'rxjs';
import { tap, TapObserver } from 'rxjs/operators';

const URL = 'https://6684834c56e7503d1ae072d1.mockapi.io/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(URL).pipe(
      tap(articles => {
        articles.forEach(article => article.quantity = 0);
      })
    );



  }
  public updateArticle(article: Article): void {

  }

}
