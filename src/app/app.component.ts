import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { Product } from '@/models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent,  HttpClientModule, CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Galeria';
  http = inject(HttpClient);
  products: Product[] = [];
  ngOnInit() {
    this.http
      .get<Product[]>('https://galeria-api-sigma.vercel.app/products')
      .subscribe((data) => {
        console.log(data);
        this.products = data;
      });
  }
  deleteProduct = (product: Product) => {
    this.products = this.products.filter((item) => item.id !== product.id);
  };
}
