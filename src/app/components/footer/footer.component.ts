import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white">
      <div class="container-custom section-padding">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Club Info -->
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-kerala-gold rounded-full flex items-center justify-center">
                <span class="material-icons text-white">account_balance</span>
              </div>
              <h3 class="text-xl font-bold">Bengaluru Malayali Club</h3>
            </div>
            <p class="text-gray-300 mb-4">
              Connecting the Malayali community in Bengaluru through culture, tradition, and fellowship.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-kerala-gold hover:text-yellow-400 transition-colors">
                <span class="material-icons">facebook</span>
              </a>
              <a href="#" class="text-kerala-gold hover:text-yellow-400 transition-colors">
                <span class="material-icons">alternate_email</span>
              </a>
              <a href="#" class="text-kerala-gold hover:text-yellow-400 transition-colors">
                <span class="material-icons">photo_camera</span>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-300 hover:text-kerala-gold transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-300 hover:text-kerala-gold transition-colors">Upcoming Events</a></li>
              <li><a href="#" class="text-gray-300 hover:text-kerala-gold transition-colors">Membership</a></li>
              <li><a href="#" class="text-gray-300 hover:text-kerala-gold transition-colors">Gallery</a></li>
              <li><a href="#" class="text-gray-300 hover:text-kerala-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <span class="material-icons text-kerala-gold">location_on</span>
                <span class="text-gray-300">Bengaluru, Karnataka</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="material-icons text-kerala-gold">phone</span>
                <span class="text-gray-300">+91 98765 43210</span>
              </div>
              <div class="flex items-center space-x-3">
                <span class="material-icons text-kerala-gold">email</span>
                <span class="text-gray-300">info&#64;bengalurumalayli.club</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
          <p class="text-gray-400">
            © {{ currentYear }} Bengaluru Malayali Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}