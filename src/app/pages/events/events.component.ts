import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-theme-primary to-theme-accent">
      <div class="container-custom text-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Events</h1>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">
          Join us for exciting cultural events, festivals, and community gatherings
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-white shadow-sm">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            *ngFor="let category of categories"
            (click)="filterEvents(category)"
            [class.bg-theme-primary]="selectedCategory === category"
            [class.text-theme-on-primary]="selectedCategory === category"
            [class.bg-theme-background]="selectedCategory !== category"
            [class.text-theme-on-background]="selectedCategory !== category"
            class="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md">
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Events Grid -->
    <section class="section-padding bg-theme-background">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let event of filteredEvents" class="card overflow-hidden">
            <div class="h-48 bg-gradient-to-br from-theme-primary to-theme-accent flex items-center justify-center">
              <span class="material-icons text-white text-6xl">{{ getEventIcon(event.category) }}</span>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="bg-theme-primary text-white text-xs px-2 py-1 rounded-full">{{ event.category }}</span>
                <span class="text-theme-primary font-semibold">{{ event.price }}</span>
              </div>
              <h3 class="text-xl font-semibold mb-3">{{ event.title }}</h3>
              <p class="text-theme-on-background mb-4 line-clamp-3">{{ event.description }}</p>
              
              <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-theme-on-background">
                  <span class="material-icons text-theme-primary mr-2 text-sm">event</span>
                  {{ event.date }}
                </div>
                <div class="flex items-center text-sm text-theme-on-background">
                  <span class="material-icons text-theme-primary mr-2 text-sm">access_time</span>
                  {{ event.time }}
                </div>
                <div class="flex items-center text-sm text-theme-on-background">
                  <span class="material-icons text-theme-primary mr-2 text-sm">location_on</span>
                  {{ event.location }}
                </div>
              </div>
              
              <button class="w-full btn-primary">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div *ngIf="filteredEvents.length === 0" class="text-center py-16">
          <span class="material-icons text-gray-400 text-6xl mb-4">event_busy</span>
          <h3 class="text-xl font-semibold text-theme-on-background mb-2">No events found</h3>
          <p class="text-theme-on-background">Try selecting a different category</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="section-padding bg-theme-primary">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Stay Updated
        </h2>
        <p class="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to get notified about upcoming events and activities
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none">
          <button class="bg-white text-theme-primary hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class EventsComponent implements OnInit {
  categories = ['All', 'Festival', 'Cultural', 'Social', 'Educational', 'Sports'];
  selectedCategory = 'All';
  
  events: Event[] = [
    {
      id: 1,
      title: 'Onam Celebration 2024',
      date: 'September 15, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'BMC Community Hall',
      description: 'Join us for the grand Onam celebration with traditional Sadhya, cultural programs, and Pulikali performances.',
      image: 'onam.jpg',
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
      image: 'workshop.jpg',
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
      image: 'kathakali.jpg',
      category: 'Cultural',
      price: '₹300'
    },
    {
      id: 4,
      title: 'Family Picnic',
      date: 'November 10, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Lalbagh Botanical Garden',
      description: 'A fun-filled day with games, food, and activities for the entire family.',
      image: 'picnic.jpg',
      category: 'Social',
      price: '₹200'
    },
    {
      id: 5,
      title: 'Boat Race Championship',
      date: 'December 1, 2024',
      time: '8:00 AM - 4:00 PM',
      location: 'Ulsoor Lake',
      description: 'Witness the excitement of traditional Kerala boat races adapted for Bengaluru waters.',
      image: 'boat-race.jpg',
      category: 'Sports',
      price: '₹150'
    },
    {
      id: 6,
      title: 'Christmas Carol Night',
      date: 'December 22, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'BMC Community Hall',
      description: 'Celebrate Christmas with traditional Kerala carols and festive treats.',
      image: 'christmas.jpg',
      category: 'Festival',
      price: '₹100'
    }
  ];

  filteredEvents: Event[] = [];

  ngOnInit() {
    this.filteredEvents = this.events;
  }

  filterEvents(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(event => event.category === category);
    }
  }

  getEventIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Festival': 'celebration',
      'Cultural': 'theater_comedy',
      'Social': 'groups',
      'Educational': 'school',
      'Sports': 'sports'
    };
    return icons[category] || 'event';
  }
}