# STC Workshop - React + TypeScript + Vite

This repository is a React + TypeScript project built with Vite. It provides a structured setup for building scalable and performant web applications. The project includes features like lazy loading, keyboard navigation, Zustand state management, and reusable components.

---

## Features

- **React + TypeScript**: Strongly typed React components for better development experience.
- **Vite**: Fast development server with hot module replacement (HMR).
- **Zustand**: Lightweight state management for managing focusable elements and movie data.
- **Reusable Components**: Modular and reusable components like `MovieCard`, `Sidebar`, `TopNav`, and more.
- **Keyboard Navigation**: Custom hooks for handling keyboard navigation in a TV-like interface.
- **Lazy Loading**: Optimized image loading using the `LazyImage` component.
- **Focus Management**: Custom hooks like `useFocusEffect` for managing focusable elements.
- **Responsive Design**: Components styled for responsiveness and interactivity.

---

## Folder Structure

The project is organized as follows:

```
stc-workshop/
├── src/
│   ├── api/                     # API simulation for fetching data
│   │   └── movies.ts            # Simulates fetching paginated movie data
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Common components (e.g., Avatar, Typography, LazyImage)
│   │   │   ├── Avatar.tsx       # Circular avatar component
│   │   │   ├── LazyImage.tsx    # Lazy loading image component
│   │   │   ├── Typography.tsx   # Typography component for styled text
│   │   │   ├── Tag.tsx          # Tag component for labels
│   │   │   └── PlayButton.tsx   # Play button component
│   │   ├── Movie/               # Movie-related components
│   │   │   ├── MovieCard.tsx    # Movie card component
│   │   │   ├── MovieRail.tsx    # Horizontal movie rail component
│   │   │   ├── MovieSkeleton.tsx# Skeleton loader for movie cards
│   │   │   └── MovieDetails.tsx # Movie details display component
│   │   ├── Sidebar/             # Sidebar components
│   │   │   ├── Sidebar.tsx      # Main sidebar component
│   │   │   └── SideMenu.tsx     # Sidebar menu item component
│   │   └── TopNav/              # Top navigation components
│   │       ├── TopNav.tsx       # Top navigation bar
│   │       └── NavItem.tsx      # Navigation item component
│   ├── config/                  # Configuration files
│   │   └── constants.ts         # Application constants
│   ├── data/                    # Static data
│   │   ├── Menu.tsx             # Menu items for navigation
│   │   └── MockMovies.ts        # Mock movie data for development
│   ├── hooks/                   # Custom React hooks
│   │   ├── useFocusEffect.ts    # Hook for managing focusable elements
│   │   ├── useKeyboardNavigation.ts # Hook for keyboard navigation
│   │   └── useIntersectionObserver.ts # Hook for observing element visibility
│   ├── store/                   # Zustand state management
│   │   ├── useFocusableStore.ts # Store for managing focusable elements
│   │   └── useMovieStore.ts     # Store for managing movie data
│   ├── type/                    # TypeScript type definitions
│   │   ├── FocusType.ts         # Types for focusable elements
│   │   └── Movie.ts             # Types for movie data
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── README.md                    # Project documentation
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stc-workshop.git
   cd stc-workshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

---

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

---

## Features in Detail

### 1. **Lazy Loading**
   - The `LazyImage` component defers image loading until they are visible in the viewport, improving performance.

### 2. **Keyboard Navigation**
   - The `useKeyboardNavigation` hook enables seamless navigation using arrow keys, ideal for TV-like interfaces.

### 3. **Focus Management**
   - The `useFocusEffect` hook manages focusable elements, ensuring accessibility and smooth navigation.

### 4. **State Management**
   - Zustand is used for lightweight and efficient state management, with stores like `useFocusableStore` and `useMovieStore`.

### 5. **Reusable Components**
   - Modular components like `MovieCard`, `Sidebar`, and `TopNav` ensure reusability and maintainability.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/).
- Inspired by modern TV and streaming platform interfaces.