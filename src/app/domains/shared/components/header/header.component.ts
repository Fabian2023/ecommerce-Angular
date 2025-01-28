import { Component,signal,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input() cart: any[] = [];

toogleSideMenu() {
  this.hideSideMenu.update(prevState => !prevState);
}


}
