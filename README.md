# Test Project

A modern React application demonstrating state management, routing, data fetching, and feature flag implementation using industry-standard tools.

## Features

- **Table Configuration Page**: Configure the number of rows displayed in the data table (5-20 rows) with both slider and number input controls
- **Dynamic Data Table**: Fetches and displays posts from JSONPlaceholder API with configurable row limits
- **Admin Panel**: Feature flag management system to control application behavior
  - Toggle to disable/enable Table Configuration page entirely
  - Toggle to disable/enable slider input on Table Configuration page
- **Persistent State**: All configurations and feature flags persist across page refreshes
- **Modern UI**: Responsive design with Tailwind CSS

## Tech Stack

### Core
- **React 19.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### State Management
- **Redux Toolkit 2.9** - Global state management
- **Redux Persist 6.0** - State persistence

### Routing
- **TanStack Router 1.133** - Type-safe routing

### Data Fetching
- **TanStack Query 5.90** - Server state management

### Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework

### Code Quality
- **ESLint 9** - Linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd test-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Structure

```
test-project/
├── src/
│   ├── components/
│   │   └── layout/
│   │       └── MainLayout.tsx      # Main layout with navigation
│   ├── pages/
│   │   ├── TableConfig.tsx         # Page 1: Table configuration
│   │   ├── DataTable.tsx           # Page 2: Data display
│   │   └── AdminPanel.tsx          # Admin: Feature flags
│   ├── routes/
│   │   ├── __root.tsx              # Root route
│   │   ├── index.tsx               # Home route
│   │   ├── data-table.tsx          # Data table route
│   │   └── admin.tsx               # Admin route
│   ├── store/
│   │   ├── store.ts                # Redux store configuration
│   │   ├── hooks.ts                # Typed Redux hooks
│   │   └── slices/
│   │       ├── configSlice.ts      # Table configuration state
│   │       └── featureFlagsSlice.ts # Feature flags state
│   ├── router.ts                   # TanStack Router setup
│   ├── App.tsx                     # Root component
│   └── main.tsx                    # Application entry point
├── public/                         # Static assets
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── eslint.config.js                # ESLint configuration
└── package.json                    # Project dependencies
```

## Application Pages

### 1. Table Configuration (/)
Configure how many rows should be displayed in the data table.
- Adjustable slider (5-20 rows)
- Number input for precise control
- Can be disabled via Admin Panel

### 2. Data Table (/data-table)
Displays posts fetched from JSONPlaceholder API.
- Shows configurable number of rows based on settings
- Loading state with spinner
- Error handling with user-friendly messages
- Responsive table design

### 3. Admin Panel (/admin)
Manage application feature flags.
- **Disable Page 1 Entirely**: Shows disabled message on Table Configuration page
- **Disable Slider Input Only**: Hides slider but keeps number input
- All changes persist across refreshes

## State Management

### Redux Slices

**configSlice**
- `tableRows`: Number of rows to display in data table (5-20)

**featureFlagsSlice**
- `disablePage1`: Boolean to disable Table Configuration page entirely
- `disableSlider`: Boolean to hide slider input on Table Configuration page

### Persistence

Redux Persist is configured to save the entire Redux state to localStorage, ensuring user preferences and feature flags persist across browser sessions.

## API Integration

The application fetches data from:
- **JSONPlaceholder API**: `https://jsonplaceholder.typicode.com/posts`

TanStack Query handles caching, background updates, and error states automatically.

## Development

### Code Style

This project uses ESLint with TypeScript-specific rules. Run linting with:

```bash
npm run lint
```

### Type Checking

TypeScript is configured for strict type checking. The build process includes type checking:

```bash
npm run build
```

## Production Build

Build the application for production:

```bash
npm run build
```