# Sea Waves Aqua Center Website

A modern, responsive website for Sea Waves Aqua Center - a beach activities company in Hurghada, Egypt.

## Features

- **Modern Design**: Clean, beach-themed design with blue and turquoise colors
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Activities**: 6 different water activities with detailed information
- **Image Gallery**: Beautiful image galleries with lightbox functionality
- **Contact Forms**: Individual contact forms for each activity with validation
- **Smooth Animations**: Scroll animations and hover effects
- **Multi-language Support**: English/Arabic language switcher (ready for implementation)

## Activities Included

1. **Diving** - Explore coral reefs and marine life
2. **Dolphin Trips** - Swim with wild dolphins
3. **Island Tours** - Visit pristine islands with white sand beaches
4. **Boat Trips** - Relaxing yacht tours along the coast
5. **Speed Boats** - Thrilling high-speed water rides
6. **Water Sports** - Banana boat, parasailing, jet ski, and more

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with validation
- **Animations**: CSS transitions and Framer Motion ready

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd sea-waves-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with language switcher
│   ├── Hero.tsx           # Hero section with call-to-action
│   ├── ActivityCard.tsx   # Individual activity cards
│   ├── ActivityDetail.tsx # Activity detail modal
│   ├── ImageGallery.tsx   # Image gallery with lightbox
│   ├── Lightbox.tsx       # Lightbox component for images
│   ├── ContactForm.tsx    # Contact form with validation
│   ├── Stats.tsx          # Company statistics section
│   ├── About.tsx          # About section with founder story
│   └── Footer.tsx         # Footer with contact information
├── data/
│   └── activities.ts      # Activity data and types
├── App.tsx               # Main app component
├── index.tsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<768px), tablet (768px-1023px), desktop (1024px+)
- Touch-friendly interface on mobile devices

### Image Gallery & Lightbox
- Grid layout with hover effects
- Full-screen lightbox with navigation
- Keyboard navigation (arrow keys, ESC)
- Touch/swipe support on mobile

### Contact Forms
- Form validation with error messages
- Success/error states
- Pre-filled activity information
- Responsive design

### Animations
- Scroll-triggered fade-in animations
- Smooth hover effects
- Loading states and transitions

## Contact Information

- **Phone**: +20 106 11 11 368
- **Email**: info@seawavesegypt.com
- **Location**: Hurghada, Red Sea, Egypt

## Company Stats

- 15 years of experience
- 45,000+ satisfied clients
- 30,000+ successful trips
- 20 security checks on equipment
- 9 different food options available

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Ocean Blue: #0EA5E9
- Coral Orange: #FF6B35
- Success Green: #10B981
- Error Red: #EF4444

### Adding New Activities
1. Add new activity data to `src/data/activities.ts`
2. Include activity images (6-8 images recommended)
3. The activity will automatically appear in the grid

### Language Support
The website is ready for Arabic language support. To implement:
1. Add translation files
2. Implement translation logic in components
3. Update the language switcher functionality

## Deployment

To deploy the website:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Sea Waves Aqua Center. All rights reserved.
