import { Component, input, signal } from '@angular/core';
import{CounterComponent}from '../../../shared/components/counter/counter.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule,CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('hola');

  changeDuration (event: Event) {
   const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));

  }

  changeMessage (event: Event) {
    const input = event.target as HTMLInputElement;
     this.message.set(input.value);
 
   }

}
