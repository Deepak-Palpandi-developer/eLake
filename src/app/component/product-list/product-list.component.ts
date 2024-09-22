import { Component, Input } from '@angular/core';
import { Category } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() category: Category = {
    id: 0,
    category: '',
    subCategory: ''
  }
  @Input() count: number = 3;
}
