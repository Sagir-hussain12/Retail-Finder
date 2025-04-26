# Retailer Finder 🏪

A modern, responsive web application that helps users find and connect with local retailers. The app provides an intuitive interface to search, filter, and contact retailers through WhatsApp.

[Live Demo](https://ornate-crumble-66eec3.netlify.app/)

## Features

- 🔍 Real-time search functionality
- 📱 Mobile-first responsive design
- 🗺️ Location-based retailer sorting
- 💬 Direct WhatsApp integration
- 🏷️ Category-based filtering
- 📍 Location grouping
- 🎨 Beautiful UI with smooth animations

## Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite
- **Styling**: 
  - Tailwind CSS
  - Custom CSS animations
  - Inter font family
- **Icons**: React Icons
- **State Management**: React Hooks
- **Location Services**: Geolocation API
- **Deployment**: Netlify

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
retailer-finder/
├── src/
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── data/           # Mock data
│   ├── utils/          # Helper functions
│   └── assets/         # Static assets
├── public/             # Public assets
└── package.json        # Project dependencies
```

## Key Components

- **Header**: App navigation and branding
- **SearchBar**: Real-time retailer search
- **CategoryFilter**: Category-based filtering
- **RetailerList**: Display retailers grouped by location
- **RetailerCard**: Individual retailer information
- **LocationGroup**: Location-based grouping
- **Footer**: Navigation menu

## Performance Features

- Optimized scrolling with custom scrollbar
- Smooth animations and transitions
- Lazy loading of components
- Mobile-optimized touch interactions
- Efficient state management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.