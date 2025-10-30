# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Angular CLI installed globally: `npm install -g @angular/cli`

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   ng serve
   ```

3. Open browser to `http://localhost:4200`

## Production Build

1. Build for production:
   ```bash
   ng build --configuration production
   ```

2. The build artifacts will be stored in the `dist/` directory

## Deployment Options

### 1. Static Hosting (Recommended)

**Netlify:**
1. Connect your GitHub repository to Netlify
2. Set build command: `ng build --configuration production`
3. Set publish directory: `dist/bengaluru-malayali-club`
4. Deploy automatically on git push

**Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

**Firebase Hosting:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init hosting`
3. Set public directory to `dist/bengaluru-malayali-club`
4. Deploy: `firebase deploy`

### 2. Traditional Web Server

**Apache/Nginx:**
1. Build the project: `ng build --configuration production`
2. Copy contents of `dist/bengaluru-malayali-club` to web server directory
3. Configure server for SPA routing (see below)

## Server Configuration

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Environment Configuration

Create environment files for different stages:

**src/environments/environment.prod.ts:**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.bengalurumalayli.club',
  googleMapsApiKey: 'your-google-maps-api-key'
};
```

## Performance Optimizations

1. **Enable Gzip compression** on your server
2. **Set proper cache headers** for static assets
3. **Use CDN** for faster global delivery
4. **Optimize images** before deployment
5. **Enable service worker** for offline functionality

## Security Headers

Add these headers to your server configuration:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Monitoring

Consider adding:
- Google Analytics for user tracking
- Error tracking (Sentry, Bugsnag)
- Performance monitoring (Web Vitals)
- Uptime monitoring

## SSL Certificate

Always use HTTPS in production:
- Let's Encrypt (free)
- Cloudflare (free tier available)
- Your hosting provider's SSL

## Domain Configuration

1. Purchase domain (e.g., bengalurumalayli.club)
2. Configure DNS records to point to your hosting
3. Set up www redirect if needed
4. Configure SSL certificate

## Backup Strategy

- Regular backups of your code repository
- Database backups if using dynamic content
- Asset backups (images, documents)

## Troubleshooting

**Common Issues:**

1. **Routing not working:** Ensure server is configured for SPA routing
2. **Assets not loading:** Check base href in index.html
3. **Build errors:** Clear node_modules and reinstall dependencies
4. **Performance issues:** Enable production optimizations and compression