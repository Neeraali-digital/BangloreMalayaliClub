# Bengaluru Malayali Club Website

A modern, responsive web application built with Angular 17, TypeScript, and Tailwind CSS for the Bengaluru Malayali Club.

## Features

- **Modern Design**: Clean, Kerala-culture inspired design with golden accents
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Lazy loading, OnPush change detection, and optimized assets
- **Accessibility**: ARIA attributes, proper contrast, and keyboard navigation
- **Animations**: Smooth CSS animations and micro-interactions

## Tech Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: Tailwind CSS
- **Icons**: Google Material Icons
- **Animations**: CSS animations and Lottie (configured)
- **Forms**: Reactive Forms with validation
- **Routing**: Angular Router with lazy loading

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── whatsapp-button/
│   ├── pages/              # Page components
│   │   ├── home/
│   │   ├── about/
│   │   ├── events/
│   │   ├── gallery/
│   │   └── contact/
│   ├── services/           # Angular services
│   ├── shared/             # Shared utilities
│   └── assets/             # Static assets
│       ├── images/
│       └── animations/
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## Features Overview

### Home Page
- Hero section with Kerala-inspired animated background
- Features section highlighting club offerings
- Call-to-action sections

### About Page
- Club history and mission
- Leadership team
- Values and statistics

### Events Page
- Event filtering by category
- Event cards with registration
- Newsletter subscription

### Gallery Page
- Image gallery with categories
- Lightbox functionality
- Responsive grid layout

### Contact Page
- Contact form with validation
- Contact information
- FAQ section with accordion

### Components
- **Navbar**: Sticky navigation with scroll effects
- **Footer**: Club information and links
- **WhatsApp Button**: Floating contact button

## Customization

### Colors
The Kerala-inspired color palette is defined in `tailwind.config.js`:
- `kerala-gold`: #FFD700
- `kerala-green`: #228B22
- `kerala-coconut`: #8B4513
- `kerala-water`: #4682B4

### Animations
Custom animations are defined in Tailwind config:
- `float`: Floating animation for background elements
- `wave`: Wave animation
- `fade-in-up`: Fade in with upward motion

## Performance Optimizations

- Lazy loading for all route components
- OnPush change detection strategy (where applicable)
- Optimized bundle size with tree shaking
- Responsive images and SVGs
- Minimal custom CSS (Tailwind utilities)

## Accessibility Features

- ARIA attributes for screen readers
- Proper heading hierarchy
- Keyboard navigation support
- High contrast colors
- Alt text for images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the Bengaluru Malayali Club at info@bengalurumalayli.club