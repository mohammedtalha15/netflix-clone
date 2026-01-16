# Netflix Clone

A comprehensive, production-ready Netflix UI clone built with **Next.js 16**, **TypeScript**, and modern web technologies. Features an authentic Netflix experience with movie browsing, video playback, user profiles, and advanced search functionality.

![Netflix Clone](https://images.unsplash.com/photo-1574267432644-f610c97c3c64?w=1920)

## ✨ Features

### Core Functionality
- 🎬 **Massive Content Library** - 200+ movies and TV shows with detailed metadata
- 🎥 **Full-Featured Video Player** - Custom player with keyboard shortcuts, quality selection, subtitles
- 🔍 **Advanced Search** - Real-time search with autocomplete and result previews
- 👤 **User Profiles** - Multiple profile support with individual preferences
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark Theme** - Authentic Netflix dark mode design

### Pages
- **Homepage** - Billboard hero section with trending movie carousels
- **Browse** - Organized content by genre
- **My List** - Personal watchlist management
- **Login** - Netflix-style authentication UI
- **Profiles** - Profile selection and management
- **Watch** - Dedicated video player experience

### Advanced Features
- ⚡  **Performance Optimized** - Lazy loading, code splitting, image optimization
- 🎨 **Premium Design** - Smooth animations, hover effects, and transitions
- 💾 **Local Storage** - Persistent watchlist and watch history
- 🔔 **Notifications** - In-app notification system
- 🎯 **Smart Recommendations** - Content matching based on user preferences
- ⌨️ **Keyboard Navigation** - Full keyboard support for accessibility
- 🎭 **Loading States** - Skeleton screens for better UX

## 🚀 Technologies

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: CSS-in-JS with vanilla CSS
- **State Management**: React Context API
- **Data  Storage**: LocalStorage for persistence
- **Icons**: Inline SVG
- **Images**: Unsplash (placeholder images)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mohammedtalha15/netflix-clone.git
cd netflix-clone

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
netflix.clone/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── profiles/
│   │   ├── login/
│   │   ├── browse/
│   │   ├── my-list/
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── Navbar.tsx
│   │   ├── Billboard.tsx
│   │   ├── MovieRow.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieModal.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   └── Footer.tsx
│   ├── contexts/              # React contexts
│   │   ├── UserContext.tsx
│   │   └── NotificationContext.tsx
│   ├── hooks/                 # Custom React hooks
│   │   └── index.ts
│   ├── data/                  # Mock data
│   │   ├── movies.ts
│   │   ├── extendedMovies.ts
│   │   └── massiveDatabase.ts
│   ├── types/                 # TypeScript types
│   │   └── index.ts
│   └── utils/                 # Utility functions
│       └── helpers.ts
├── public/                    # Static assets
└── package.json
```

## 🎯 Key Components

### Video Player
Full-featured video player with:
- Play/pause controls
- Volume control with mute
- Progress bar with seeking
- Quality selection (480p, 720p, 1080p, 4K)
- Subtitles toggle
- Fullscreen mode
- Keyboard shortcuts (Space, Arrow keys, M, F, Esc)

### Search System
- Real-time search with debouncing
- Autocomplete dropdown
- Result previews with thumbnails
- Searches across titles, descriptions, genres, cast, and keywords

### Movie Cards
- Hover-to-zoom animations
- Quick action buttons (Play, Add to List, Like)
- Match percentage display
- Maturity ratings
- Genre tags

### State Management
- **UserContext**: Profile management and preferences
- **NotificationContext**: App notifications
- **Custom Hooks**: Watchlist, watch history, search, video player controls

## 📱  Responsive Design

- **Desktop**: Full-featured experience with hover effects
- **Tablet**: Optimized layouts with touch support
- **Mobile**: Mobile-first design with swipe gestures

## 🎨 Design System

### Colors
- Primary Red: `#E50914`
- Background: `#141414`
- Card Background: `#2F2F2F`
- Text Primary: `#FFFFFF`
- Text Secondary: `#BCBCBC`

### Typography
- Font Family: Inter, Netflix Sans (fallback)
- Headings: 16px - 56px
- Body: 14px - 18px

### Animations
- Smooth transitions on hover
- Skeleton loading states
- Modal slide-in effects
- Carousel animations

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Create production build
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Run TypeScript compiler check
```

## 🌟 Features Breakdown

### Homepage
- **Billboard**: Full-width hero section with featured content
- **Movie Rows**: Horizontal scrolling carousels organized by category
- **Trending Now**: Real-time trending content
- **Top 10**: Top 10 most watched with rank badges
- **Genre Collections**: Content organized by genre

### My List
- Personal watchlist management
- Add/remove functionality
- Grid layout for easy browsing
- Empty state messaging

### Browse
- Genre-based navigation
- Multiple organized rows
- Comprehensive filtering
- All content accessible

### Video Player
- Custom-built player component
- Full playback controls
- Settings panel
- Responsive design
- Keyboard shortcuts

## 📊 Performance

- **Lazy Loading**: Images and components load on-demand
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Next.js Image component with optimization
- **Debounced Search**: Prevents excessive API calls
- **Memoized Components**: React.memo for performance

## 🔐 Data Privacy

- All data stored locally in browser
- No external API calls
- No user tracking
- Mock data only

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by Netflix
- Images from Unsplash
- Built with Next.js and TypeScript

## 📧 Contact

Mohammed Talha - [@mohammedtalha15](https://github.com/mohammedtalha15)

Project Link: [https://github.com/mohammedtalha15/netflix-clone](https://github.com/mohammedtalha15/netflix-clone)

## 🎯 Roadmap

- [ ] Add authentication with NextAuth
- [ ] Integrate with TMDB API for real data
- [ ] Add video streaming functionality
- [ ] Implement user ratings and reviews
- [ ] Add download for offline viewing
- [ ] Multi-language support
- [ ] Social sharing features
- [ ] PWA support
- [ ] Backend API integration
- [ ] Database integration

---

Made with ❤️ using Next.js and TypeScript
