# Portfolio Website with MongoDB Integration

This project is a modern portfolio website built with React, TypeScript, and MongoDB integration. It features a responsive design, admin panel for content management, and beautiful animations.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (for database)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_MONGODB_URI=your_mongodb_connection_string
VITE_MONGODB_DB=your_database_name
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├── components/        # React components
├── lib/              # MongoDB configuration and utilities
│   ├── mongodb.ts    # MongoDB client setup
│   └── db-utils.ts   # Database CRUD operations
├── pages/            # Application pages
└── ...
```

## MongoDB Collections

The project uses the following collections:
- `skills`: Store skills and proficiency levels
- `projects`: Store portfolio projects
- `certificates`: Store certifications
- `experience`: Store work experience

## Features

- Responsive design with Tailwind CSS
- MongoDB integration for content management
- Admin panel for CRUD operations
- Smooth animations with Framer Motion
- TypeScript for type safety

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- MongoDB
- Framer Motion
- shadcn/ui

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.