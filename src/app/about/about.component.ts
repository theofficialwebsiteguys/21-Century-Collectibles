import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    images: { src: string, alt: string }[] = [
      { src: 'assets/store1.jpg', alt: 'Store' },
      { src: 'assets/store2.jpg', alt: 'Store' },
      { src: 'assets/store3.jpg', alt: 'Store' },
      { src: 'assets/store4.jpg', alt: 'Store' },
      { src: 'assets/store5.jpg', alt: 'Store' },
      { src: 'assets/coins.jpg', alt: 'Store' },
    ];

}
