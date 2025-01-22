import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'
import{ ProductComponent} from '../../components/product/product.component'
import { log } from 'node:console';

@Component({
  selector: 'app-list',
  standalone:true,
  imports: [CommonModule,ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
fromChild (event:string){
console.log('estamos desde el padre');
console.log(event);


}
}
