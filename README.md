# DocCollab - Real-Time Collaborative Document Editor

A modern, real-time collaborative document editor built with React, Node.js, and Socket.io. Multiple users can create, edit, and collaborate on documents simultaneously with live updates, just like Google Docs.

## 🚀 Features

- **Real-time Collaboration**: Multiple users can edit documents simultaneously with live updates
- **Rich Text Editor**: Powered by Quill.js with formatting options
- **User Authentication**: JWT-based authentication with login/register
- **Document Management**: Create, edit, delete, and organize documents
- **Auto-save**: Documents are automatically saved as you type
- **Document Sharing**: Generate shareable links for documents
- **Collaborator Management**: Add/remove collaborators with view/edit permissions
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Cursors**: See where other users are editing
- **Document History**: Track changes and versions

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Quill.js** - Rich text editor
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd collaborative-document-editor
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/collaborative-editor
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=development
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system. If using a local installation:
   ```bash
   mongod
   ```

5. **Start the application**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend development server (port 3000).

6. **Open your browser**
   
   Navigate to `http://localhost:3000` to access the application.

## 🚀 Usage

### Getting Started

1. **Register/Login**: Create a new account or login with existing credentials
2. **Create Document**: Click "New Document" to create a new document
3. **Start Editing**: Use the rich text editor to write your content
4. **Invite Collaborators**: Click "Share" to generate a shareable link or add collaborators
5. **Real-time Collaboration**: Share the link with others to collaborate in real-time

### Features Guide

#### Document Management
- **Create**: Click "New Document" from the dashboard
- **Edit**: Click on any document to open the editor
- **Delete**: Use the menu (three dots) on document cards
- **Search**: Use the search bar to find documents

#### Collaboration
- **Share Link**: Generate a public link for anyone to view
- **Add Collaborators**: Invite specific users by email
- **Real-time Updates**: See changes from other users instantly
- **Live Cursors**: See where other users are editing

#### Editor Features
- **Rich Text**: Bold, italic, underline, lists, headers, etc.
- **Auto-save**: Documents save automatically every 2 seconds
- **Title Editing**: Click on the title to edit it
- **Collaborator List**: See who's currently editing

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/collaborative-editor |
| `JWT_SECRET` | Secret key for JWT tokens | (required) |
| `NODE_ENV` | Environment mode | development |

### Customization

#### Styling
- Modify `client/tailwind.config.js` for theme customization
- Update `client/src/index.css` for global styles
- Component styles are in individual component files

#### Backend
- API routes are in `server/routes/`
- Database models are in `server/models/`
- Socket.io events are in `server/index.js`

## 📁 Project Structure

```
collaborative-document-editor/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   └── App.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── index.js           # Server entry point
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## 🚀 Deployment

### Frontend (React)
1. Build the production version:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

### Backend (Node.js)
1. Set production environment variables
2. Deploy to your hosting service (Heroku, DigitalOcean, AWS, etc.)
3. Update the API URL in the frontend if needed

### Database
- Use MongoDB Atlas for cloud database
- Update the `MONGODB_URI` in your environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Quill.js](https://quilljs.com/) for the rich text editor
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Socket.io](https://socket.io/) for real-time communication
- [React](https://reactjs.org/) for the frontend framework
- [Express.js](https://expressjs.com/) for the backend framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy Collaborating! 🎉**
