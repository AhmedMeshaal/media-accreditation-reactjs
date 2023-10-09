import React, { Component } from 'react';

class Login extends Component {
    render() {
        return(
            <form>
                <h3>Please, Sign in</h3>

                <input type='email' placeholder='Email Address' required/> <br />
                <input type='password' placeholder='Password' required/> <br />
                <button type='submit'>SIGN IN</button>
            </form>
        )
    }
}

export default Login;
