

---

# 📝 MERN Stack Note App

Welcome to the **MERN Stack Note App**, a full-featured note-taking application built using MongoDB, Express, React, and Node.js. This project offers a simple yet powerful solution for managing notes with user authentication using JWT.



## 🚀 Features

- **User Authentication**: Secure login and account creation with JWT tokens.
- **Note Management**: Add, edit, and delete notes with title, content, and tags.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Pin Notes**: Easily pin important notes for quick access.
- **Secure Data**: All notes are tied to individual user accounts.
- **Error Handling**: Robust error handling and user-friendly messages.
  
## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS (optional, adjust as needed)
- **Version Control**: Git

## 📂 Folder Structure

```
├── client               # React Frontend (optional if backend only)
├── models               # MongoDB Models for User and Note
├── routes               # Express Routes for API Endpoints
├── utilities            # Utility functions (e.g., JWT authentication)
├── .env                 # Environment Variables (ACCESS_TOKEN_SECRET)
├── app.js               # Main backend server file
├── README.md            # This README file
└── package.json         # Node.js dependencies
```

## 📜 API Endpoints

### User Authentication
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| POST   | `/create-account`     | Create a new user account    |
| POST   | `/login`              | Login to an existing account |

### Note Management
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| POST   | `/add-note`           | Add a new note               |
| PUT    | `/edit-note/:noteId`  | Edit an existing note        |
| DELETE | `/delete-note/:noteId`| Delete a note                |

### Sample API Request

```bash
POST /login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

## 🔧 Installation & Setup

### Backend Setup (Node.js, Express, MongoDB)
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/note-app.git
   cd note-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file at the root and add your **MongoDB connection string** and **JWT secret**:
   ```
   ACCESS_TOKEN_SECRET=your_jwt_secret
   MONGODB_URI=mongodb://localhost:27017/note-app
   ```

4. **Run the app**:
   ```bash
   npm start
   ```

### Frontend Setup (React)
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

> Make sure MongoDB is running locally or provide a cloud-based MongoDB connection string in the `.env` file.

## 🔐 Authentication

- This app uses **JWT (JSON Web Tokens)** to handle authentication. After login, the backend returns a JWT token that should be stored client-side (e.g., in localStorage).
- All requests to protected routes (e.g., adding/editing notes) must include the JWT in the `Authorization` header:
  
```bash
Authorization: Bearer <your_token>
```

## 🛡️ Security Recommendations

- **Hash Passwords**: Though this implementation stores plain text passwords, it is highly recommended to use a hashing mechanism such as **bcrypt** to securely store passwords.
- **Environment Variables**: Never hard-code sensitive information (e.g., JWT secrets, database credentials) into your codebase. Always use environment variables.

## 🤝 Contributing

We welcome contributions! If you'd like to improve this project:

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## 📧 Contact

Feel free to reach out for any queries or contributions!

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [@your-github](https://github.com/your-username)

---

