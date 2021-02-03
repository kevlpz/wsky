import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = ({ history }) => {
    const [creds, setCreds] = useState({ email: '', password: '' })

    const handleChange = event => {
        setCreds({ ...creds, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:5000/users/login',
            data: creds,
            withCredentials: true
        })
            .then(res => {
                history.push('/')
                window.location.reload()
            })
            .catch(err => console.log('err: ', err))
    }



    return (
        <div className="login-container">
            <h2>Login</h2>
            <p>Log in to access cart!</p>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={creds.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label>Password:</label>
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={creds.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="buttons">
                    <button type="submit">Log in</button>
                    <Link to="/register">
                        <button className="register-button">Register</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login