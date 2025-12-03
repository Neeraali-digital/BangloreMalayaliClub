import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Supporter {
  id: number;
  name: string;
  type: 'Individual' | 'Business' | 'Organization';
  category: 'Gold' | 'Silver' | 'Bronze' | 'Patron';
  description: string;
  logo?: string;
  website?: string;
  contact: string;
  supportSince: string;
  contributions: string[];
}

@Component({
  selector: 'app-well-wisher-supporters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './well-wisher-supporters.component.html',
  styleUrls: ['./well-wisher-supporters.component.scss']
})
export class WellWisherSupportersComponent implements OnInit {
  supporters: Supporter[] = [
    {
      id: 1,
      name: 'Kerala Cultural Foundation',
      type: 'Organization',
      category: 'Patron',
      description: 'A premier organization dedicated to preserving and promoting Kerala culture and arts across the globe.',
      logo: 'kcf-logo.png',
      website: 'https://keralaculture.org',
      contact: 'info@keralaculture.org',
      supportSince: '2020',
      contributions: [
        'Annual cultural event sponsorship',
        'Traditional art workshop funding',
        'Cultural exchange program support'
      ]
    },
    {
      id: 2,
      name: 'Malayali Business Network',
      type: 'Business',
      category: 'Gold',
      description: 'A network of successful Malayali entrepreneurs supporting community development and business growth.',
      logo: 'mbn-logo.png',
      website: 'https://malayalibusiness.in',
      contact: 'contact@malayalibusiness.in',
      supportSince: '2021',
      contributions: [
        'Youth entrepreneurship program',
        'Business mentorship initiatives',
        'Skill development workshops'
      ]
    },
    {
      id: 3,
      name: 'Dr. Rajan Philip',
      type: 'Individual',
      category: 'Gold',
      description: 'Renowned cardiologist and philanthropist who has been supporting medical camps and health awareness programs.',
      contact: 'dr.rajan@hospital.com',
      supportSince: '2019',
      contributions: [
        'Free medical camp sponsorship',
        'Health awareness seminars',
        'Medical equipment donations'
      ]
    },
    {
      id: 4,
      name: 'TechSolutions India',
      type: 'Business',
      category: 'Silver',
      description: 'Leading IT solutions provider committed to digital transformation and education technology.',
      logo: 'techsolutions-logo.png',
      website: 'https://techsolutions.in',
      contact: 'support@techsolutions.in',
      supportSince: '2022',
      contributions: [
        'Digital literacy programs',
        'IT training for youth',
        'Technology infrastructure support'
      ]
    },
    {
      id: 5,
      name: 'Priya & Family Charitable Trust',
      type: 'Organization',
      category: 'Silver',
      description: 'Family-run charitable trust focused on education and welfare of underprivileged children.',
      contact: 'trust@priyafamily.org',
      supportSince: '2021',
      contributions: [
        'Education scholarship program',
        'School supplies distribution',
        'Mid-day meal sponsorship'
      ]
    },
    {
      id: 6,
      name: 'Green Kerala Initiative',
      type: 'Organization',
      category: 'Bronze',
      description: 'Environmental organization working towards sustainable development and ecological conservation.',
      logo: 'greenkerala-logo.png',
      website: 'https://greenkerala.org',
      contact: 'info@greenkerala.org',
      supportSince: '2023',
      contributions: [
        'Tree plantation drives',
        'Environmental awareness campaigns',
        'Sustainable living workshops'
      ]
    },
    {
      id: 7,
      name: 'Arjun Menon & Associates',
      type: 'Business',
      category: 'Bronze',
      description: 'Legal consultancy firm providing pro-bono services and legal awareness programs.',
      contact: 'arjun@menonlegal.com',
      supportSince: '2022',
      contributions: [
        'Legal aid clinic',
        'Legal awareness workshops',
        'Pro-bono legal services'
      ]
    },
    {
      id: 8,
      name: 'Sunrise Publications',
      type: 'Business',
      category: 'Bronze',
      description: 'Publishing house specializing in Malayalam literature and educational materials.',
      logo: 'sunrise-logo.png',
      website: 'https://sunrisepub.in',
      contact: 'info@sunrisepub.in',
      supportSince: '2023',
      contributions: [
        'Library book donations',
        'Literary competitions',
        'Reading programs for children'
      ]
    }
  ];

  filteredSupporters: Supporter[] = [];
  selectedCategory: string = 'All';
  selectedType: string = 'All';

  ngOnInit() {
    this.filteredSupporters = this.supporters;
  }

  filterSupporters(category: string, type: string) {
    this.selectedCategory = category;
    this.selectedType = type;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.supporters;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(supporter => supporter.category === this.selectedCategory);
    }

    // Filter by type
    if (this.selectedType !== 'All') {
      filtered = filtered.filter(supporter => supporter.type === this.selectedType);
    }

    this.filteredSupporters = filtered;
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Patron': 'from-theme-primary to-theme-accent',
      'Gold': 'from-theme-warn to-orange-600',
      'Silver': 'from-theme-accent to-blue-600',
      'Bronze': 'from-theme-primary to-red-700'
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  }

  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Patron': 'star',
      'Gold': 'workspace_premium',
      'Silver': 'military_tech',
      'Bronze': 'emoji_events'
    };
    return icons[category] || 'verified';
  }

  getTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'Individual': 'person',
      'Business': 'business',
      'Organization': 'groups'
    };
    return icons[type] || 'group';
  }

  getSupporterInitials(name: string): string {
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  }
}
