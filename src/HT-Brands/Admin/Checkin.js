import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginStatus } from '../../App';
import axios from 'axios'

const Checkin = () => {
    const [details, Setdetails] = useState({})
    const Sendon = useNavigate()
    const [token, setToken] = useContext(loginStatus)

    const Changedata =(e)=>{
        Setdetails({...details,[e.target.name]:e.target.value})
    }
const Submithandler = (e) => {
  e.preventDefault();
  console.log(details);

  axios.post(`https://htbrands-server.onrender.com/adminlogin`, details)
    .then((res) => {  
      console.log(res.data);
      localStorage.setItem("userToken", res.data.token); // 👈 save it
      setToken(res.data.token); // 👈 update context
    })
    .catch((err) => console.log(err));
}

useEffect(() => {
  if (token) {
    Sendon('/dashboard');
  }
}, [token, Sendon]);
  return (
    <div className='container p-5'>
        <div className='col-lg-6 shadow p-5 mx-auto'>
            <h4>Admin Console</h4>
            <form onSubmit={Submithandler} className='radio'>
                <input type='Text'  name='email' onChange={Changedata} placeholder='Email address' className='form-control mb-3'/>
                <input type='password'  name='password' onChange={Changedata} placeholder='Password' className='form-control mb-3'/>
                <input type='submit' className='form-control mb-3 btn btn-info'/>

            </form>
        </div>
    </div>
  )
}

export default Checkin