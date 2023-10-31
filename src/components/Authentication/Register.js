import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES, APP_ROUTES } from '../../utils/constants';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setConfirmation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const Register = async () => {
        try {
            setIsLoading(true);
            const response = await axios({
                method: 'POST',
                url: API_ROUTES.REGISTER,
                data: {
                    name,
                    email,
                    password,
                    password_confirmation
                }
            });
            if (!response?.data?.token) {
                console.log('Something went wrong during registration: ', response);
                return alert(response.data.message);
            }
            navigate(APP_ROUTES.REGISTER)
        }
        catch (error) {
            console.log('Some error occured during registration: ', error.toJSON());
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-800">
            <div className="w-1/2 h-3/4 shadow-lg rounded-md bg-white p-8 flex flex-col">
                <h2 className="text-center font-medium text-2xl mb-4">
                    Sign Up
                </h2>
                <div className="flex flex-1 flex-col justify-evenly">
                    <input
                        className="border-2 outline-none p-2 rounded-md"
                        type="text"
                        placeholder="First Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                    />
                    <input
                        className="border-2 outline-none p-2 rounded-md"
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }}
                    />
                    <input
                        className="border-2 outline-none p-2 rounded-md"
                        type="password"
                        placeholder="Set Your Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                    />
                    <input
                        className="border-2 outline-none p-2 rounded-md"
                        type="password"
                        placeholder="Confirm Your Password"
                        value={password_confirmation}
                        onChange={(e) => { setConfirmation(e.target.value); }}
                    />

                    <button
                        className="
                         flex justify-center
                         p-2 rounded-md w-1/2 self-center
                         bg-gray-800  text-white
                         hover:bg-gray-700"
                        onClick={Register}
                    >
                        {
                            isLoading ?
                                <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
                        }
                        <span>
              SIGN UP
            </span>
                    </button>
                </div>
                <div className="text-center text-sm">
                    Already a User?
                    <Link to="/login">
            <span className="font-medium text-gray-800 ml-1">
              Sign In
            </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;