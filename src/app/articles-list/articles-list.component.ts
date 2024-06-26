import { Component } from '@angular/core';
import { Article } from "./Article";
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {
  downgradeMethod(article: Article): void {
    if (article.count > 0) {
      article.count--;
    }

  }
  upgradeMethod(article: Article): void {
    if (article.count < article.stock) {
      article.count++;
    }
  }
  //Fake Data
  articles: Article[] = [
    {
      name: 'ENA Whey Protein True Made Cookies and Cream',
      size: '1000 gr',
      price: 35400,
      stock: 7,
      image: 'assets/img/protein.webp',
      count: 0,
    },
    {
      name: 'STAR NUTRITION Creatina',
      size: '300 gr',
      price: 32500,
      stock: 9,
      image: 'assets/img/creatina.webp',
      count: 0,
    },
    {
      name: 'NF NUTRITION Focus PreWork',
      size: '240 gr',
      price: 24000,
      stock: 0,
      image: 'assets/img/preentreno.webp',
      count: 0,
    },
  ]
}
