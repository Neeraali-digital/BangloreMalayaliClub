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
              HOME
            </a>

            <!-- EVENTS & PROGRAMS Dropdown -->
            <div class="relative group">
              <button class="nav-link font-medium transition-colors duration-300 flex items-center"
                      [class.text-white]="!isScrolled"
                      [class.text-gray-700]="isScrolled"
                      [class.hover:text-kerala-gold]="isScrolled"
                      [class.hover:text-yellow-300]="!isScrolled">
                EVENTS & PROGRAMS
                <span class="material-icons text-sm ml-1">expand_more</span>
              </button>
              <div class="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a routerLink="/events/upcoming" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">UP COMING EVENTS</a>
                <a routerLink="/events/past" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">PAST EVENTS</a>
                <a routerLink="/events/charity" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">CHARITY & BLOOD DONATION</a>
                <a routerLink="/events/sports" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">SPORTS</a>
              </div>
            </div>

            <a routerLink="/well-wisher"
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              WELL WISHER & SUPPORTERS
            </a>

            <!-- MEMBERSHIP Dropdown -->
            <div class="relative group">
              <button class="nav-link font-medium transition-colors duration-300 flex items-center"
                      [class.text-white]="!isScrolled"
                      [class.text-gray-700]="isScrolled"
                      [class.hover:text-kerala-gold]="isScrolled"
                      [class.hover:text-yellow-300]="!isScrolled">
                MEMBERSHIP
                <span class="material-icons text-sm ml-1">expand_more</span>
              </button>
              <div class="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a routerLink="/membership/form" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">MEMBERSHIP FORM</a>
                <a routerLink="/membership/existing" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">EXISTING MEMBERS</a>
              </div>
            </div>

            <!-- COMMITTEE Dropdown -->
            <div class="relative group">
              <button class="nav-link font-medium transition-colors duration-300 flex items-center"
                      [class.text-white]="!isScrolled"
                      [class.text-gray-700]="isScrolled"
                      [class.hover:text-kerala-gold]="isScrolled"
                      [class.hover:text-yellow-300]="!isScrolled">
                COMMITTEE
                <span class="material-icons text-sm ml-1">expand_more</span>
              </button>
              <div class="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <a routerLink="/committee/executive" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">EXECUTIVE COMMITTEE</a>
                <a routerLink="/committee/sub" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">SUB COMMITTEE</a>
                <a routerLink="/committee/past" class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300">PAST COMMITTEE</a>
              </div>
            </div>

            <a routerLink="/contact"
               class="nav-link font-medium transition-colors duration-300"
               [class.text-white]="!isScrolled"
               [class.text-gray-700]="isScrolled"
               [class.hover:text-kerala-gold]="isScrolled"
               [class.hover:text-yellow-300]="!isScrolled">
              CONTACT US
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
             [class.max-h-screen]="isMobileMenuOpen"
             [class.bg-white]="isScrolled || isMobileMenuOpen"
             [class.shadow-lg]="isMobileMenuOpen">
          <div class="py-4 space-y-2">
            <a routerLink="/"
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              HOME
            </a>

            <!-- Mobile EVENTS & PROGRAMS -->
            <div>
              <button class="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
                      (click)="toggleMobileDropdown('events')">
                EVENTS & PROGRAMS
                <span class="material-icons text-sm">{{ mobileDropdowns['events'] ? 'expand_less' : 'expand_more' }}</span>
              </button>
              <div class="ml-4 space-y-1" [class.hidden]="!mobileDropdowns['events']">
                <a routerLink="/events/upcoming" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">UP COMING EVENTS</a>
                <a routerLink="/events/past" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">PAST EVENTS</a>
                <a routerLink="/events/charity" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">CHARITY & BLOOD DONATION</a>
                <a routerLink="/events/sports" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">SPORTS</a>
              </div>
            </div>

            <a routerLink="/well-wisher"
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              WELL WISHER & SUPPORTERS
            </a>

            <!-- Mobile MEMBERSHIP -->
            <div>
              <button class="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
                      (click)="toggleMobileDropdown('membership')">
                MEMBERSHIP
                <span class="material-icons text-sm">{{ mobileDropdowns['membership'] ? 'expand_less' : 'expand_more' }}</span>
              </button>
              <div class="ml-4 space-y-1" [class.hidden]="!mobileDropdowns['membership']">
                <a routerLink="/membership/form" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">MEMBERSHIP FORM</a>
                <a routerLink="/membership/existing" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">EXISTING MEMBERS</a>
              </div>
            </div>

            <!-- Mobile COMMITTEE -->
            <div>
              <button class="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
                      (click)="toggleMobileDropdown('committee')">
                COMMITTEE
                <span class="material-icons text-sm">{{ mobileDropdowns['committee'] ? 'expand_less' : 'expand_more' }}</span>
              </button>
              <div class="ml-4 space-y-1" [class.hidden]="!mobileDropdowns['committee']">
                <a routerLink="/committee/executive" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">EXECUTIVE COMMITTEE</a>
                <a routerLink="/committee/sub" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">SUB COMMITTEE</a>
                <a routerLink="/committee/past" class="block px-4 py-2 text-gray-600 hover:bg-kerala-gold hover:text-white transition-colors duration-300" (click)="closeMobileMenu()">PAST COMMITTEE</a>
              </div>
            </div>

            <a routerLink="/contact"
               class="block px-4 py-2 text-gray-700 hover:bg-kerala-gold hover:text-white transition-colors duration-300"
               (click)="closeMobileMenu()">
              CONTACT US
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
  mobileDropdowns: { [key: string]: boolean } = {
    events: false,
    membership: false,
    committee: false
  };

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
    // Reset all mobile dropdowns when closing menu
    Object.keys(this.mobileDropdowns).forEach(key => {
      this.mobileDropdowns[key] = false;
    });
  }

  toggleMobileDropdown(dropdown: string) {
    this.mobileDropdowns[dropdown] = !this.mobileDropdowns[dropdown];
  }
}
