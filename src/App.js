import React from 'react'
import './App.css'
import Register from 'pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/navbar/Navbar.jsx'
import Login from './pages/login/Login.jsx'
import CreatePost from './pages/create-post/CreatePost'
import Home from './Home/Home.js'

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="new" element={<CreatePost />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route />
            </Routes>
        </Router>
    )
}

export default App
