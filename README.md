# WorldWise - Map-Based Travel App

## Overview
WorldWise is a map-based React web application that allows users to explore cities and countries interactively using the [Leaflet](https://leafletjs.com/) library for map rendering. The app features user authentication, city and country listings, and a form to add new locations, all within a protected route structure. It uses React Router for navigation, lazy loading for performance optimization, and context providers for state management.

## Features
- Interactive map powered by Leaflet to display cities and countries
- User authentication with a fake auth context for demo purposes
- City and country lists with detailed views for individual cities
- Form to add new locations
- Protected routes to secure the main app layout
- Lazy-loaded pages for improved performance
- Responsive design with a full-page spinner for loading states
- 404 page for handling invalid routes

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- A modern web browser (e.g., Chrome, Firefox,Edge)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sagili-manoj/worldwise.git
   ```
2. Navigate to the project directory:
   ```bash
   cd worldwise
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm run server
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the app.
3. Explore the app:
   - Visit the homepage, product, or pricing pages.
   - Log in using the demo credentials (if applicable) to access the protected app section.
   - Interact with the map to view cities and countries or add new locations via the form.


## Dependencies
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - For client-side routing
- [Leaflet](https://leafletjs.com/) - For interactive maps
- [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/) - Build tool (assumed based on standard React setup)

