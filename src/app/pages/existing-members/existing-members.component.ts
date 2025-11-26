import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Member {
  id: number;
  firstName: string;
  lastName: string;
  membershipId: string;
  membershipType: 'Individual' | 'Family' | 'Student' | 'Senior Citizen';
  joinDate: string;
  email: string;
  phone: string;
  city: string;
  occupation: string;
  status: 'Active' | 'Inactive';
  profileImage?: string;
}

@Component({
  selector: 'app-existing-members',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './existing-members.component.html',
  styleUrls: ['./existing-members.component.scss']
})
export class ExistingMembersComponent implements OnInit {
  members: Member[] = [
    {
      id: 1,
      firstName: 'Rajesh',
      lastName: 'Kumar',
      membershipId: 'BMC2024001',
      membershipType: 'Individual',
      joinDate: '2023-01-15',
      email: 'rajesh.kumar@email.com',
      phone: '+91 9876543210',
      city: 'Bangalore',
      occupation: 'Software Engineer',
      status: 'Active'
    },
    {
      id: 2,
      firstName: 'Priya',
      lastName: 'Nair',
      membershipId: 'BMC2024002',
      membershipType: 'Family',
      joinDate: '2023-02-20',
      email: 'priya.nair@email.com',
      phone: '+91 9876543211',
      city: 'Bangalore',
      occupation: 'Teacher',
      status: 'Active'
    },
    {
      id: 3,
      firstName: 'Arun',
      lastName: 'Menon',
      membershipId: 'BMC2024003',
      membershipType: 'Individual',
      joinDate: '2023-03-10',
      email: 'arun.menon@email.com',
      phone: '+91 9876543212',
      city: 'Bangalore',
      occupation: 'Doctor',
      status: 'Active'
    },
    {
      id: 4,
      firstName: 'Meera',
      lastName: 'Iyer',
      membershipId: 'BMC2024004',
      membershipType: 'Student',
      joinDate: '2023-04-05',
      email: 'meera.iyer@email.com',
      phone: '+91 9876543213',
      city: 'Bangalore',
      occupation: 'Student',
      status: 'Active'
    },
    {
      id: 5,
      firstName: 'Vijay',
      lastName: 'Pillai',
      membershipId: 'BMC2024005',
      membershipType: 'Senior Citizen',
      joinDate: '2023-05-12',
      email: 'vijay.pillai@email.com',
      phone: '+91 9876543214',
      city: 'Bangalore',
      occupation: 'Retired',
      status: 'Active'
    },
    {
      id: 6,
      firstName: 'Anjali',
      lastName: 'Ravi',
      membershipId: 'BMC2024006',
      membershipType: 'Individual',
      joinDate: '2023-06-18',
      email: 'anjali.ravi@email.com',
      phone: '+91 9876543215',
      city: 'Bangalore',
      occupation: 'Business Analyst',
      status: 'Active'
    },
    {
      id: 7,
      firstName: 'Suresh',
      lastName: 'Nambiar',
      membershipId: 'BMC2024007',
      membershipType: 'Family',
      joinDate: '2023-07-22',
      email: 'suresh.nambiar@email.com',
      phone: '+91 9876543216',
      city: 'Bangalore',
      occupation: 'Manager',
      status: 'Inactive'
    },
    {
      id: 8,
      firstName: 'Kavita',
      lastName: 'Sharma',
      membershipId: 'BMC2024008',
      membershipType: 'Individual',
      joinDate: '2023-08-30',
      email: 'kavita.sharma@email.com',
      phone: '+91 9876543217',
      city: 'Bangalore',
      occupation: 'Designer',
      status: 'Active'
    }
  ];

  filteredMembers: Member[] = [];
  selectedType: string = 'All';
  searchTerm: string = '';

  ngOnInit() {
    this.filteredMembers = this.members;
  }

  filterMembers(type: string) {
    this.selectedType = type;
    this.applyFilters();
  }

  onSearchChange() {
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.members;

    // Filter by membership type
    if (this.selectedType !== 'All') {
      filtered = filtered.filter(member => member.membershipType === this.selectedType);
    }

    // Filter by search term
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(member =>
        member.firstName.toLowerCase().includes(term) ||
        member.lastName.toLowerCase().includes(term) ||
        member.membershipId.toLowerCase().includes(term) ||
        member.email.toLowerCase().includes(term) ||
        member.occupation.toLowerCase().includes(term)
      );
    }

    this.filteredMembers = filtered;
  }

  getMembershipTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'Individual': 'bg-theme-primary/10 text-theme-primary',
      'Family': 'bg-theme-accent/10 text-theme-accent',
      'Student': 'bg-purple-500/10 text-purple-500',
      'Senior Citizen': 'bg-theme-warn/10 text-theme-warn'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  }

  getStatusColor(status: string): string {
    return status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500';
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  getFamilyCount(): number {
    return this.members.filter(m => m.membershipType === 'Family').length;
  }

  getStudentCount(): number {
    return this.members.filter(m => m.membershipType === 'Student').length;
  }

  getSeniorCitizenCount(): number {
    return this.members.filter(m => m.membershipType === 'Senior Citizen').length;
  }
}
