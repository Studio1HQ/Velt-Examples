# Velt Video Player Example

A React-based video player application with real-time collaborative features powered by Velt. This application demonstrates real-time presence, commenting, and dark mode functionality.

## 🚀 Features

- Video playback with standard controls
- Real-time collaborative commenting
- User presence indicators
- Dark/Light mode support
- Responsive design
- User authentication and persistence
- Modern UI with Tailwind CSS

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Topbar.tsx       # Top navigation bar with user presence
│   └── VideoPlayer.tsx  # Main video player component
│
├── context/             # React context providers
│   └── ThemeContext.tsx # Dark/Light mode context
│
├── services/            # Service integrations
│   ├── AuthComponent.tsx    # Velt authentication
│   └── YourDocument.tsx    # Velt document setup
│
├── utils/              # Utility functions and constants
│   └── constant.tsx    # App-wide constants
│
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- Velt SDK for real-time collaboration
- Tailwind CSS
- Lucide React for icons

## 📦 Prerequisites

- Node.js (LTS version 18 or higher)
- npm (v8 or higher) or yarn
- Git
- Velt API Key

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/velt-video-player.git
   cd velt-video-player
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. Set up environment variables:
   - Copy the sample environment file:
     ```bash
     cp .env.sample .env
     ```
   - Open the `.env` file and update the following variables:
     ```
     VITE_VELT_API_KEY=your_api_key_here
     ```
   > Note: You can obtain your Velt API key from [Velt's Developer Portal](https://velt.dev)

4. Start the development server:
   ```bash
   npm run dev
   # or if using yarn
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

## 🎮 Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🔑 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_VELT_API_KEY` | Your Velt API key for authentication | Yes | - |

## 🌙 Dark Mode

The application supports both light and dark modes:
- Automatic detection of system preference
- Manual toggle via the sun/moon icon
- Persistent preference storage
- Smooth transitions between themes

## 👥 Real-time Features

- **User Presence**: See who's currently viewing the video
- **Live Comments**: Add and view comments in real-time
- **Persistent Users**: User information is stored locally

## 📚 Additional Resources

- [Velt Documentation](https://docs.velt.dev)
- [Velt React SDK Documentation](https://docs.velt.dev/react)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 💬 Support

- Join our [Discord Community](https://discord.gg/velt)
- Visit our [Help Center](https://help.velt.dev)
- Contact us at support@velt.dev

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/velt-video-player/issues). 