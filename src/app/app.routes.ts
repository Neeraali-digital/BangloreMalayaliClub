import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent)
  },
  {
    path: 'events/upcoming',
    loadComponent: () => import('./pages/upcoming-events/upcoming-events.component').then(m => m.UpcomingEventsComponent)
  },
  {
    path: 'events/past',
    loadComponent: () => import('./pages/past-events/past-events.component').then(m => m.PastEventsComponent)
  },
  {
    path: 'events/charity-blood-donation',
    loadComponent: () => import('./pages/charity-blood-donation/charity-blood-donation.component').then(m => m.CharityBloodDonationComponent)
  },
  {
    path: 'events/sports',
    loadComponent: () => import('./pages/sports/sports.component').then(m => m.SportsComponent)
  },
  {
    path: 'membership/form',
    loadComponent: () => import('./pages/membership-form/membership-form.component').then(m => m.MembershipFormComponent)
  },
  {
    path: 'membership/existing',
    loadComponent: () => import('./pages/existing-members/existing-members.component').then(m => m.ExistingMembersComponent)
  },
  {
    path: 'committee/executive',
    loadComponent: () => import('./pages/executive-committee/executive-committee.component').then(m => m.ExecutiveCommitteeComponent)
  },
  {
    path: 'committee/sub',
    loadComponent: () => import('./pages/sub-committee/sub-committee.component').then(m => m.SubCommitteeComponent)
  },
  {
    path: 'committee/past',
    loadComponent: () => import('./pages/past-committee/past-committee.component').then(m => m.PastCommitteeComponent)
  },
  {
    path: 'well-wisher-supporters',
    loadComponent: () => import('./pages/well-wisher-supporters/well-wisher-supporters.component').then(m => m.WellWisherSupportersComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
