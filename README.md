# Cynaris Website Revamp – Full Stack Development

## Project Architecture

This project is a monorepo containing the frontend and backend for the Cynaris corporate website.

### Structure

```
cynaris-website/
├── frontend/                 # Next.js (App Router) + React + Tailwind CSS
│   ├── app/                  # App Router pages and layouts
│   ├── components/           # Reusable UI components (Hero, Navbar, Footer, etc.)
│   ├── lib/                  # Utility functions and API fetchers
│   ├── types/                # TypeScript definitions
│   └── public/               # Static assets
│
├── backend/                  # Strapi CMS (Node.js)
│   ├── src/
│   │   ├── api/              # Content Types & Controllers
│   │   ├── admin/            # Admin panel customizations
│   │   └── extensions/       # Plugin extensions
│   ├── config/               # Database and server configuration
│   └── public/uploads/       # Media library storage
│
└── README.md                 # Project documentation
```

## Tech Stack

-   **Frontend**: Next.js 14+, React, Tailwind CSS, TypeScript
-   **Backend**: Strapi CMS
-   **Database**: SQLite (Local Dev) / PostgreSQL (Production)

## Setup Instructions

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### Getting Started

1.  **Backend Setup**

    ```bash
    cd backend
    npm install
    npm run develop
    ```

    The Strapi admin panel will be available at `http://localhost:1337/admin`.

2.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The website will be available at `http://localhost:3000`.

## Environment Variables

See `.env.example` in both `frontend` and `backend` directories for required environment variables.
