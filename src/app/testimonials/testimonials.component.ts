import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import 'owl.carousel';

declare var $: any;
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})

export class TestimonialsComponent {
  users = [{
      name: 'Marta K.',
      description: 'John was a great help to me when I needed to get rid of some collectibles. He purchased my in-laws entire record collection and offered twice as much as the previous dealer I called. Very honest and professional. I highly recommend him.',
      image: 'assets/reviews/marta-k.jpg',
      rating: 5 // Add rating property
    },
  {
    name: 'Stephanie M.',
    description: 'Great guy great stuff. I\'m a repeat buyer when in the area!!! Very fair prices and huge selection',
    image: 'assets/reviews/stephanie-m.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Dyan W.',
    description: 'John was on time, professional, polite and offered me great prices. It was a pleasure doing business with him, and I will refer him to all my friends. If you have collectibles to sell, call John. You won\'t be sorry!',
    image: 'assets/reviews/dyan-w.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Leon Z.',
    description: 'I have been buying records from him for few years, I used to buy from other sellers but once I started buying from him I never stopped dealing with him. Nice seller with huge experience in records and other memorabilia item. Pleasure to deal with.',
    image: 'assets/reviews/leon-z.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Randy R.',
    description: 'John is a pleasure to work with and has been a buyer of many of my collections. Solid business man and very fair. Highly recommended.',
    image: 'assets/reviews/randy-r.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'The Critical J.',
    description: 'This place has vintage to modern electronics ranging from video games, computers, record players, stereos, pops, and cards. The blonde worker and her father are both nice while the father is knowledgeable about the markets and capabilities of all their items.',
    image: 'assets/reviews/critical-j.jpg',
    rating: 4 // Add rating property
  }

  ];

  chunkedUsers = this.chunkArray(this.users, 3);

  // Function to chunk the array into groups of size
  chunkArray(array: any[], size: number): any[] {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
}