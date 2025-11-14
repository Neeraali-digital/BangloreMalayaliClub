import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PastCommitteeMember {
  id: number;
  name: string;
  position: string;
  term: string;
  achievements: string[];
  currentRole?: string;
}

interface PastCommittee {
  year: string;
  president: string;
  secretary: string;
  treasurer: string;
  members: PastCommitteeMember[];
  keyHighlights: string[];
}

@Component({
  selector: 'app-past-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './past-committee.component.html',
  styleUrls: ['./past-committee.component.scss']
})
export class PastCommitteeComponent implements OnInit {
  pastCommittees: PastCommittee[] = [
    {
      year: '2022-2023',
      president: 'Dr. Ramesh Nair',
      secretary: 'Latha Menon',
      treasurer: 'K. Vijayakumar',
      members: [
        {
          id: 1,
          name: 'Dr. Ramesh Nair',
          position: 'President',
          term: '2022-2023',
          achievements: [
            'Established annual blood donation camp',
            'Organized first inter-club cultural competition',
            'Increased membership by 25%'
          ],
          currentRole: 'Senior Advisor'
        },
        {
          id: 2,
          name: 'Latha Menon',
          position: 'Secretary',
          term: '2022-2023',
          achievements: [
            'Digital transformation of club records',
            'Established social media presence',
            'Organized monthly newsletter'
          ],
          currentRole: 'Executive Committee Member'
        },
        {
          id: 3,
          name: 'K. Vijayakumar',
          position: 'Treasurer',
          term: '2022-2023',
          achievements: [
            'Implemented transparent accounting system',
            'Managed charity fund of ₹5 lakhs',
            'Reduced operational costs by 15%'
          ],
          currentRole: 'Finance Consultant'
        },
        {
          id: 4,
          name: 'Priya Shankar',
          position: 'Cultural Secretary',
          term: '2022-2023',
          achievements: [
            'Organized 12 cultural events',
            'Established youth cultural group',
            'Promoted traditional arts'
          ],
          currentRole: 'Cultural Coordinator'
        },
        {
          id: 5,
          name: 'Arjun Pillai',
          position: 'Sports Secretary',
          term: '2022-2023',
          achievements: [
            'Organized first cricket tournament',
            'Established weekly sports activities',
            'Increased youth participation by 40%'
          ],
          currentRole: 'Sports Committee Member'
        }
      ],
      keyHighlights: [
        'First blood donation camp with 150+ donors',
        'Cultural exchange program with other Malayali associations',
        'Youth development program launched',
        'Digital membership system implemented'
      ]
    },
    {
      year: '2021-2022',
      president: 'Mohan Das',
      secretary: 'Sunitha Ravi',
      treasurer: 'Rajesh Kumar',
      members: [
        {
          id: 6,
          name: 'Mohan Das',
          position: 'President',
          term: '2021-2022',
          achievements: [
            'Led COVID-19 relief activities',
            'Established education support program',
            'Strengthened community bonds'
          ],
          currentRole: 'Community Leader'
        },
        {
          id: 7,
          name: 'Sunitha Ravi',
          position: 'Secretary',
          term: '2021-2022',
          achievements: [
            'Coordinated relief distribution to 500+ families',
            'Managed online events during pandemic',
            'Improved communication systems'
          ],
          currentRole: 'Social Worker'
        },
        {
          id: 8,
          name: 'Rajesh Kumar',
          position: 'Treasurer',
          term: '2021-2022',
          achievements: [
            'Managed relief fund of ₹10 lakhs',
            'Transparent fund utilization',
            'Financial planning for future projects'
          ],
          currentRole: 'Executive Committee Treasurer'
        },
        {
          id: 9,
          name: 'Anita Nair',
          position: 'Welfare Secretary',
          term: '2021-2022',
          achievements: [
            'COVID-19 relief coordination',
            'Medical camp organization',
            'Support for elderly members'
          ],
          currentRole: 'Welfare Committee Member'
        },
        {
          id: 10,
          name: 'Suresh Babu',
          position: 'Joint Secretary',
          term: '2021-2022',
          achievements: [
            'Youth engagement programs',
            'Event management during restrictions',
            'Community outreach initiatives'
          ],
          currentRole: 'Event Coordinator'
        }
      ],
      keyHighlights: [
        'COVID-19 relief activities supporting 1000+ families',
        'Online cultural programs during lockdown',
        'Education scholarship program for 50 students',
        'Community kitchen initiative'
      ]
    },
    {
      year: '2020-2021',
      president: 'K. Radhakrishnan',
      secretary: 'Meera Iyer',
      treasurer: 'Venkatesh Nair',
      members: [
        {
          id: 11,
          name: 'K. Radhakrishnan',
          position: 'President',
          term: '2020-2021',
          achievements: [
            'Led club through pandemic challenges',
            'Established online community platform',
            'Maintained member engagement'
          ],
          currentRole: 'Honorary President'
        },
        {
          id: 12,
          name: 'Meera Iyer',
          position: 'Secretary',
          term: '2020-2021',
          achievements: [
            'Shifted operations to digital platforms',
            'Organized virtual events',
            'Maintained communication with all members'
          ],
          currentRole: 'Digital Communications Head'
        },
        {
          id: 13,
          name: 'Venkatesh Nair',
          position: 'Treasurer',
          term: '2020-2021',
          achievements: [
            'Managed finances during economic challenges',
            'Online payment systems implementation',
            'Cost optimization strategies'
          ],
          currentRole: 'Financial Advisor'
        }
      ],
      keyHighlights: [
        'Successful transition to digital operations',
        'Virtual Onam celebrations',
        'Online membership drive',
        'Remote learning programs for youth'
      ]
    }
  ];

  selectedYear: string = '';
  filteredCommittees: PastCommittee[] = [];

  ngOnInit() {
    this.filteredCommittees = this.pastCommittees;
  }

  filterByYear(year: string) {
    this.selectedYear = year;
    if (year === 'All') {
      this.filteredCommittees = this.pastCommittees;
    } else {
      this.filteredCommittees = this.pastCommittees.filter(committee => committee.year === year);
    }
  }

  getPositionColor(position: string): string {
    const colors: { [key: string]: string } = {
      'President': 'from-yellow-400 to-yellow-600',
      'Secretary': 'from-blue-400 to-blue-600',
      'Treasurer': 'from-green-400 to-green-600',
      'Cultural Secretary': 'from-pink-400 to-pink-600',
      'Sports Secretary': 'from-orange-400 to-orange-600',
      'Welfare Secretary': 'from-red-400 to-red-600',
      'Joint Secretary': 'from-purple-400 to-purple-600'
    };
    return colors[position] || 'from-gray-400 to-gray-600';
  }

  getPositionIcon(position: string): string {
    const icons: { [key: string]: string } = {
      'President': 'account_circle',
      'Secretary': 'edit_document',
      'Treasurer': 'account_balance_wallet',
      'Cultural Secretary': 'theater_comedy',
      'Sports Secretary': 'sports',
      'Welfare Secretary': 'volunteer_activism',
      'Joint Secretary': 'group_add'
    };
    return icons[position] || 'person';
  }
}
