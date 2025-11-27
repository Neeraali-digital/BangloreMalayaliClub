import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  registrationDeadline: string;
  capacity: number;
  registered: number;
}

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  upcomingEvents: UpcomingEvent[] = [
    {
      id: 1,
      title: 'Onam Celebration 2024',
      date: 'September 15, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'BMC Community Hall',
      description: 'Join us for the grand Onam celebration with traditional Sadhya, cultural programs, and Pulikali performances. Experience the rich cultural heritage of Kerala in the heart of Bengaluru.',
      image: 'onam.jpg',
      category: 'Festival',
      registrationDeadline: 'September 10, 2024',
      capacity: 500,
      registered: 387
    },
    {
      id: 2,
      title: 'Malayalam Language Workshop',
      date: 'October 5, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'BMC Learning Center',
      description: 'Learn to read and write Malayalam with our experienced teachers. Perfect for children and adults. Classes will cover basic grammar, vocabulary, and conversational skills.',
      image: 'workshop.jpg',
      category: 'Educational',
      registrationDeadline: 'September 30, 2024',
      capacity: 50,
      registered: 42
    },
    {
      id: 3,
      title: 'Kathakali Performance',
      date: 'October 20, 2024',
      time: '7:00 PM - 9:00 PM',
      location: 'Chowdiah Memorial Hall',
      description: 'Experience the mesmerizing art of Kathakali performed by renowned artists from Kerala. A unique opportunity to witness this classical dance-drama form.',
      image: 'kathakali.jpg',
      category: 'Cultural',
      registrationDeadline: 'October 15, 2024',
      capacity: 300,
      registered: 245
    },
    {
      id: 4,
      title: 'Family Picnic',
      date: 'November 10, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Lalbagh Botanical Garden',
      description: 'A fun-filled day with games, food, and activities for the entire family. Bring your loved ones for a memorable outing in Bengaluru\'s famous botanical garden.',
      image: 'picnic.jpg',
      category: 'Social',
      registrationDeadline: 'November 5, 2024',
      capacity: 200,
      registered: 156
    },
    {
      id: 5,
      title: 'Boat Race Championship',
      date: 'December 1, 2024',
      time: '8:00 AM - 4:00 PM',
      location: 'Ulsoor Lake',
      description: 'Witness the excitement of traditional Kerala boat races adapted for Bengaluru waters. Teams from various Malayali associations will compete in this thrilling event.',
      image: 'boat-race.jpg',
      category: 'Sports',
      registrationDeadline: 'November 20, 2024',
      capacity: 1000,
      registered: 723
    },
    {
      id: 6,
      title: 'Christmas Carol Night',
      date: 'December 22, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'BMC Community Hall',
      description: 'Celebrate Christmas with traditional Kerala carols and festive treats. Join us for an evening of music, joy, and community spirit.',
      image: 'christmas.jpg',
      category: 'Festival',
      registrationDeadline: 'December 15, 2024',
      capacity: 400,
      registered: 298
    }
  ];

  ngOnInit() {
    // Component initialization logic
  }

  registerForEvent(event: UpcomingEvent) {
    // Registration logic would go here
    alert(`Registration for "${event.title}" is not yet implemented. Please contact BMC for registration.`);
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

  getRegistrationProgress(event: UpcomingEvent): number {
    return (event.registered / event.capacity) * 100;
  }
}
