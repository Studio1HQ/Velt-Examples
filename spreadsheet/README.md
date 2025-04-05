# Spreadsheet - Collaborative Spreadsheet Application

A modern, collaborative spreadsheet application built with Next.js and Velt for real-time collaboration features. This sample demonstrates how to integrate Velt's real-time collaboration features into a spreadsheet application.

<video controls>
  <source src="https://github.com/user-attachments/assets/a55c56d4-a36c-422c-89f3-db0da92e5425" type="video/mp4">
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
- Velt SDK
- Shadcn UI components

## Prerequisites

- Node.js 18.x or later
- pnpm package manager
- A Velt API key (get one from [Velt Dashboard](https://app.velt.dev))

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/Studio1HQ/Velt-Examples
   ```

2. Navigate to the `spreadsheet` directory

   ```bash
   cd spreadsheet
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Create a `.env.local` file with your Velt API key:

   ```
   NEXT_PUBLIC_VELT_API_KEY=your_api_key_here
   ```

   > Note: You can get your API key from the [Velt Dashboard](https://app.velt.dev)

5. Run the development server:

   ```bash
   pnpm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
spreadsheet/
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

This project uses Velt SDK v4.2.1-beta.7 for real-time collaboration features:

### Core Features

- User presence and cursor tracking
- Comments and annotations
- Notifications
- Real-time updates

### Velt Components Used

- `VeltProvider`: Main provider component for Velt integration
- `VeltComments`: Inline commenting system
- `VeltCursor`: Real-time cursor tracking
- `VeltPresence`: User presence indicators
- `VeltNotificationsTool`: Notification system
- `VeltCommentsSidebar`: Comments management sidebar

### Configuration

The application uses the following Velt configurations:

- Document ID: "space-missions-spreadsheet-org"
- User authentication with predefined users
- Custom comment bubble styling
- Dark/Light mode support

## Troubleshooting

### Common Issues

1. **Velt API Key Issues**

   - Ensure your API key is correctly set in `.env.local`
   - Verify the key is active in your Velt Dashboard

2. **Collaboration Features Not Working**

   - Check browser console for errors
   - Verify network connectivity
   - Ensure you're using a supported browser

3. **Build Issues**
   - Clear `.next` directory and node_modules
   - Run `pnpm install` again
   - Check Node.js version compatibility

## Documentation

### Velt Resources

- [Velt Documentation](https://docs.velt.dev/getting-started/introduction)
- [Velt API Reference](https://docs.velt.dev/api-reference)
- [Velt Dashboard](https://app.velt.dev)
- [Velt GitHub](https://github.com/veltdev)

### UI Components

- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Feel free to submit issues and enhancement requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
