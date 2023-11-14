import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from '../src/components/Dashboard';
import Login from '../src/components/Login/Login';
import Preferences from '../src/components/Preferences';
import useToken from '../src/Hook/useToken';


function App() {

    const { token, setToken } = useToken();

    const handleLogout = () => {
        // remove the token and user from the session storage
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');

        window.location.href = '/login';
    }


    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <Router>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </Router>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default App;