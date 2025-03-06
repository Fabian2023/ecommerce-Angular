import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;

  @Output() addToCart = new EventEmitter();
  addToCartHandler(product: any) {
    this.addToCart.emit(product);
  }
}

