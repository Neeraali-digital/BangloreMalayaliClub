import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ScrollAnimationDirective],
  template: `
    <!-- Hero Section -->
    <section class="pt-24 pb-16 bg-gradient-to-r from-theme-primary to-theme-accent">
      <div class="container-custom text-center text-theme-on-primary" app-scroll-animation>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p class="text-xl opacity-90 max-w-2xl mx-auto">
          Get in touch with us for membership, events, or any queries
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding">
      <div class="container-custom" app-scroll-animation>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-theme-on-background mb-6">Send us a Message</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-theme-on-background mb-2">First Name *</label>
                  <input 
                    type="text" 
                    formControlName="firstName"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-300"
                    [class.border-red-500]="contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched">
                  <div *ngIf="contactForm.get('firstName')?.invalid && contactForm.get('firstName')?.touched" 
                       class="text-red-500 text-sm mt-1">
                    First name is required
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-theme-on-background mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    formControlName="lastName"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-300"
                    [class.border-red-500]="contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched">
                  <div *ngIf="contactForm.get('lastName')?.invalid && contactForm.get('lastName')?.touched" 
                       class="text-red-500 text-sm mt-1">
                    Last name is required
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-theme-on-background mb-2">Email *</label>
                <input 
                  type="email" 
                  formControlName="email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-300"
                  [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched">
                <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                  <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-theme-on-background mb-2">Phone</label>
                <input 
                  type="tel" 
                  formControlName="phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-300">
              </div>

              <div>
                <label class="block text-sm font-medium text-theme-on-background mb-2">Subject *</label>
                <select 
                  formControlName="subject"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-300"
                  [class.border-red-500]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched">
                  <option value="">Select a subject</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="events">Event Information</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                <div *ngIf="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  Please select a subject
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-theme-on-background mb-2">Message *</label>
                <textarea 
                  formControlName="message"
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all duration-300 resize-none"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"></textarea>
                <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" 
                     class="text-red-500 text-sm mt-1">
                  Message is required
                </div>
              </div>

              <button 
                type="submit" 
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                <span *ngSubmitting)="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting" class="flex items-center justify-center">
                  <span class="material-icons animate-spin mr-2">refresh</span>
                  Sending...
                </span>
              </button>
            </form>

            <div *ngIf="submitMessage" 
                 class="mt-4 p-4 rounded-lg"
                 [class.bg-green-100]="submitSuccess"
                 [class.text-green-700]="submitSuccess"
                 [class.bg-red-100]="!submitSuccess"
                 [class.text-red-700]="!submitSuccess">
              {{ submitMessage }}
            </div>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-theme-on-background mb-6">Get in Touch</h2>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="material-icons text-theme-on-primary">location_on</span>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-on-background mb-1">Address</h3>
                  <p class="text-theme-on-background">
                    BMC Community Hall<br>
                    Koramangala, Bengaluru<br>
                    Karnataka 560034
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="material-icons text-theme-on-primary">phone</span>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-on-background mb-1">Phone</h3>
                  <p class="text-theme-on-background">+91 98765 43210</p>
                  <p class="text-theme-on-background">+91 87654 32109</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="material-icons text-theme-on-primary">email</span>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-on-background mb-1">Email</h3>
                  <p class="text-theme-on-background">info&#64;bengalurumalayli.club</p>
                  <p class="text-theme-on-background">events&#64;bengalurumalayli.club</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="material-icons text-theme-on-primary">schedule</span>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-on-background mb-1">Office Hours</h3>
                  <p class="text-theme-on-background">
                    Monday - Friday: 10:00 AM - 6:00 PM<br>
                    Saturday: 10:00 AM - 2:00 PM<br>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="bg-theme-background rounded-lg h-64 flex items-center justify-center">
              <div class="text-center text-theme-on-background">
                <span class="material-icons text-4xl mb-2">map</span>
                <p>Interactive Map</p>
                <p class="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-theme-background">
      <div class="container-custom" app-scroll-animation>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-theme-on-background mb-4">Frequently Asked Questions</h2>
          <p class="text-xl text-theme-on-background max-w-2xl mx-auto">
            Find answers to common questions about our club
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div *ngFor="let faq of faqs; let i = index" class="card">
            <button 
              class="w-full p-6 text-left flex items-center justify-between"
              (click)="toggleFaq(i)">
              <h3 class="font-semibold text-theme-on-background">{{ faq.question }}</h3>
              <span class="material-icons text-theme-primary transition-transform duration-300"
                    [class.rotate-180]="faq.isOpen">
                expand_more
              </span>
            </button>
            <div class="overflow-hidden transition-all duration-300"
                 [class.max-h-0]="!faq.isOpen"
                 [class.max-h-96]="faq.isOpen">
              <div class="px-6 pb-6">
                <p class="text-theme-on-background">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .rotate-180 {
      transform: rotate(180deg);
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  faqs = [
    {
      question: 'How can I become a member of Bengaluru Malayali Club?',
      answer: 'You can become a member by filling out our membership form and paying the annual membership fee. Contact us for more details about membership benefits and requirements.',
      isOpen: false
    },
    {
      question: 'What events does the club organize?',
      answer: 'We organize various cultural events including Onam celebrations, Vishu, Malayalam language workshops, cultural performances, sports tournaments, and social gatherings throughout the year.',
      isOpen: false
    },
    {
      question: 'Can non-Malayalis join the club?',
      answer: 'Yes, our club welcomes everyone who is interested in Kerala culture and traditions. We believe in inclusivity and cultural exchange.',
      isOpen: false
    },
    {
      question: 'Where are the club events usually held?',
      answer: 'Most of our events are held at our community hall in Koramangala. For larger events, we book venues like auditoriums and community centers across Bengaluru.',
      isOpen: false
    },
    {
      question: 'How can I volunteer for club activities?',
      answer: 'We always welcome volunteers! You can contact us through this form or call our office. We have various volunteer opportunities in event management, cultural programs, and community outreach.',
      isOpen: false
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.submitMessage = 'Thank you for your message! We will get back to you soon.';
        this.contactForm.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          this.submitMessage = '';
        }, 5000);
      }, 2000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}