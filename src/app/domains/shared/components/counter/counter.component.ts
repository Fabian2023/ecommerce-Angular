import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    //no async operations here
    //before rendering the component
    console.log('constructor');
    console.log('-'.repeat(10));
  }


  ngOnChanges(changes:SimpleChanges) {
    //before and during rendering the component when the input properties change
    console.log('ngOnChanges');
    console.log('*'.repeat(10));
    console.log("cambios",changes);
    
  }
}
