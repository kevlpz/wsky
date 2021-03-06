import { useState } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Login = ({ history, isLoggedIn, setIsLoggedIn }) => {
    const [creds, setCreds] = useState({ email: '', password: '' })
    const [cookiesAllowed, setCookiesAllowed] = useState(true)
    console.log('cookie: ', navigator.cookieEnabled)

    const handleChange = event => {
        setCreds({ ...creds, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios({
            method: 'post',
            url: 'https://infinite-refuge-27306.herokuapp.com/users/login',
            data: creds,
            withCredentials: true
        })
            .then(res => {
                axios({
                    method: 'get',
                    url: 'https://infinite-refuge-27306.herokuapp.com/users',
                    withCredentials: true
                })
                .then(res => {
                    setIsLoggedIn(true)
                    history.push('/')
                    window.location.reload()
                })
                .catch(err => {
                    console.log('err: ', err)
                    console.log('Must enable third part cookies')
                    setCookiesAllowed(false)
                })
            })
            .catch(err => console.log('err: ', err))
    }

    return (
        !isLoggedIn ? (
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
                        type="password"
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
                {
                    cookiesAllowed ? null : (
                        <>
                            <p className="warning">Must have third party cookies enabled</p>
                            <p>Please enable third party cookies in your browser's settings</p>
                        </>
                    )
                }
            </form>
        </div>
        ) : <Redirect to="/" />
    )
}

export default Login