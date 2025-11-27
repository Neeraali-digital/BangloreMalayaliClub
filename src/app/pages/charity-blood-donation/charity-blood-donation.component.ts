import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

interface CharityEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  type: 'Charity' | 'Blood Donation';
  beneficiaries: number;
  fundsRaised?: number;
  bloodUnits?: number;
  status: 'Upcoming' | 'Completed';
  impact: string;
}

@Component({
  selector: 'app-charity-blood-donation',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './charity-blood-donation.component.html',
  styleUrls: ['./charity-blood-donation.component.scss']
})
export class CharityBloodDonationComponent implements OnInit {
  charityEvents: CharityEvent[] = [
    {
      id: 1,
      title: 'Blood Donation Camp - Tech Park',
      date: 'October 10, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Tech Park Blood Bank',
      description: 'Join us for a blood donation drive in collaboration with Tech Park Blood Bank. Your donation can save up to 3 lives. Medical team will be present for health check-ups.',
      image: 'blood-donation.jpg',
      type: 'Blood Donation',
      beneficiaries: 0,
      bloodUnits: 0,
      status: 'Upcoming',
      impact: 'Help save lives in emergency situations'
    },
    {
      id: 2,
      title: 'Flood Relief Fund - Kerala',
      date: 'September 20, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'BMC Community Hall',
      description: 'Contribute to the Kerala flood relief efforts. Funds will be used for rebuilding homes, providing food and medical supplies to affected families.',
      image: 'flood-relief.jpg',
      type: 'Charity',
      beneficiaries: 500,
      fundsRaised: 250000,
      status: 'Upcoming',
      impact: 'Rebuild homes and provide essential supplies'
    },
    {
      id: 3,
      title: 'Blood Donation Drive - Malleshwaram',
      date: 'August 15, 2024',
      time: '8:00 AM - 2:00 PM',
      location: 'Malleshwaram Blood Bank',
      description: 'Community blood donation camp organized in partnership with local hospitals. All blood groups welcome. Refreshments and certificates provided.',
      image: 'blood-drive.jpg',
      type: 'Blood Donation',
      beneficiaries: 0,
      bloodUnits: 0,
      status: 'Completed',
      impact: 'Collected 45 units of blood for hospital needs'
    },
    {
      id: 4,
      title: 'Education Support Program',
      date: 'July 25, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Various Schools',
      description: 'Supporting underprivileged children with educational materials, uniforms, and school fees. Focus on rural areas around Bengaluru.',
      image: 'education.jpg',
      type: 'Charity',
      beneficiaries: 200,
      fundsRaised: 150000,
      status: 'Completed',
      impact: 'Provided educational support to 200 children'
    },
    {
      id: 5,
      title: 'Medical Camp - Rural Outreach',
      date: 'June 12, 2024',
      time: '8:00 AM - 4:00 PM',
      location: 'Rural Health Center',
      description: 'Free medical check-ups, consultations, and medicine distribution for rural communities. Specialists from various fields will participate.',
      image: 'medical-camp.jpg',
      type: 'Charity',
      beneficiaries: 300,
      fundsRaised: 75000,
      status: 'Completed',
      impact: 'Provided healthcare to 300+ rural residents'
    },
    {
      id: 6,
      title: 'Emergency Blood Drive',
      date: 'May 5, 2024',
      time: '10:00 AM - 3:00 PM',
      location: 'Victoria Hospital',
      description: 'Emergency blood donation camp in response to hospital requirements. Critical need for O+ and A+ blood groups.',
      image: 'emergency-blood.jpg',
      type: 'Blood Donation',
      beneficiaries: 0,
      bloodUnits: 32,
      status: 'Completed',
      impact: 'Collected 32 units during emergency situation'
    }
  ];

  filteredEvents: CharityEvent[] = [];
  selectedType: 'All' | 'Charity' | 'Blood Donation' = 'All';

  ngOnInit() {
    this.filteredEvents = this.charityEvents;
  }

  filterEvents(type: 'All' | 'Charity' | 'Blood Donation') {
    this.selectedType = type;
    if (type === 'All') {
      this.filteredEvents = this.charityEvents;
    } else {
      this.filteredEvents = this.charityEvents.filter(event => event.type === type);
    }
  }

  participateInEvent(event: CharityEvent) {
    if (event.status === 'Upcoming') {
      alert(`Registration for "${event.title}" is now open. Please contact BMC for participation details.`);
    } else {
      alert(`This event has already been completed. Stay tuned for upcoming events!`);
    }
  }

  getEventIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'Charity': 'volunteer_activism',
      'Blood Donation': 'bloodtype'
    };
    return icons[type] || 'favorite';
  }

  getStatusColor(status: string): string {
    return status === 'Upcoming' ? 'bg-theme-primary/10 text-theme-primary' : 'bg-gray-500/10 text-gray-500';
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  }
}
