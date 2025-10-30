import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         [class.bg-white]="isScrolled"
         [class.shadow-lg]="isScrolled"
         [class.bg-transparent]="!isScrolled">
      <div class="container-custom">
        <div class="flex items-center justify-between h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 lg:w-12 lg:h-12 bg-kerala-gold rounded-full flex items-center justify-center">
              <span class="material-icons text-white text-xl lg:text-2xl">account_balance</span>
            </div>
            <div class="text-lg lg:text-xl font-bold"
                 [class.text-white]="!isScrolled"
                 [class.text-gray-900]="isScrolled">
              BMC
            </div>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" 
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              Home
            </a>
            <a routerLink="/about" 
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              About
            </a>
            <a routerLink="/events" 
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              Events
            </a>
            <a routerLink="/gallery" 
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              Gallery
            </a>
            <a routerLink="/contact" 
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              Contact
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden p-2 rounded-lg"
                  [class.text-white]="!isScrolled"
                  [class.text-gray-700]="isScrolled"
                  (click)="toggleMobileMenu()">
            <span class="material-icons text-2xl">
              {{ isMobileMenuOpen ? 'close' : 'menu' }}
            </span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden transition-all duration-300 overflow-hidden"
             [class.max-h-0]="!isMobileMenuOpen"
             [class.max-h-96]="isMobileMenuOpen"
             [class.bg-white]="isScrolled || isMobileMenuOpen"
             [class.shadow-lg]="isMobileMenuOpen">
          <div class="py-4 space-y-2">
            <a routerLink="/" 
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              Home
            </a>
            <a routerLink="/about" 
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              About
            </a>
            <a routerLink="/events" 
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              Events
            </a>
            <a routerLink="/gallery" 
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              Gallery
            </a>
            <a routerLink="/contact" 
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}