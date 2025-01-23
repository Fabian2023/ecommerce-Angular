import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any[] = []; // Lista para almacenar productos obtenidos

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

  fromChild(event: string): void {
    console.log('Evento recibido desde el hijo:', event);
  }
}
