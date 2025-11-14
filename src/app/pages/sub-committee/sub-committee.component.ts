import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SubCommittee {
  id: number;
  name: string;
  description: string;
  chairperson: string;
  members: string[];
  focusArea: string;
  meetingSchedule: string;
  achievements: string[];
  contactEmail: string;
}

@Component({
  selector: 'app-sub-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-committee.component.html',
  styleUrls: ['./sub-committee.component.scss']
})
export class SubCommitteeComponent implements OnInit {
  subCommittees: SubCommittee[] = [
    {
      id: 1,
      name: 'Cultural Events Committee',
      description: 'Responsible for organizing and managing all cultural events, festivals, and traditional celebrations of the Malayali community.',
      chairperson: 'Anjali Ravi',
      members: ['Priya Menon', 'Vijay Iyer', 'Meera Pillai', 'Suresh Nambiar'],
      focusArea: 'Cultural Preservation',
      meetingSchedule: 'First Monday of every month',
      achievements: [
        'Organized 15+ cultural events in 2024',
        'Established traditional art workshops',
        'Promoted Malayalam language and literature'
      ],
      contactEmail: 'cultural@bmc.org'
    },
    {
      id: 2,
      name: 'Sports & Recreation Committee',
      description: 'Manages all sports activities, tournaments, and recreational programs to promote physical fitness and team spirit.',
      chairperson: 'Suresh Nambiar',
      members: ['Arun Nair', 'Kavita Sharma', 'Rajesh Kumar', 'Vijay Iyer'],
      focusArea: 'Sports Development',
      meetingSchedule: 'Second Tuesday of every month',
      achievements: [
        'Organized annual sports meet with 500+ participants',
        'Established weekly training sessions',
        'Promoted youth sports participation'
      ],
      contactEmail: 'sports@bmc.org'
    },
    {
      id: 3,
      name: 'Charity & Welfare Committee',
      description: 'Coordinates charitable activities, blood donation camps, and welfare programs for the underprivileged community members.',
      chairperson: 'Kavita Sharma',
      members: ['Priya Menon', 'Meera Pillai', 'Arun Nair', 'Anjali Ravi'],
      focusArea: 'Community Welfare',
      meetingSchedule: 'Third Wednesday of every month',
      achievements: [
        'Collected 200+ units of blood',
        'Distributed relief to 1000+ families',
        'Established education support program'
      ],
      contactEmail: 'welfare@bmc.org'
    },
    {
      id: 4,
      name: 'Membership & Outreach Committee',
      description: 'Handles membership drives, community outreach programs, and maintains relationships with members and external organizations.',
      chairperson: 'Arun Nair',
      members: ['Vijay Iyer', 'Suresh Nambiar', 'Rajesh Kumar', 'Priya Menon'],
      focusArea: 'Community Engagement',
      meetingSchedule: 'Fourth Thursday of every month',
      achievements: [
        'Increased membership by 30%',
        'Established partnerships with 10+ organizations',
        'Improved member engagement through events'
      ],
      contactEmail: 'membership@bmc.org'
    },
    {
      id: 5,
      name: 'Education & Youth Development Committee',
      description: 'Focuses on educational programs, youth development initiatives, and skill-building workshops for the younger generation.',
      chairperson: 'Meera Pillai',
      members: ['Anjali Ravi', 'Kavita Sharma', 'Vijay Iyer', 'Priya Menon'],
      focusArea: 'Youth Empowerment',
      meetingSchedule: 'First Saturday of every month',
      achievements: [
        'Conducted 50+ skill development workshops',
        'Supported 200+ students with educational materials',
        'Organized career guidance programs'
      ],
      contactEmail: 'education@bmc.org'
    },
    {
      id: 6,
      name: 'IT & Communications Committee',
      description: 'Manages digital presence, communications, and technology infrastructure to keep the community connected and informed.',
      chairperson: 'Vijay Iyer',
      members: ['Arun Nair', 'Suresh Nambiar', 'Rajesh Kumar', 'Anjali Ravi'],
      focusArea: 'Digital Transformation',
      meetingSchedule: 'Second Friday of every month',
      achievements: [
        'Developed comprehensive website and app',
        'Established social media presence with 5000+ followers',
        'Implemented digital membership system'
      ],
      contactEmail: 'it@bmc.org'
    }
  ];

  ngOnInit() {
    // Component initialization logic
  }

  getFocusAreaColor(focusArea: string): string {
    const colors: { [key: string]: string } = {
      'Cultural Preservation': 'bg-pink-100 text-pink-800',
      'Sports Development': 'bg-orange-100 text-orange-800',
      'Community Welfare': 'bg-red-100 text-red-800',
      'Community Engagement': 'bg-blue-100 text-blue-800',
      'Youth Empowerment': 'bg-green-100 text-green-800',
      'Digital Transformation': 'bg-purple-100 text-purple-800'
    };
    return colors[focusArea] || 'bg-gray-100 text-gray-800';
  }

  getFocusAreaIcon(focusArea: string): string {
    const icons: { [key: string]: string } = {
      'Cultural Preservation': 'theater_comedy',
      'Sports Development': 'sports',
      'Community Welfare': 'volunteer_activism',
      'Community Engagement': 'groups',
      'Youth Empowerment': 'school',
      'Digital Transformation': 'computer'
    };
    return icons[focusArea] || 'group_work';
  }
}
