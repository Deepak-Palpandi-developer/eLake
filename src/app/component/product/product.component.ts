import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {

  @Input() view: 'grid' | 'list' = 'grid';

  constructor() { }

  ngOnInit(): void {

  }

}
