import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PastEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  attendees: number;
  rating: number;
  photos: string[];
}

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {
  pastEvents: PastEvent[] = [
    {
      id: 1,
      title: 'Vishu Celebration 2024',
      date: 'April 14, 2024',
      time: '9:00 AM - 2:00 PM',
      location: 'BMC Community Hall',
      description: 'A memorable Vishu celebration with traditional Vishu Kani, cultural programs, and community feast. The event brought together over 300 members for a day of joy and cultural exchange.',
      image: 'vishu.jpg',
      category: 'Festival',
      attendees: 312,
      rating: 4.8,
      photos: ['vishu1.jpg', 'vishu2.jpg', 'vishu3.jpg']
    },
    {
      id: 2,
      title: 'Kerala Cuisine Workshop',
      date: 'March 20, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'BMC Kitchen',
      description: 'Interactive cooking workshop where participants learned to prepare authentic Kerala dishes including Appam, Avial, and Fish Curry. Hands-on experience with expert chefs.',
      image: 'cuisine.jpg',
      category: 'Educational',
      attendees: 45,
      rating: 4.9,
      photos: ['cuisine1.jpg', 'cuisine2.jpg', 'cuisine3.jpg']
    },
    {
      id: 3,
      title: 'Theyyam Performance',
      date: 'February 28, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Ranga Shankara',
      description: 'Mesmerizing Theyyam performance showcasing the ritual art form of North Kerala. Artists from Kannur brought this ancient tradition to Bengaluru audience.',
      image: 'theyyam.jpg',
      category: 'Cultural',
      attendees: 180,
      rating: 4.7,
      photos: ['theyyam1.jpg', 'theyyam2.jpg', 'theyyam3.jpg']
    },
    {
      id: 4,
      title: 'Youth Meet & Networking',
      date: 'January 15, 2024',
      time: '3:00 PM - 7:00 PM',
      location: 'The Leela Palace',
      description: 'Networking event for young Malayali professionals in Bengaluru. Featured guest speakers, panel discussions, and opportunities for career connections.',
      image: 'youth.jpg',
      category: 'Social',
      attendees: 95,
      rating: 4.5,
      photos: ['youth1.jpg', 'youth2.jpg', 'youth3.jpg']
    },
    {
      id: 5,
      title: 'Kerala Boat Race',
      date: 'December 15, 2023',
      time: '7:00 AM - 3:00 PM',
      location: 'Ulsoor Lake',
      description: 'Thrilling boat race competition featuring traditional Kerala snake boats adapted for lake racing. Teams competed in various categories with enthusiastic crowd support.',
      image: 'boat-race-past.jpg',
      category: 'Sports',
      attendees: 450,
      rating: 4.6,
      photos: ['boat1.jpg', 'boat2.jpg', 'boat3.jpg']
    },
    {
      id: 6,
      title: 'Christmas Celebration',
      date: 'December 20, 2023',
      time: '5:00 PM - 9:00 PM',
      location: 'BMC Community Hall',
      description: 'Festive Christmas celebration with carol singing, cultural programs, and community dinner. The hall was decorated beautifully with Christmas lights and Kerala-style decorations.',
      image: 'christmas-past.jpg',
      category: 'Festival',
      attendees: 275,
      rating: 4.8,
      photos: ['christmas1.jpg', 'christmas2.jpg', 'christmas3.jpg']
    }
  ];

  selectedEvent: PastEvent | null = null;
  showPhotoGallery = false;

  ngOnInit() {
    // Component initialization logic
  }

  openPhotoGallery(event: PastEvent) {
    this.selectedEvent = event;
    this.showPhotoGallery = true;
  }

  closePhotoGallery() {
    this.showPhotoGallery = false;
    this.selectedEvent = null;
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

  getRatingStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push('star');
    }

    if (hasHalfStar) {
      stars.push('star_half');
    }

    while (stars.length < 5) {
      stars.push('star_border');
    }

    return stars;
  }
}
