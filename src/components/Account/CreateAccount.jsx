import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateAccount = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault()
        axios.post('/user/adduser', { username, password }).then(res => {
            alert('Account Created')
            navigate('/')
        }
        ).catch(e => console.log(e))



    }
    return (
        <div className='d-flex align-items-center container mt-5  justify-content-center card'>
            <div className="card-header w-100 alert alert-dark p-2 text-white text-center"><h1>Create Account</h1></div>
            <div className="card-body w-50">
                <form onSubmit={handlesubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={((e) => setUsername(e.target.value))}
                            autoComplete='off'
                        />
                    </div>

                    <div className="input-group mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            minLength={6}
                            onChange={((e) => setPassword(e.target.value))}
                            autoComplete='off'

                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Create</button>
                    <p className='text-center pt-2'><Link to={'/'}>Already have a account.</Link></p>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount