import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SportsEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  sport: string;
  category: 'Tournament' | 'Training' | 'Friendly Match';
  participants: number;
  maxParticipants: number;
  entryFee: number;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  winner?: string;
  prize?: string;
}

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sportsEvents: SportsEvent[] = [
    {
      id: 1,
      title: 'Annual Football Tournament',
      date: 'November 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'BMC Sports Ground',
      description: 'Inter-club football tournament featuring teams from various Malayali associations. Knockout format with exciting matches and prizes.',
      image: 'football.jpg',
      sport: 'Football',
      category: 'Tournament',
      participants: 128,
      maxParticipants: 128,
      entryFee: 500,
      status: 'Upcoming',
      prize: '₹25,000 + Trophy'
    },
    {
      id: 2,
      title: 'Cricket League Championship',
      date: 'December 8, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'Chinnaswamy Stadium',
      description: 'T20 cricket tournament for corporate and community teams. Professional umpiring and exciting matches throughout the day.',
      image: 'cricket.jpg',
      sport: 'Cricket',
      category: 'Tournament',
      participants: 96,
      maxParticipants: 96,
      entryFee: 1000,
      status: 'Upcoming',
      prize: '₹50,000 + Trophy'
    },
    {
      id: 3,
      title: 'Badminton Training Sessions',
      date: 'Every Saturday',
      time: '6:00 AM - 8:00 AM',
      location: 'BMC Sports Complex',
      description: 'Weekly badminton training sessions for all skill levels. Professional coaching, fitness training, and friendly matches.',
      image: 'badminton.jpg',
      sport: 'Badminton',
      category: 'Training',
      participants: 0,
      maxParticipants: 20,
      entryFee: 200,
      status: 'Ongoing'
    },
    {
      id: 4,
      title: 'Volleyball Inter-Club Match',
      date: 'October 25, 2024',
      time: '4:00 PM - 7:00 PM',
      location: 'HAL Sports Ground',
      description: 'Friendly volleyball match between BMC and HAL Malayali Association. Great opportunity to watch and support local talent.',
      image: 'volleyball.jpg',
      sport: 'Volleyball',
      category: 'Friendly Match',
      participants: 24,
      maxParticipants: 24,
      entryFee: 0,
      status: 'Upcoming'
    },
    {
      id: 5,
      title: 'Table Tennis Championship 2024',
      date: 'September 30, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'BMC Recreation Center',
      description: 'Singles and doubles table tennis competition. Open to all age groups with separate categories for juniors and seniors.',
      image: 'table-tennis.jpg',
      sport: 'Table Tennis',
      category: 'Tournament',
      participants: 64,
      maxParticipants: 64,
      entryFee: 300,
      status: 'Completed',
      winner: 'Rajesh Kumar',
      prize: '₹10,000 + Trophy'
    },
    {
      id: 6,
      title: 'Basketball Skills Workshop',
      date: 'October 12, 2024',
      time: '3:00 PM - 6:00 PM',
      location: 'Koramangala Sports Academy',
      description: 'Basketball skills development workshop for youth. Learn dribbling, shooting, and team play from experienced coaches.',
      image: 'basketball.jpg',
      sport: 'Basketball',
      category: 'Training',
      participants: 0,
      maxParticipants: 30,
      entryFee: 400,
      status: 'Upcoming'
    }
  ];

  filteredEvents: SportsEvent[] = [];
  selectedSport: string = 'All';

  ngOnInit() {
    this.filteredEvents = this.sportsEvents;
  }

  filterEvents(sport: string) {
    this.selectedSport = sport;
    if (sport === 'All') {
      this.filteredEvents = this.sportsEvents;
    } else {
      this.filteredEvents = this.sportsEvents.filter(event => event.sport === sport);
    }
  }

  registerForEvent(event: SportsEvent) {
    if (event.status === 'Completed') {
      alert(`This event has already been completed. Winner: ${event.winner || 'N/A'}`);
    } else if (event.participants >= event.maxParticipants) {
      alert('This event is fully booked. Please check other events.');
    } else {
      alert(`Registration for "${event.title}" is now open. Entry fee: ₹${event.entryFee}. Please contact BMC for registration.`);
    }
  }

  getSportIcon(sport: string): string {
    const icons: { [key: string]: string } = {
      'Football': 'sports_soccer',
      'Cricket': 'sports_cricket',
      'Badminton': 'sports_badminton',
      'Volleyball': 'sports_volleyball',
      'Table Tennis': 'sports_tennis',
      'Basketball': 'sports_basketball'
    };
    return icons[sport] || 'sports';
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Tournament': 'bg-blue-100 text-blue-800',
      'Training': 'bg-green-100 text-green-800',
      'Friendly Match': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  }

  getStatusColor(status: string): string {
    const colors: { [key: string]: string } = {
      'Upcoming': 'bg-green-100 text-green-800',
      'Ongoing': 'bg-yellow-100 text-yellow-800',
      'Completed': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  }

  formatCurrency(amount: number): string {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
}
