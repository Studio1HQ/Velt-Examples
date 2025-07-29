# Customer.io Velt Example (Next.js)

A collaborative email composer built with Next.js, React, Tailwind CSS, and [Velt](https://velt.dev), demonstrating real-time commenting and multi-user collaboration for modern SaaS applications.

---

## Features

- ✉️ **Email Composer**: Compose, edit, and format emails with a rich text editor (Tiptap).
- 🧑‍🤝‍🧑 **Multi-User Support**: Switch between predefined users with avatars.
- 💬 **Real-Time Comments**: Add and view collaborative comments using Velt.
- 🌓 **Dark/Light Theme**: Toggle between dark and light modes.
- 📊 **Sidebar & Metrics**: Sidebar for navigation and info cards for journey/metrics.
- 🔔 **Notifications**: In-app notifications powered by Velt.
- 🧩 **Reusable UI Components**: Built with shadcn/ui and Radix primitives.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Editor**: [Tiptap](https://tiptap.dev/)
- **Collaboration**: [Velt](https://velt.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Other**: [Radix UI](https://www.radix-ui.com/), [TanStack React Query](https://tanstack.com/query/latest)

---

## Prerequisites

- **Node.js** (v16+ recommended)
- **npm** (v8+ recommended)

---

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/Studio1HQ/Velt-Examples
   ```

2. Navigate to the `spreadsheet` directory

   ```bash
   cd customerio-velt-example
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Create a `.env.local` file with your Velt API key:

   ```
   NEXT_PUBLIC_VELT_ID=your_api_key_here
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
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── (funtions)/      # Spreadsheet document component
│   ├── velt/            # Velt integration components
│   └── ui/              # UI components
├── lib/                 # Utility functions and types
├── helper/              # Users DB
├── hooks/               # Toast Hooks
├── public/              # Static assets
└── styles/              # Global styles
```

## Velt Integration

This project uses Velt SDK v4.5.0-beta.14 for real-time collaboration features:

### Core Features

- User presence and cursor tracking
- Comments and annotations
- Notifications
- Real-time updates

### Velt Components Used

- `VeltProvider`: Main provider component for Velt integration
- `VeltComments`: Inline commenting system
- `VeltNotificationsTool`: Notification system
- `VeltCommentsSidebar`: Comments management sidebar

### Configuration

The application uses the following Velt configurations:

- Document ID: "sheet-1-customer.io "
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