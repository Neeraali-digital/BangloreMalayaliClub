import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-theme-primary to-theme-accent">
      <div class="container-custom text-center text-theme-on-primary">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">
          Discover the story of Bengaluru Malayali Club and our mission to preserve Kerala's rich cultural heritage
        </p>
      </div>
    </section>

    <!-- History Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-theme-on-background mb-6">Our Story</h2>
            <p class="text-lg text-theme-on-background mb-6">
              Founded in 1985, the Bengaluru Malayali Club has been a cornerstone of the Malayalam community in the Garden City for over three decades. What started as a small gathering of homesick Malayalis has grown into one of the most vibrant cultural organizations in Bengaluru.
            </p>
            <p class="text-lg text-theme-on-background mb-6">
              Our club was born from the desire to maintain our cultural roots while embracing the cosmopolitan spirit of Bengaluru. We provide a home away from home for thousands of Malayali families living in the city.
            </p>
            <div class="flex items-center space-x-4">
              <div class="text-center">
                <div class="text-3xl font-bold text-theme-primary">35+</div>
                <div class="text-sm text-theme-on-background">Years of Service</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-theme-primary">2000+</div>
                <div class="text-sm text-theme-on-background">Active Members</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-theme-primary">50+</div>
                <div class="text-sm text-theme-on-background">Annual Events</div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="bg-theme-accent rounded-lg p-8 text-theme-on-primary">
              <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
              <p class="mb-4">
                To preserve, promote, and celebrate the rich cultural heritage of Kerala while fostering unity and fellowship among the Malayali community in Bengaluru.
              </p>
              <h3 class="text-2xl font-bold mb-4">Our Vision</h3>
              <p>
                To be the premier cultural organization that bridges tradition with modernity, creating lasting bonds within the Malayali diaspora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-theme-background">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-theme-on-background mb-4">Our Values</h2>
          <p class="text-xl text-theme-on-background max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-2xl">favorite</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Unity</h3>
            <p class="text-theme-on-background">Bringing together Malayalis from all walks of life</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-2xl">account_balance</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Tradition</h3>
            <p class="text-theme-on-background">Preserving our rich cultural heritage</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-2xl">diversity_3</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Inclusion</h3>
            <p class="text-theme-on-background">Welcoming everyone with open arms</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-2xl">trending_up</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Growth</h3>
            <p class="text-theme-on-background">Evolving while staying true to our roots</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-theme-on-background mb-4">Leadership Team</h2>
          <p class="text-xl text-theme-on-background max-w-2xl mx-auto">
            Meet the dedicated individuals who guide our community
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-6 text-center">
            <div class="w-24 h-24 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-3xl">person</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Rajesh Kumar</h3>
            <p class="text-theme-primary font-medium mb-2">President</p>
            <p class="text-theme-on-background text-sm">Leading the club with vision and dedication for over 5 years</p>
          </div>

          <div class="card p-6 text-center">
            <div class="w-24 h-24 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-3xl">person</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Priya Nair</h3>
            <p class="text-theme-primary font-medium mb-2">Vice President</p>
            <p class="text-theme-on-background text-sm">Passionate about cultural programs and community outreach</p>
          </div>

          <div class="card p-6 text-center">
            <div class="w-24 h-24 bg-theme-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="material-icons text-theme-on-primary text-3xl">person</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Suresh Menon</h3>
            <p class="text-theme-primary font-medium mb-2">Secretary</p>
            <p class="text-theme-on-background text-sm">Ensuring smooth operations and member engagement</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}