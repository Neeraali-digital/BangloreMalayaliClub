import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  price: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private eventsSubject = new BehaviorSubject<Event[]>([]);
  private gallerySubject = new BehaviorSubject<GalleryItem[]>([]);

  constructor() {
    this.loadInitialData();
  }

  // Events
  getEvents(): Observable<Event[]> {
    return this.eventsSubject.asObservable();
  }

  getEventById(id: number): Event | undefined {
    return this.eventsSubject.value.find(event => event.id === id);
  }

  // Gallery
  getGalleryItems(): Observable<GalleryItem[]> {
    return this.gallerySubject.asObservable();
  }

  getGalleryItemsByCategory(category: string): GalleryItem[] {
    if (category === 'All') {
      return this.gallerySubject.value;
    }
    return this.gallerySubject.value.filter(item => item.category === category);
  }

  // Contact form submission (mock)
  submitContactForm(formData: any): Observable<{ success: boolean; message: string }> {
    return new Observable(observer => {
      // Simulate API call delay
      setTimeout(() => {
        observer.next({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        observer.complete();
      }, 2000);
    });
  }

  // Newsletter subscription (mock)
  subscribeNewsletter(email: string): Observable<{ success: boolean; message: string }> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next({
          success: true,
          message: 'Successfully subscribed to our newsletter!'
        });
        observer.complete();
      }, 1500);
    });
  }

  private loadInitialData() {
    // Load events data
    const events: Event[] = [
      {
        id: 1,
        title: 'Onam Celebration 2024',
        date: 'September 15, 2024',
        time: '10:00 AM - 6:00 PM',
        location: 'BMC Community Hall',
        description: 'Join us for the grand Onam celebration with traditional Sadhya, cultural programs, and Pulikali performances.',
        category: 'Festival',
        price: '₹500'
      },
      {
        id: 2,
        title: 'Malayalam Language Workshop',
        date: 'October 5, 2024',
        time: '2:00 PM - 5:00 PM',
        location: 'BMC Learning Center',
        description: 'Learn to read and write Malayalam with our experienced teachers. Perfect for children and adults.',
        category: 'Educational',
        price: 'Free'
      },
      {
        id: 3,
        title: 'Kathakali Performance',
        date: 'October 20, 2024',
        time: '7:00 PM - 9:00 PM',
        location: 'Chowdiah Memorial Hall',
        description: 'Experience the mesmerizing art of Kathakali performed by renowned artists from Kerala.',
        category: 'Cultural',
        price: '₹300'
      }
    ];

    // Load gallery data
    const galleryItems: GalleryItem[] = [
      {
        id: 1,
        title: 'Onam Celebration 2023',
        category: 'Onam',
        image: 'onam-2023.jpg',
        description: 'Grand Onam celebration with traditional Sadhya and cultural programs'
      },
      {
        id: 2,
        title: 'Kathakali Performance',
        category: 'Cultural',
        image: 'kathakali.jpg',
        description: 'Mesmerizing Kathakali performance by renowned artists'
      },
      {
        id: 3,
        title: 'Family Picnic',
        category: 'Social',
        image: 'picnic.jpg',
        description: 'Fun-filled family picnic at Lalbagh Gardens'
      }
    ];

    this.eventsSubject.next(events);
    this.gallerySubject.next(galleryItems);
  }
}