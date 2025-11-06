# Heman-Hill Furniture Site

A furniture portfolio website for Heman-Hill, built with modern web technologies.

## Technologies Used

- **Next.js 15.1.6** - React framework for production
- **React 19.0.0** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Linting utility for JavaScript and JSX
- **Prettier** - Code formatter
- **PostCSS** - Tool for transforming CSS with JavaScript
- **Vercel Analytics & Speed Insights** - Performance monitoring and analytics
- **React Masonry CSS** - Masonry layout component for React
- **React Modal** - Accessible modal dialog component

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jphdevsf/heman-hill-furniture-site.git
   cd heman-hill-furniture-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Local Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

To build the application for production:

```bash
npm run build
```

This will generate optimized production assets in the `.next` directory.

## Starting Production Server

After building, you can start the production server:

```bash
npm start
```

## Deployment

This project is configured for deployment on Vercel. Push your changes to the main branch to trigger automatic deployment.

Alternatively, you can deploy manually by connecting your repository to Vercel or using the Vercel CLI.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generateJson` - Generate images JSON file (used in build process)
