// import React, {Component} from 'react';
//
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Contact from './components/Contact';
// import Home from './components/Home';
// import About from "./components/About";
// import NotFound from "./components/NotFound";
// import Login from "./components/Authentication/Login";
// import Register from "./components/Authentication/Register";
//
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <Navbar/>
//
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/notFound" element={<NotFound />} />
//                     <Route path="/login" element={<Login />}/>
//                     <Route path="/register" element={<Register />} />
//                 </Routes>
//
//             </>
//         );
//     }
// }
// export default App;

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import { APP_ROUTES } from './utils/constants';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Navigate to={APP_ROUTES.DASHBOARD} />} />
                <Route path={APP_ROUTES.REGISTER} exact element={<Register />} />
                <Route path={APP_ROUTES.LOGIN}  exact element={<Login />} />
                <Route path={APP_ROUTES.DASHBOARD} element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;