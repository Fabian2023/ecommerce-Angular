import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import{HeaderComponent} from "../../../shared/components/header/header.component"
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any[] = []; // Lista para almacenar productos obtenidos
  cart = signal<any[]>([]); // Lista para almacenar productos agregados al carro

  ngOnInit(): void {
    this.fetchProducts(); // Llamar a la API al inicializar el componente
  }

  // Función para obtener los productos de la API
  private fetchProducts(): void {
    fetch('https://fakestoreapi.in/api/products?limit=150') // Cambié la URL para que sea correcta
      .then(response => response.json())
      .then(data => {
        console.log(data); // Agregar un console.log para inspeccionar la respuesta
        if (data && Array.isArray(data.products)) {
          this.products = data.products; // Acceder a la propiedad 'products' y asignarla a la lista de productos
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }

  addToCart(event: any): void {
    this.cart.update(prevState => [...prevState, event]); // Agregar el producto al carro
  }
}
