import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-kerala-coconut to-kerala-gold">
      <div class="container-custom text-center text-white">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">
          Relive the beautiful moments from our events and celebrations
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-white shadow-sm">
      <div class="container-custom">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            *ngFor="let category of categories"
            (click)="filterGallery(category)"
            [class.bg-kerala-gold]="selectedCategory === category"
            [class.text-white]="selectedCategory === category"
            [class.bg-gray-200]="selectedCategory !== category"
            [class.text-gray-700]="selectedCategory !== category"
            class="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md">
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            *ngFor="let item of filteredGallery; let i = index"
            class="group cursor-pointer"
            (click)="openLightbox(i)">
            <div class="card overflow-hidden">
              <div class="aspect-square bg-gradient-to-br from-kerala-gold to-kerala-green flex items-center justify-center relative overflow-hidden">
                <!-- Placeholder for actual images -->
                <div class="absolute inset-0 bg-gradient-to-br from-kerala-gold via-yellow-400 to-kerala-green opacity-80"></div>
                <div class="relative z-10 text-center text-white">
                  <span class="material-icons text-4xl mb-2">{{ getGalleryIcon(item.category) }}</span>
                  <p class="text-sm font-medium">{{ item.category }}</p>
                </div>
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span class="material-icons text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">zoom_in</span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="font-semibold text-gray-900 mb-1">{{ item.title }}</h3>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="filteredGallery.length === 0" class="text-center py-16">
          <span class="material-icons text-gray-400 text-6xl mb-4">photo_library</span>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
          <p class="text-gray-500">Try selecting a different category</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      *ngIf="showLightbox"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      (click)="closeLightbox()">
      <div class="relative max-w-4xl max-h-full">
        <button 
          class="absolute -top-12 right-0 text-white hover:text-kerala-gold transition-colors"
          (click)="closeLightbox()">
          <span class="material-icons text-3xl">close</span>
        </button>
        
        <div class="bg-white rounded-lg overflow-hidden">
          <div class="aspect-video bg-gradient-to-br from-kerala-gold to-kerala-green flex items-center justify-center">
            <div class="text-center text-white">
              <span class="material-icons text-8xl mb-4">{{ getGalleryIcon(currentImage?.category || '') }}</span>
              <h3 class="text-2xl font-bold">{{ currentImage?.title }}</h3>
            </div>
          </div>
          <div class="p-6">
            <p class="text-gray-600">{{ currentImage?.description }}</p>
            <div class="flex justify-between items-center mt-4">
              <span class="bg-kerala-gold text-white text-sm px-3 py-1 rounded-full">{{ currentImage?.category }}</span>
              <div class="flex space-x-2">
                <button 
                  (click)="previousImage(); $event.stopPropagation()"
                  class="p-2 bg-gray-100 hover:bg-kerala-gold hover:text-white rounded-full transition-colors">
                  <span class="material-icons">chevron_left</span>
                </button>
                <button 
                  (click)="nextImage(); $event.stopPropagation()"
                  class="p-2 bg-gray-100 hover:bg-kerala-gold hover:text-white rounded-full transition-colors">
                  <span class="material-icons">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .aspect-square {
      aspect-ratio: 1 / 1;
    }
    .aspect-video {
      aspect-ratio: 16 / 9;
    }
  `]
})
export class GalleryComponent implements OnInit {
  categories = ['All', 'Onam', 'Cultural', 'Sports', 'Social', 'Workshops'];
  selectedCategory = 'All';
  showLightbox = false;
  currentImageIndex = 0;
  currentImage: GalleryItem | null = null;

  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Onam Celebration 2023',
      category: 'Onam',
      image: 'onam-2023.jpg',
      description: 'Grand Onam celebration with traditional Sadhya and cultural programs'
    },
    {
      id: 2,
      title: 'Kathakali Performance',
      category: 'Cultural',
      image: 'kathakali.jpg',
      description: 'Mesmerizing Kathakali performance by renowned artists'
    },
    {
      id: 3,
      title: 'Boat Race Championship',
      category: 'Sports',
      image: 'boat-race.jpg',
      description: 'Exciting boat race competition at Ulsoor Lake'
    },
    {
      id: 4,
      title: 'Family Picnic',
      category: 'Social',
      image: 'picnic.jpg',
      description: 'Fun-filled family picnic at Lalbagh Gardens'
    },
    {
      id: 5,
      title: 'Malayalam Workshop',
      category: 'Workshops',
      image: 'workshop.jpg',
      description: 'Malayalam language learning workshop for children'
    },
    {
      id: 6,
      title: 'Thiruvathira Dance',
      category: 'Cultural',
      image: 'thiruvathira.jpg',
      description: 'Beautiful Thiruvathira dance performance by club members'
    },
    {
      id: 7,
      title: 'Pookalam Competition',
      category: 'Onam',
      image: 'pookalam.jpg',
      description: 'Colorful Pookalam competition during Onam festivities'
    },
    {
      id: 8,
      title: 'Youth Meet',
      category: 'Social',
      image: 'youth-meet.jpg',
      description: 'Annual youth meet with games and cultural activities'
    },
    {
      id: 9,
      title: 'Cooking Workshop',
      category: 'Workshops',
      image: 'cooking.jpg',
      description: 'Traditional Kerala cooking workshop for members'
    },
    {
      id: 10,
      title: 'Mohiniyattam Performance',
      category: 'Cultural',
      image: 'mohiniyattam.jpg',
      description: 'Graceful Mohiniyattam dance performance'
    },
    {
      id: 11,
      title: 'Cricket Tournament',
      category: 'Sports',
      image: 'cricket.jpg',
      description: 'Annual cricket tournament between club teams'
    },
    {
      id: 12,
      title: 'Vishu Celebration',
      category: 'Cultural',
      image: 'vishu.jpg',
      description: 'Traditional Vishu celebration with Kani and feast'
    }
  ];

  filteredGallery: GalleryItem[] = [];

  ngOnInit() {
    this.filteredGallery = this.galleryItems;
  }

  filterGallery(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredGallery = this.galleryItems;
    } else {
      this.filteredGallery = this.galleryItems.filter(item => item.category === category);
    }
  }

  getGalleryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Onam': 'celebration',
      'Cultural': 'theater_comedy',
      'Sports': 'sports',
      'Social': 'groups',
      'Workshops': 'school'
    };
    return icons[category] || 'photo';
  }

  openLightbox(index: number) {
    this.currentImageIndex = index;
    this.currentImage = this.filteredGallery[index];
    this.showLightbox = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showLightbox = false;
    this.currentImage = null;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    if (this.currentImageIndex < this.filteredGallery.length - 1) {
      this.currentImageIndex++;
      this.currentImage = this.filteredGallery[this.currentImageIndex];
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
      this.currentImage = this.filteredGallery[this.currentImageIndex];
    }
  }
}