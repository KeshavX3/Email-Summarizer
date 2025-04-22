# 📧 Email Summarizer with Gemini API

<div align="center">
  <img src="frontend/src/assets/Jinwoo.png" alt="Email Summarizer Logo" width="100"/>
  
  [![Python](https://img.shields.io/badge/Python-3.7%2B-blue.svg)](https://www.python.org/)
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![Flask](https://img.shields.io/badge/Flask-2.0.1-green.svg)](https://flask.palletsprojects.com/)
  [![Gemini API](https://img.shields.io/badge/Gemini%20API-1.5-purple.svg)](https://ai.google.dev/)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
</div>

## 🌟 Overview

A powerful email summarization tool that combines the capabilities of Gmail API with Google's Gemini AI to transform lengthy emails into concise, easy-to-read summaries. The application features a modern React frontend and a Flask backend, providing a seamless user experience.

<div align="center">
  <img src="https://raw.githubusercontent.com/nehavaishnav/Email-Summarizer-Gemini-API--main/main/screenshots/demo.gif" alt="Demo" width="600"/>
</div>

## ✨ Key Features

### 🎨 Modern UI
- **Dark/Light Mode** - Switch between themes based on system preference
- **Responsive Design** - Works seamlessly on all devices
- **Interactive Elements** - Smooth animations and transitions
- **Character Counter** - Track email length in real-time

### 🤖 AI-Powered Summarization
- **Multiple Tone Options** - Generate summaries in Professional, Regular, or Friendly tones
- **Smart Summarization** - Uses Gemini AI for context-aware summaries
- **Copy to Clipboard** - Easy sharing of generated summaries

### 🔒 Security
- **OAuth2 Authentication** - Secure Gmail account integration
- **Environment Variables** - Safe API key management
- **CORS Protection** - Secure frontend-backend communication

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **CSS3** - Styling with modern features
- **Axios** - API communication

### Backend
- **Python 3.7+** - Core programming language
- **Flask** - Web framework
- **Gmail API** - Email fetching
- **Gemini API** - AI summarization
- **Flask-CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Python 3.7+** installed
2. **Node.js** and **npm** installed
3. **Gmail API credentials** from [Google Cloud Console](https://console.cloud.google.com/)
4. **Gemini API key** from [Google AI Studio](https://makersuite.google.com/)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/KeshavX3/Email-Summarizer.git
cd Email-Summarizer-main
```

### 2. Backend Setup
```bash
cd backend
pip install -r requirements.txt

# Create .env file with your Gemini API key
echo "GEMINI_API_KEY=your_gemini_api_key" > .env

# Run the backend server
python main.py
```

The backend server will start running on `http://localhost:5000`. Keep this terminal window open.

### 3. Frontend Setup
```bash
# Open a new terminal window
cd frontend
npm install
npm start
```

The frontend will start running on `http://localhost:3000`

## 🏗️ Project Structure

```
📁 Email-Summarizer-Gemini-API--main
│
├── 📁 backend/
│   ├── 📁 credentials/        # Gmail API credentials
│   ├── 📄 main.py            # Flask server (Run this to start backend)
│   ├── 📄 gmail_reader.py    # Gmail API integration
│   ├── 📄 summarizer.py      # Gemini AI integration
│   ├── 📄 requirements.txt   # Python dependencies
│   └── 📄 .env              # Environment variables
│
└── 📁 frontend/
    ├── 📁 src/
    │   ├── 📁 components/    # React components
    │   ├── 📄 App.js        # Main React component
    │   └── 📄 App.css       # Styling
    ├── 📄 package.json      # Node dependencies
    └── 📄 .env             # Frontend environment variables
```

## 🎮 Usage

1. **Start the Backend Server**
   ```bash
   cd backend
   python main.py
   ```
   The backend server will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will open automatically in your default browser at `http://localhost:3000`

3. **Using the Application**
   - Select your preferred tone (Professional, Regular, or Friendly)
   - Paste your email in the text area
   - Click "Generate Summary" to get your AI-powered summary
   - Use the copy button to copy the summary to your clipboard

## 📸 Screenshots

<div align="center">
  <img src="screenshots/light-mode.png" alt="Light Mode" width="400"/>
  <img src="screenshots/dark-mode.png" alt="Dark Mode" width="400"/>
</div>

## 🔧 Configuration

### Backend Configuration
1. Navigate to the backend directory
2. Create a `.env` file with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   ```
3. Place your Gmail API credentials in the `credentials/` directory
4. Run `python main.py` to start the backend server

### Frontend Configuration
- Customize colors in `App.css`
- Modify API endpoints in `App.js` if needed

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google AI Studio](https://makersuite.google.com/) for the Gemini API
- [Gmail API](https://developers.google.com/gmail/api) for email integration
- [React](https://reactjs.org/) and [Flask](https://flask.palletsprojects.com/) communities

## 📞 Support

For support, email [your-email@example.com] or open an issue in the repository.

---

<div align="center">
  Made with ❤️ by [Your Name]
</div>
