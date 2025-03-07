# Inventory Management System with Velt Comments

A modern, real-time inventory management system with collaborative commenting features. Built with Next.js and powered by Velt for seamless team communication.

<video width="100%" controls>
  <source src="https://github.com/user-attachments/assets/f1afb18e-0893-4e82-97d8-31af2366c7af" type="video/mp4">
Your browser does not support the video tag.
</video>

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Comments**: Velt SDK for real-time collaboration
- **State Management**: React's built-in useState
- **Type Safety**: TypeScript for better development experience

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- A Velt account (sign up at [velt.dev](https://velt.dev))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/velt-examples.git
cd velt-examples/project-9
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in `.env.local`:

```env
NEXT_PUBLIC_VELT_API_KEY=your_velt_api_key
```

4. Start the development server:

```bash
npm run dev
```

5. Visit `http://localhost:3000` to see your application

## Project Structure

```
── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── VeltProviderWrapper.tsx
│   ├── components
│   │   ├── InventoryList.tsx
│   │   ├── MetricsCard.tsx
│   │   ├── Navigation.tsx
│   │   ├── QuickFilters.tsx
│   │   └── VeltClientWrapper.tsx
│   ├── data
│   │   └── inventory.ts
│   ├── types
│   │   └── inventory.ts
│   └── utils
│       ├── inventory.ts
│       └── randomUser.ts
└── tsconfig.json
```

## Velt Integration

The project uses Velt to enable real-time commenting on inventory items. To get started with Velt:

1. Create an account at [velt.dev](https://velt.dev)
2. Get your API key from the dashboard
3. Add your API key to the `.env.local` file
4. The commenting system will be automatically enabled

### Commenting Features

- Click the comment tool button in the bottom-right corner
- Select any inventory item to add a comment
- View and reply to comments in real-time
- Comments persist across sessions

Built with ❤️ using Next.js and Velt
