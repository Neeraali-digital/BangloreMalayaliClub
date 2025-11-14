import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CommitteeMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  experience: string;
  achievements: string[];
  termStart: string;
  termEnd: string;
}

@Component({
  selector: 'app-executive-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './executive-committee.component.html',
  styleUrls: ['./executive-committee.component.scss']
})
export class ExecutiveCommitteeComponent implements OnInit {
  committeeMembers: CommitteeMember[] = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      position: 'President',
      description: 'Leading the Bangalore Malayali Club with over 15 years of community service experience. A renowned cardiologist committed to cultural preservation and community welfare.',
      image: 'president.jpg',
      email: 'president@bmc.org',
      phone: '+91 9876543210',
      experience: '15+ years in community leadership',
      achievements: [
        'Led successful Onam celebrations for 10+ years',
        'Established blood donation camp initiative',
        'Organized medical camps in rural areas'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 2,
      name: 'Priya Menon',
      position: 'Vice President',
      description: 'Dedicated educator and cultural enthusiast who has been instrumental in organizing educational programs and cultural events for the Malayali community.',
      image: 'vice-president.jpg',
      email: 'vicepresident@bmc.org',
      phone: '+91 9876543211',
      experience: '12+ years in education and community service',
      achievements: [
        'Established Malayalam language classes',
        'Organized youth cultural programs',
        'Coordinated charity initiatives'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 3,
      name: 'Arun Nair',
      position: 'Secretary',
      description: 'Experienced administrator and IT professional managing the club\'s operations, communications, and digital presence. Ensures smooth functioning of all club activities.',
      image: 'secretary.jpg',
      email: 'secretary@bmc.org',
      phone: '+91 9876543212',
      experience: '10+ years in administration and IT',
      achievements: [
        'Digital transformation of club operations',
        'Established online membership system',
        'Improved communication channels'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 4,
      name: 'Meera Pillai',
      position: 'Treasurer',
      description: 'Chartered accountant with expertise in financial management. Oversees the club\'s finances, budgeting, and ensures transparency in all financial operations.',
      image: 'treasurer.jpg',
      email: 'treasurer@bmc.org',
      phone: '+91 9876543213',
      experience: '8+ years in finance and accounting',
      achievements: [
        'Implemented transparent accounting system',
        'Managed charity fund allocations',
        'Optimized membership fee structure'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 5,
      name: 'Vijay Iyer',
      position: 'Joint Secretary',
      description: 'Young professional bringing fresh perspectives to club management. Handles event coordination and member engagement activities.',
      image: 'joint-secretary.jpg',
      email: 'jointsecretary@bmc.org',
      phone: '+91 9876543214',
      experience: '5+ years in event management',
      achievements: [
        'Organized sports tournaments',
        'Coordinated youth programs',
        'Improved member engagement'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 6,
      name: 'Anjali Ravi',
      position: 'Cultural Secretary',
      description: 'Passionate about preserving and promoting Malayali culture. Organizes cultural events, workshops, and traditional art forms demonstrations.',
      image: 'cultural-secretary.jpg',
      email: 'cultural@bmc.org',
      phone: '+91 9876543215',
      experience: '7+ years in cultural activities',
      achievements: [
        'Organized Kathakali performances',
        'Established traditional art workshops',
        'Promoted Malayalam literature'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 7,
      name: 'Suresh Nambiar',
      position: 'Sports Secretary',
      description: 'Former athlete and sports enthusiast who organizes various sports events and promotes physical fitness within the community.',
      image: 'sports-secretary.jpg',
      email: 'sports@bmc.org',
      phone: '+91 9876543216',
      experience: '6+ years in sports management',
      achievements: [
        'Organized annual sports meet',
        'Established football league',
        'Promoted youth sports participation'
      ],
      termStart: '2023',
      termEnd: '2025'
    },
    {
      id: 8,
      name: 'Kavita Sharma',
      position: 'Welfare Secretary',
      description: 'Social worker dedicated to community welfare. Manages charity programs, blood donation camps, and support for underprivileged community members.',
      image: 'welfare-secretary.jpg',
      email: 'welfare@bmc.org',
      phone: '+91 9876543217',
      experience: '9+ years in social work',
      achievements: [
        'Established blood donation program',
        'Organized charity drives',
        'Supported education initiatives'
      ],
      termStart: '2023',
      termEnd: '2025'
    }
  ];

  ngOnInit() {
    // Component initialization logic
  }

  getPositionColor(position: string): string {
    const colors: { [key: string]: string } = {
      'President': 'from-yellow-400 to-yellow-600',
      'Vice President': 'from-blue-400 to-blue-600',
      'Secretary': 'from-green-400 to-green-600',
      'Treasurer': 'from-purple-400 to-purple-600',
      'Joint Secretary': 'from-indigo-400 to-indigo-600',
      'Cultural Secretary': 'from-pink-400 to-pink-600',
      'Sports Secretary': 'from-orange-400 to-orange-600',
      'Welfare Secretary': 'from-red-400 to-red-600'
    };
    return colors[position] || 'from-gray-400 to-gray-600';
  }

  getPositionIcon(position: string): string {
    const icons: { [key: string]: string } = {
      'President': 'account_circle',
      'Vice President': 'person',
      'Secretary': 'edit_document',
      'Treasurer': 'account_balance_wallet',
      'Joint Secretary': 'group_add',
      'Cultural Secretary': 'theater_comedy',
      'Sports Secretary': 'sports',
      'Welfare Secretary': 'volunteer_activism'
    };
    return icons[position] || 'person';
  }
}
