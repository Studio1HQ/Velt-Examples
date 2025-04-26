---

# 📄 DataGrid - Collaborative DataGrid Application

A modern, collaborative DataGrid application built with **Next.js**, **TypeScript**, and **Velt** for real-time collaboration features.  
This sample demonstrates how to integrate **Velt's real-time collaboration features** into a **DataGrid** environment.

---

## ✨ Features

- Real-time collaboration with live presence indicators
- Inline comments and annotations on cells
- Responsive design (Desktop + Mobile friendly)
- Light and Dark theme support
- Modern UI with Tailwind CSS and Shadcn UI components
- Sortable, interactive DataGrid with customizable columns
- Smooth user experience with real-time updates

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Velt SDK](https://velt.dev/)
- [Shadcn UI](https://ui.shadcn.dev/)
- [React](https://react.dev/)
- [MUI](https://https://mui.com/)
---

## ⚙️ Prerequisites

- **Node.js** 18.x or later
- **npm** package manager
- A **Velt API Key** (You can get one from the [Velt Dashboard](https://dashboard.velt.dev/))

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-datagrid-project
```

### 2. Navigate to the Project Directory

```bash
cd datagrid
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_VELT_API_KEY=your_velt_api_key_here
```

👉 You can obtain your API Key from the [Velt Dashboard](https://dashboard.velt.dev/).

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📁 Project Structure

```bash
datagrid/
├── app/                    # Next.js App Directory
├── components/             # React Components
│   ├── datagrid/            # DataGrid Components
│   ├── toolbar/             # Application Toolbar
│   ├── velt/                # Velt Integration Components
│   └── ui/                  # Shadcn UI Components
├── hooks/                  # Custom React Hooks
├── lib/                    # Utility Functions and Types
├── public/                 # Static Assets

```

---

## 🔗 Velt Integration

This project uses **Velt SDK v4.2.1-beta.7** for real-time collaboration:

### Core Features

- User presence and cursor tracking
- Inline comments and annotations
- Notifications
- Real-time updates on data changes

### Velt Components Used

- `VeltProvider`: Main provider component for Velt integration
- `VeltComments`: Inline commenting system
- `VeltCursor`: Real-time cursor tracking
- `VeltPresence`: User presence indicators
- `VeltCommentTool`: Comment tool for mobile/desktop
- `VeltNotificationsTool`: Notifications for collaboration events

### Configuration

- **Document ID**: Configured dynamically based on the dataset
- **User Authentication**: Predefined users for demo purposes
- **Theme Adaptation**: Supports both Light and Dark modes

---

## 🧹 Troubleshooting

### Common Issues

- **Velt API Key Issues**
  - Ensure your API key is correctly set inside `.env.local`.
  - Verify your key is active in your Velt Dashboard.

- **Collaboration Features Not Working**
  - Check the browser console for any errors.
  - Verify your internet/network connection.
  - Ensure your browser supports WebSockets and latest web standards.

- **Build/Install Errors**
  - Clear the `.next` folder and `node_modules`:
    ```bash
    rm -rf .next node_modules
    npm install
    ```
  - Ensure you're using **Node.js 18.x or higher**.

---

## 📚 Documentation

### Useful Resources
- [Velt Documentation](https://docs.velt.dev/)
- [Velt API Reference](https://docs.velt.dev/api/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.dev/)

---

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests.  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

# 🚀 Let's Build a Better Collaborative Future!
