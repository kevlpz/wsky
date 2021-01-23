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
                console.log(res)
            })
            .catch(err => console.log(err))
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                placeholder="email"
                value={creds.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={creds.password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login