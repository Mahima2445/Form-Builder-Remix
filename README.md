# 🚀 Advanced Form Builder Application

A full-stack, modern form builder application with real-time collaboration, user authentication, and comprehensive form management. Built with React Remix frontend, Node.js/Express backend, and MongoDB database.

![Form Builder Banner](https://via.placeholder.com/800x400/6366f1/ffffff?text=Form+Builder+Application)

## ✨ Key Features

### 🎨 Form Building & Design

- **Drag & Drop Interface**: Intuitive form creation with visual field placement
- **Rich Field Types**: Text, textarea, select, checkbox, radio, date, email, phone, number, and signature fields
- **Real-time Preview**: See your form as you build it with responsive design preview
- **Dark/Light Theme**: Toggle between themes for comfortable editing
- **Form Templates**: Save and reuse custom templates + built-in templates

### 👥 User Management & Authentication

- **Firebase Authentication**: Secure user registration and login
- **User Dashboard**: Personalized user experience with profile management
- **Protected Routes**: Secure access to form builder and management features

### 📊 Data Management & Storage

- **MongoDB Integration**: Persistent storage for users, forms, templates, and responses
- **Real-time Sync**: Automatic synchronization between frontend and backend
- **Local Storage Backup**: Offline capability with localStorage fallback
- **Response Collection**: View, filter, and export form responses as CSV

### 🔗 Sharing & Collaboration

- **Shareable Links**: Generate unique URLs for form distribution
- **QR Code Generation**: Easy mobile access to forms
- **Response Analytics**: Track submission statistics and form performance

## 🏗️ Technology Stack

### Frontend

- **Framework**: React 18 with Remix
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Authentication**: Firebase Auth
- **Icons**: Lucide React
- **Drag & Drop**: React Beautiful DnD

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Firebase Admin SDK
- **File Processing**: ExcelJS for CSV exports

### DevOps & Deployment

- **Containerization**: Docker & Docker Compose
- **Environment**: Environment variables with dotenv
- **CORS**: Cross-origin resource sharing enabled

## 🚦 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v20 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Docker & Docker Compose** (optional, for containerized deployment)
- **Git** (for cloning the repository)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Mahima2445/Form-Builder-Remix.git
cd FormBuilder
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Configure Backend Environment Variables** (`.env`):

```env
PORT=5501
MONGO_URI=mongodb://localhost:27017/formbuilderDB
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/formbuilderDB
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

**Configure Frontend Environment Variables** (`.env`):

```env
VITE_API_BASE_URL=http://localhost:5501/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
# Add other Firebase config variables
```

### 4. Firebase Configuration

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password
3. Get your Firebase configuration
4. Update the frontend `.env` file with Firebase credentials
5. Download the Firebase Admin SDK service account key (for backend, if needed)

## 🚀 Running the Application

### Option 1: Development Mode (Recommended for Development)

**Terminal 1 - Start Backend:**

```bash
cd backend
npm start
# Server will run on http://localhost:5501
```

**Terminal 2 - Start Frontend:**

```bash
cd frontend
npm run dev
# Frontend will run on http://localhost:5173
```

### Option 2: Using Docker Compose (Recommended for Production)

```bash
# From the root directory
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

**Docker Services:**

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5501
- **MongoDB**: localhost:27017

### Option 3: Production Build

**Build Frontend:**

```bash
cd frontend
npm run build
npm start
```

**Start Backend:**

```bash
cd backend
npm start
```

## 📱 Usage Guide

### Getting Started

1. **Register/Login**: Create an account or sign in with existing credentials
2. **Dashboard Access**: Navigate to your personal dashboard after authentication
3. **Form Creation**: Click "Create New Form" to start building

### Creating Forms

1. **Drag Fields**: Drag field types from the left palette to the canvas
2. **Configure Fields**: Click on fields to edit properties (labels, validation, etc.)
3. **Preview**: Use the preview panel to test your form
4. **Save**: Click "Save" to store your form

### Managing Forms

- **Templates**: Save frequently used forms as templates
- **Share**: Generate shareable links for form distribution
- **Responses**: View and analyze form submissions
- **Export**: Download responses as CSV files

### Advanced Features

- **QR Codes**: Generate QR codes for mobile form access
- **Dark Mode**: Toggle between light and dark themes
- **Progress Saving**: Users can save and resume form filling
- **Validation**: Built-in field validation and error handling

## 📁 Project Structure

```
FormBuilder/
├── frontend/                 # React Remix frontend
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── routes/          # Remix routes/pages
│   │   ├── utils/           # Utility functions
│   │   └── firebase/        # Firebase configuration
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # Node.js Express backend
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── server.js            # Main server file
│   └── package.json
├── docker-compose.yml        # Docker orchestration
└── README.md
```

## 🔍 API Endpoints

### Authentication

- `POST /api/auth/save-user` - Save user data after registration

### Forms

- `POST /api/forms/create` - Create new form
- `GET /api/forms/:userId` - Get user's forms
- `POST /api/forms/save` - Save multiple forms

### Responses

- `POST /api/responses/save` - Save form responses
- `GET /api/responses/:userId` - Get user's responses

### Templates

- `POST /api/templates/save` - Save form templates
- `GET /api/templates/:userId` - Get user's templates

## 🛠️ Development

### Available Scripts

**Frontend:**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

**Backend:**

```bash
npm start            # Start server
npm run dev          # Start with nodemon (auto-reload)
```

### Environment Configuration

**Development vs Production:**

- Development: Use local MongoDB and development Firebase config
- Production: Use MongoDB Atlas and production Firebase config
- Docker: Configured for containerized deployment

## 🐳 Docker Deployment

The application includes Docker configuration for easy deployment:

**Services:**

- **Frontend**: Nginx-served React build
- **Backend**: Node.js API server
- **MongoDB**: Database with persistent volumes

**Commands:**

```bash
# Build and start all services
docker-compose up --build

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Scale services
docker-compose up --scale backend=2
```

## 🔧 Troubleshooting

### Common Issues

**MongoDB Connection Error:**

- Ensure MongoDB is running locally or check Atlas connection string
- Verify network connectivity and firewall settings

**Firebase Authentication Issues:**

- Check Firebase configuration in environment variables
- Verify Firebase project settings and authentication methods

**Port Conflicts:**

- Backend default: 5501
- Frontend default: 5173
- MongoDB default: 27017

**Build Issues:**

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all environment variables are set

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Firebase** for authentication services
- **MongoDB** for database solutions
- **Remix** for the React framework
- **Tailwind CSS** for styling
- **Lucide** for beautiful icons
- **React Beautiful DnD** for drag-and-drop functionality

---

**Built with ❤️ by [Mahima]**

For questions or support, please open an issue on GitHub.
