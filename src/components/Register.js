import { useState } from 'react'
import axios from 'axios'

const Login = ({ history }) => {
    const [creds, setCreds] = useState({ email: '', password: '', confirmPassword: '' })

    const handleChange = event => {
        setCreds({ ...creds, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (creds.password === creds.confirmPassword) {
            axios({
                method: 'post',
                url: 'https://infinite-refuge-27306.herokuapp.com/users/register',
                data: creds,
                withCredentials: true
            })
                .then((res) => {
                    console.log('res: ', res)
                    history.push('/')
                })
                .catch(err => console.log('err: ', err))
        } else {
            console.log('Passwords must match')
        }
    }

    return (
        <div className="login-container">
            <h2>Register</h2>
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
                <div className="input-container">
                    <label>Confirm password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={creds.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="buttons">
                    <button type="submit" className="register-button">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login