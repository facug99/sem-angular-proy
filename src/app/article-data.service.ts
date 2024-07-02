import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './articles-list/Article';
import { Observable } from 'rxjs';

const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Article[]> {
    // fetch('url', {method: 'GET'})
    return this.http.get<Article[]>(URL);
  }

}
