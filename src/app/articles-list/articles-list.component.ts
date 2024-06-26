import { Component } from '@angular/core';
import { Article } from "./Article";
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {
  articles: Article[] = [
    {
      name: 'ENA Whey Protein True Made Cookies and Cream',
      size: '1000 gr',
      price: 35400,
      stock: 7,
      image: 'assets/img/protein.webp',
    },
    {
      name: 'STAR NUTRITION Creatina',
      size: '300 gr',
      price: 32500,
      stock: 9,
      image: 'assets/img/creatina.webp',
    },
    {
      name: 'NF NUTRITION Focus PreWork',
      size: '240 gr',
      price: 24000,
      stock: 0,
      image: 'assets/img/preentreno.webp',
    },
  ]
}
