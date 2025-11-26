import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;
  private videoObserver: IntersectionObserver | null = null;

  ngOnInit() {}

  ngAfterViewInit() {
    this.observeVideo();
  }

  ngOnDestroy() {
    if (this.videoObserver) {
      this.videoObserver.disconnect();
    }
  }

  private observeVideo() {
    this.videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = this.heroSection.nativeElement.querySelector('video');
        if (video) {
          if (entry.isIntersecting) {
            video.play().catch(e => console.error('Video autoplay was blocked.', e));
          } else {
            video.pause();
          }
        }
      });
    }, { threshold: 0.1 });

    this.videoObserver.observe(this.heroSection.nativeElement);
  }
}
