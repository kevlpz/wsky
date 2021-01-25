import { useState } from 'react'
import axios from 'axios'

const Login = () => {
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
                setCreds({ email: '', password: '' })
                console.log('res: ', res)
            })
            .catch(err => console.log('err: ', err))
    }



    return (
        <div className="login-container">
            <h2>Login</h2>
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
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login