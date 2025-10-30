import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-kerala-water via-blue-600 to-kerala-green">
      <!-- Kerala Hero Image -->
      <img src="assets/images/kerala.jpg" alt="Kerala Backwaters" class="absolute inset-0 w-full h-full object-cover opacity-50" style="z-index:1;" />

      <!-- Animated Background Elements -->
      <div class="absolute inset-0 z-2">
        <div class="floating-element absolute top-20 left-10 w-20 h-20 opacity-20">
          <svg viewBox="0 0 100 100" class="w-full h-full text-kerala-gold">
            <circle cx="50" cy="50" r="40" fill="currentColor"/>
          </svg>
        </div>
        <div class="floating-element absolute top-40 right-20 w-16 h-16 opacity-15">
          <svg viewBox="0 0 100 100" class="w-full h-full text-yellow-300">
            <polygon points="50,10 90,90 10,90" fill="currentColor"/>
          </svg>
        </div>
        <div class="floating-element absolute bottom-32 left-1/4 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" class="w-full h-full text-white">
            <rect x="25" y="25" width="50" height="50" fill="currentColor" rx="10"/>
          </svg>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span style="font-family: 'Noto Sans Malayalam', sans-serif; color: #ffd700;">സ്വാഗതം</span> Bengaluru Malayali Club
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up" style="animation-delay: 0.2s;">
          Preserving Kerala's Rich Heritage in the Garden City
        </p>
        <p class="text-lg md:text-xl mb-4 opacity-80 animate-fade-in-up" style="animation-delay: 0.4s;">
          Join our vibrant community celebrating Malayalam culture, traditions, and fellowship
        </p>
        <div class="mb-8 animate-fade-in-up" style="animation-delay: 0.5s;">
          <span class="text-3xl font-bold text-kerala-gold">{{ memberCount | number }}+</span>
          <span class="text-lg ml-2">Members Strong</span>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style="animation-delay: 0.6s;">
          <button routerLink="/about" class="btn-primary">
            Learn More
          </button>
          <button routerLink="/events" class="btn-secondary">
            Upcoming Events
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <span class="material-icons text-white text-3xl opacity-70">keyboard_arrow_down</span>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the best of Kerala culture and community in Bengaluru
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-kerala-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="material-icons text-white text-2xl">celebration</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Cultural Events</h3>
            <p class="text-gray-600">
              Celebrate Onam, Vishu, and other Kerala festivals with traditional programs and performances.
            </p>
          </div>

          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-kerala-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="material-icons text-white text-2xl">groups</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Community Network</h3>
            <p class="text-gray-600">
              Connect with fellow Malayalis, build friendships, and create lasting memories together.
            </p>
          </div>

          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-kerala-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="material-icons text-white text-2xl">school</span>
            </div>
            <h3 class="text-xl font-semibold mb-4">Cultural Learning</h3>
            <p class="text-gray-600">
              Learn Malayalam, classical arts, and preserve our rich cultural heritage for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-kerala-gold">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Join Our Community?
        </h2>
        <p class="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Become a member today and be part of Bengaluru's most vibrant Malayali community
        </p>
        <button routerLink="/contact" class="bg-white text-kerala-gold hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Join Now
        </button>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  memberCount: number = 100000;

  ngOnInit() {
    // Add scroll animations
    this.observeElements();
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    });

    // Observe elements for animation
    setTimeout(() => {
      const elements = document.querySelectorAll('.card');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}