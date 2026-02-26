# NVNS Software Solutions

A modern, responsive website for NVNS Software Solutions (nvnssoftwaresolutions.com) built with React and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎯 Industry-focused course listings
- 💼 Multiple learning journey options
- 📝 Contact and registration forms
- ⭐ Student testimonials
- 🎓 Comprehensive course information

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **EmailJS** - Email service integration
- **React Router DOM** - Navigation (ready for future use)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Set up EmailJS** (Required for contact forms):
   - See `EMAILJS_SETUP.md` for detailed instructions
   - Configure your EmailJS credentials in `src/utils/emailjsConfig.js`

3. **Configure WhatsApp** (Optional):
   - Update the phone number in `src/utils/emailjsConfig.js`

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Stats.jsx           # Statistics section
│   │   ├── TrendingCourses.jsx # Trending courses
│   │   ├── FeaturedCourses.jsx # Featured courses
│   │   ├── LearningJourney.jsx # Learning paths
│   │   ├── Services.jsx        # Services offered
│   │   ├── Testimonials.jsx    # Student testimonials
│   │   ├── Contact.jsx         # Contact forms
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is set to blue, but you can change it to match your brand.

### Content

All content is in the component files. Edit the respective component files to update:
- Course information
- Testimonials
- Contact information
- Services
- Footer links

## Features Overview

### Interactive Features
- ✅ **All buttons are functional** - Scroll to sections, open modals, contact via WhatsApp
- ✅ **EmailJS Integration** - Contact forms send emails directly
- ✅ **WhatsApp Direct Contact** - One-click WhatsApp chat with pre-filled messages
- ✅ **Smooth Scrolling** - Navigation buttons smoothly scroll to sections
- ✅ **Form Validation** - All forms include validation and loading states

### Header
- Responsive navigation menu
- Dropdown for courses
- Mobile hamburger menu
- Call-to-action button (scrolls to contact section)

### Hero Section
- Eye-catching gradient background
- Main headline and tagline
- Call-to-action buttons

### Statistics
- Key metrics display
- Responsive grid layout

### Courses
- Trending courses with pricing
- Featured courses with ratings
- Course details and features

### Learning Journey
- Professional Upskilling
- Placement Bootcamps
- Skill to Job Program
- Corporate Training

### Services
- Classroom Training
- Online Training
- Corporate Training
- Internship Programs
- Skill-to-Job
- Career Guidance

### Testimonials
- Student reviews
- Star ratings
- Course-specific testimonials

### Contact
- Multiple contact methods (WhatsApp, Phone, Email)
- Registration form (sends email via EmailJS)
- Demo class booking form (sends email via EmailJS)
- WhatsApp fallback buttons on all forms
- Real-time form submission feedback

### Footer
- Company information
- Quick links
- Social media links
- Copyright information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Deployment

### Option 1: Vercel (Recommended)

Vercel is the easiest and fastest way to deploy this React app.

#### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub/GitLab/Bitbucket account (optional, for automatic deployments)

#### Deployment Steps

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Or use Vercel CLI: `npm i -g vercel` then `vercel`

3. **Deploy**:
   - Vercel will automatically detect Vite and build your project
   - Your site will be live at `your-project.vercel.app`
   - You can add a custom domain: `nvnssoftwaresolutions.com`

4. **Custom Domain Setup**:
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your domain: `nvnssoftwaresolutions.com`
   - Follow DNS configuration instructions
   - Vercel will automatically configure SSL

**Note:** The `vercel.json` file is already configured with SPA routing support.

### Option 2: GitHub Pages

For GitHub Pages deployment, you need to set the base path in `vite.config.js`:

1. **Update `vite.config.js`**:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nvns/', // Replace 'nvns' with your repository name
})
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy to GitHub Pages**:
   - Go to your repository Settings > Pages
   - Select source: "GitHub Actions" or "Deploy from a branch"
   - If using branch: select `main` branch and `/dist` folder
   - Save

4. **Enable GitHub Actions** (if using Actions):
   - Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

**Note:** The `404.html` file is included for GitHub Pages SPA routing support.

## Deployment on Vercel (Legacy)

### Prerequisites
- Vercel account (sign up at [vercel.com](https://vercel.com))
- GitHub/GitLab/Bitbucket account (optional, for automatic deployments)

### Deployment Steps

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Or use Vercel CLI: `npm i -g vercel` then `vercel`

3. **Configure Environment Variables** (if using EmailJS):
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_DEMO_TEMPLATE_ID=your_demo_template_id
     VITE_EMAILJS_REGISTRATION_TEMPLATE_ID=your_registration_template_id
     VITE_EMAILJS_COURSE_INQUIRY_TEMPLATE_ID=your_course_inquiry_template_id
     VITE_EMAILJS_ENROLLMENT_TEMPLATE_ID=your_enrollment_template_id
     VITE_WHATSAPP_NUMBER=919963486280
     ```

4. **Deploy**:
   - Vercel will automatically detect Vite and build your project
   - Your site will be live at `your-project.vercel.app`
   - You can add a custom domain: `nvnssoftwaresolutions.com`

5. **Custom Domain Setup**:
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your domain: `nvnssoftwaresolutions.com`
   - Follow DNS configuration instructions
   - Vercel will automatically configure SSL

### Build Configuration

The project includes `vercel.json` with optimal settings for Vite:
- Automatic SPA routing (all routes redirect to index.html)
- Optimized build output
- Fast refresh for development

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact forms (EmailJS)
- [ ] Test WhatsApp links
- [ ] Verify course detail pages work
- [ ] Check mobile responsiveness
- [ ] Test navigation
- [ ] Verify environment variables are set
- [ ] Test enrollment forms
- [ ] Check console for errors

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Support

For support, visit [nvnssoftwaresolutions.com](https://nvnssoftwaresolutions.com) or contact through the website.

