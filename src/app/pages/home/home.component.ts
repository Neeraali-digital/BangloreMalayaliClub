import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  memberCount: number = 100000;
  private videoObserver: IntersectionObserver | null = null;

  ngOnInit() {
    // Add scroll animations
    this.observeElements();
    // Add video scroll observer
    this.observeVideoSection();
  }

  ngOnDestroy() {
    if (this.videoObserver) {
      this.videoObserver.disconnect();
    }
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

  private observeVideoSection() {
    this.videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector('video') as HTMLVideoElement;
        if (video) {
          if (entry.isIntersecting) {
            // Video is in view, play it
            video.play().catch(() => {
              // Autoplay might be blocked, that's okay
            });
          } else {
            // Video is out of view, pause it
            video.pause();
          }
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
    });

    // Observe the video section
    setTimeout(() => {
      const videoSection = document.querySelector('.video-section');
      if (videoSection) {
        this.videoObserver!.observe(videoSection);
      }
    }, 100);
  }
}
