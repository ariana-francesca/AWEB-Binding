import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding-demo.component.html',
  styleUrl: './databinding-demo.component.css'
})
export class DatabindingDemoComponent {
    message = "My First App!"
    description = "This is my new Angular Application"
    imageUrl = '../img/angular.png';
    w = 250;
    h = 75;
    altText = 'Angular Logo';
    textColor = 'blue';
    isHighlighted = true;
    yourName = ''

    count = 0;
    increment() {
      this.count++;
    }
    decrement() {
      this.count--;
    }
}



