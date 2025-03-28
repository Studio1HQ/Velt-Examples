# Dataflow - Collaborative Spreadsheet Application

A modern, collaborative spreadsheet application built with Next.js and Velt for real-time collaboration features.

<video controls>
  <source src="https://github.com/user-attachments/assets/39d15389-8c8b-49fd-a769-b1233a15da38" type="video/mp4">
</video>

## Features

- Real-time collaboration with presence indicators
- Inline comments and annotations
- Dark/Light theme support
- Responsive design
- Modern UI with Tailwind CSS
- Spreadsheet functionality with cell selection and formatting

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Velt SDK for collaboration
- Shadcn UI components

## Prerequisites

- Node.js 18.x or later
- pnpm package manager

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env.local` file with your Velt API key:
   ```
   NEXT_PUBLIC_VELT_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   pnpm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
dataflow/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── document/         # Spreadsheet document component
│   ├── toolbar/          # Application toolbar
│   ├── velt/            # Velt integration components
│   └── ui/              # UI components
├── lib/                  # Utility functions and types
├── public/              # Static assets
└── styles/              # Global styles
```

## Velt Integration

This project uses Velt SDK for real-time collaboration features:

- User presence
- Comments and annotations
- Notifications
- Cursor tracking

## Documentation

- [Velt Documentation](https://docs.velt.dev/getting-started/introduction)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
