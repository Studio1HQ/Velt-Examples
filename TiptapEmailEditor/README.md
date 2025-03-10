# Velt Examples

This repository contains example applications demonstrating various Velt integration scenarios. Each example showcases different features and use cases of the Velt platform.

## 📚 Available Examples

### 1. TipTap Commenting Example
A React-based application demonstrating real-time collaborative commenting integrated with the TipTap rich text editor. This example showcases:
- Real-time commenting on rich text content
- Modern email composer interface
- Responsive design with mobile support
- Integration of Velt's commenting system with TipTap editor

[View TipTap Example Details](./project-1/README.md)

## 🚀 Getting Started

Each example is a standalone application with its own setup and configuration. Follow these general steps to run any example:

### Prerequisites
- Node.js (LTS version 18 or higher)
- npm (v8 or higher) or yarn
- Git

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Studio1HQ/Velt-Examples.git
   ```

2. Choose an example project and navigate to its directory:
   ```bash
   cd TiptapEmailEditor  # for TipTap Commenting Example
   ```

3. Install dependencies:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

4. Set up environment variables:
   - Copy the sample environment file:
     ```bash
     cp .env.sample .env
     ```
   - Open the `.env` file and update the following variables:
     ```bash
     # Required: Your Velt API key
     VITE_VELT_API_KEY=your_api_key_here
     ```

5. Start the development server:
   ```bash
   npm run dev
   # or if using yarn
   yarn dev
   ```
   The application will be available at `http://localhost:5173`

### Available Commands

Each example includes the following npm scripts:

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

### Environment Variables Reference

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_VELT_API_KEY` | Your Velt API key for authentication | Yes | - |

## 🔑 Getting Your Velt API Key

1. Sign up for a free account at [Velt's Developer Portal](https://velt.dev)
2. Create a new project in the dashboard
3. Find your API key in the project settings
4. Use this API key in the `.env` file of the example you want to run

## 📚 Additional Resources

- [Velt Documentation](https://docs.velt.dev)
- [Velt React SDK Documentation](https://docs.velt.dev/react)
- [TipTap Editor Documentation](https://tiptap.dev)
- [Velt Community & Support](https://discord.gg/velt)


## ⚠️ Note

These examples are meant for demonstration purposes and may not cover all production scenarios. Always refer to our [official documentation](https://docs.velt.dev) for complete implementation guidelines. 
