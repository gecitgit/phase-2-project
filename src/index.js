import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCRn64LjGfkK-IqS_8bGNF0Tz1k6hnzJpM",
    authDomain: "mindlog-db.firebaseapp.com",
    projectId: "mindlog-db",
    storageBucket: "mindlog-db.appspot.com",
    messagingSenderId: "680777348843",
    appId: "1:680777348843:web:c941c90e90b2cf4173b0ae",
    measurementId: "G-CDS9EHH4HF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);
