// import React, { useState, useEffect } from 'react';
//
// const Login = () => {
//
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//
//     const submit = async (event: SyntheticEvent) => {
//         event.preventDefault();
//
//         await fetch('http://accrdet.localhost/api/auth/login', {
//
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             credentials: 'include',
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//         });
//     }
//
//         return(
//             <form onSubmit={submit}>
//                 <h3>Please, Sign in</h3>
//
//                 <input type='email' placeholder='Email Address' required onChange={event => setEmail(event.target.value)}/> <br />
//                 <input type='password' placeholder='Password' required onChange={event => setPassword(event.target.value)}/> <br />
//
//                 <button type='submit'>SIGN IN</button>
//             </form>
//         )
//
// }
//
// export default Login;

import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
        const submit = async (e) => {
            e.preventDefault();
            const response = await fetch('http://accrdet.localhost/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                // The login was successful.
                console.log('sogin success');
            } else {
                // The login failed.
                console.log('login failed')
            }
        }
        
    return (
        <form onSubmit={submit}>
            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;