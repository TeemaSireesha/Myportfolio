# Teema Sireesha Poonumalli - Data Science Portfolio

## Overview

This is a full-stack web application built as a personal portfolio for Teema Sireesha Poonumalli, a B.Tech Data Science graduate. The application showcases professional experience, skills, projects, and provides contact functionality. It's built using modern web technologies with a focus on performance, aesthetics, and user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Shadcn/ui component library for consistent UI components
  - CSS variables for theming (luxury navy/gold color scheme)
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: React Query (@tanstack/react-query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL session store
- **API Design**: RESTful API with `/api` prefix routing

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM with Zod schema validation
- **Session Storage**: PostgreSQL-backed session store using connect-pg-simple
- **Development Storage**: In-memory storage implementation for rapid development

## Key Components

### Frontend Components
1. **Navigation**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Main landing area with professional introduction
3. **About Section**: Personal details and background information
4. **Skills Section**: Technical skills organized by category with visual progress indicators
5. **Projects Section**: Featured project showcase with images and descriptions
6. **Contact Section**: Contact form with toast notifications
7. **Footer**: Simple footer with copyright information

### Backend Components
1. **Route Handler**: Centralized route registration system
2. **Storage Interface**: Abstracted storage layer supporting multiple implementations
3. **Middleware**: Request logging, JSON parsing, and error handling
4. **Development Server**: Vite integration for hot module replacement

### UI Component System
- Complete Shadcn/ui component library integration
- Consistent design tokens and theming
- Accessible components following ARIA guidelines
- Mobile-responsive design patterns

## Data Flow

### Client-Server Communication
1. **Static Assets**: Served directly by Express in production, Vite dev server in development
2. **API Requests**: RESTful endpoints under `/api` prefix
3. **Form Submissions**: Contact form data processed through API endpoints
4. **Session Management**: Server-side sessions with PostgreSQL persistence

### State Management
1. **Server State**: Managed by React Query with caching and background updates
2. **Client State**: Local React state for UI interactions
3. **Form State**: React Hook Form for form validation and submission
4. **Toast Notifications**: Custom toast hook for user feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tooling

## Deployment Strategy

### Production Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle Kit handles schema migrations

### Environment Configuration
- **Development**: `npm run dev` - runs server with Vite integration
- **Production**: `npm start` - serves built application
- **Database**: Environment variable `DATABASE_URL` required

### Hosting Platform
- **Platform**: Replit with autoscaling deployment
- **Port Configuration**: Internal port 5000, external port 80
- **Build Commands**: Automated build and deployment pipeline

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 26, 2025. Initial setup