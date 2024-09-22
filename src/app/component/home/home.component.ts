import { Component } from '@angular/core';
import { SuggestedProduct } from '../../models/product-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  suggestedProducts: SuggestedProduct[] = [
    {
      bannerImg: 'images/moble-banner.jpg',
      category: {
        id: 1,
        category: 'electronics',
        subCategory: 'mobiless',
      },
    },
    {
      bannerImg: 'images/laptop-banner.png',
      category: {
        id: 2,
        category: 'electronics',
        subCategory: 'laptops',
      },
    },
    {
      bannerImg: 'images/sofa-banner.png',
      category: {
        id: 3,
        category: 'furniture',
        subCategory: 'sofas',
      },
    },
  ];
}
