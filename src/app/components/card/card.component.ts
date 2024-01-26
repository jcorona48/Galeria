import { Component, Input } from '@angular/core';
import { Product } from '@/models/Product';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product: Product = {
    id: 1,
    title: 'Café',
    price: 5,
    description: 'Café de grano',
    images: [
      'https://editorialtelevisa.brightspotcdn.com/wp-content/uploads/2013/04/cafe-espresso.jpg',
    ],
  };

  @Input() deleteToCard = (product: Product) => {
    console.log('deleteToCard, product: ', product.title);
  };

  @Input() title: string = 'Hola mundo';
}
