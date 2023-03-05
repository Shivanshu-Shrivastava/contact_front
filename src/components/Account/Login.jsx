import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('/user').then(res=>setData(res.data)).catch(e=>console.log(e))
    }, [])
    const handlesubmit = (e)=>{
        e.preventDefault()
        const checkdata = data.find((value,index,data)=>{
            
            if(value.username==username && value.password == password){
                return data
            }
        })
        console.log(checkdata)
        if(!checkdata){
            alert('Credentials are Invalid')
        }else{
            navigate('/contact',{state:checkdata})

        }

    }
    return (
        <div className='d-flex align-items-center container mt-5  justify-content-center card'>
            <div className="card-header w-100 alert alert-dark p-2 text-white text-center"><h1>Login</h1></div>
            <div className="card-body w-50">
                <form onSubmit={handlesubmit}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={((e)=>setUsername(e.target.value))}
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
                            onChange={((e)=>setPassword(e.target.value))}

                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <p className='text-center pt-2'>Don't have a accout.<Link to={'/signup'}> Crate account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login