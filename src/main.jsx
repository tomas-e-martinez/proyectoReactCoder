import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7QtULMAGTbVifCEXvCbbi-DD2qpNaGMo",
  authDomain: "proyectoreact-56001.firebaseapp.com",
  projectId: "proyectoreact-56001",
  storageBucket: "proyectoreact-56001.appspot.com",
  messagingSenderId: "951440402760",
  appId: "1:951440402760:web:03cb9db68411428e686b7d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
