import React, {Component} from 'react';

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import Home from './components/Home';
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";


class App extends Component {

    render() {
        return (
            <>
                <Navbar/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/notFound" element={<NotFound />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />} />
                </Routes>

            </>
        );
    }
}
export default App;