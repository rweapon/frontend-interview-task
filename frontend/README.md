# React Dashboard with A/B Testing

A modern React dashboard application for managing and visualizing A/B tests, built with React, TypeScript, and Tailwind CSS.

![Dashboard Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=600)

## 🚀 Features

- **Interactive Dashboard**: View and manage A/B tests with a responsive table interface
- **Smart Filtering**: Filter tests by name with real-time search
- **Advanced Sorting**: Sort by multiple columns with intelligent ordering
- **Site Management**: Clean URL display without protocols
- **Keyboard Navigation**: Full keyboard accessibility support
- **Type Safety**: Built with TypeScript for robust type checking
- **Responsive Design**: Fully responsive layout that works on all devices

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-dashboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── services/         # API and other services
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── App.tsx           # Main application component
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 🎯 Core Features

### Dashboard Table
- Display A/B tests in a sortable, filterable table
- Hover states for better user interaction
- Clean URL display (removes http/https/www)

### Filtering
- Real-time search functionality
- Reset filter option
- "No results" state handling

### Sorting
- Multi-column sorting support
- Custom sort order for status:
  - ASC: Online → Paused → Stopped → Draft
  - DESC: Draft → Stopped → Paused → Online

### Routing
- `/dashboard` - Main dashboard view
- `/results/:testId` - Test results page
- `/finalize/:testId` - Test finalization page

## 🌐 API Integration

The application integrates with a local API server for test data. Ensure the API server is running locally before starting the application.

## 🎨 Design System

Built with Tailwind CSS, featuring:
- Consistent spacing and typography
- Responsive design patterns
- Accessible color schemes
- Interactive states

## ⌨️ Accessibility

- Full keyboard navigation support
- ARIA labels for interactive elements
- Focus management
- Screen reader friendly

## 🧪 Testing

The project includes:
- Unit tests for components
- Integration tests for key features
- Accessibility tests
- API mocking

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and tools