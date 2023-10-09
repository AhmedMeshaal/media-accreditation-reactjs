import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setConfirmation] = useState('');
    const [navigate , setNavigate] = useState(false);

    const submit = async (event: SyntheticEvent) => {
        event.preventDefault();

        // const response = await fetch('http://accrdet.localhost/api/auth/register', {
     await fetch('http://accrdet.localhost/api/auth/register', {

                method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password,
                password_confirmation
            })
        });
        // const content = await response.json();
        // console.log(content);
     setNavigate(true);
    }

    if (navigate) {
        return <Navigate  to='/login'/>
    }

        return(
            <form onSubmit={submit}>
                <h3>Please, Register</h3>

                <input placeholder='Name' required onChange={event => setName(event.target.value)} /> <br />

                <input type='email' placeholder='Email Address' required onChange={event => setEmail(event.target.value)} /> <br />

                <input type='password' placeholder='Password' required onChange={event => setPassword(event.target.value)} /> <br />

                <input type='password' placeholder='Password' required onChange={event => setConfirmation(event.target.value)} /> <br />

                <button type='submit'>SIGN IN</button>
            </form>
        );

}

export default Register;