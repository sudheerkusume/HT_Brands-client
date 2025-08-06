import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { loginStatus } from '../App';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [fuser, setFuser] = useState(null);
  const [token, setToken] = useContext(loginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/Login');
    } else {
      axios.get('https://htbrands-server.onrender.com/fuser', {
        headers: { 'x-token': token }
      })
        .then(res => setFuser(res.data))
        .catch(err => {
          console.error('Fetch user error:', err);
          if (err.response?.status === 401 || err.response?.status === 400) {
            setToken('');
          }
        });
    }
  }, [token, navigate, setToken]);

  const handleLogout = () => {
    setToken('');
    navigate('/Login');
  };

  return (
    <div className="container my-5  animate__animated animate__fadeIn">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">My Account</li>
        </ol>
      </nav>

      <h2 className="mb-3">My Account</h2>

      <button className="btn btn-link text-primary mb-4" onClick={handleLogout}>
        ↳ Log out
      </button>

      <div className="row">
        {/* Order history */}
        <div className="col-md-8 mb-4">
          <h4 style={{fontWeight:"400"}}>Order history</h4>
          <p className="text-muted">You haven't placed any orders yet.</p>
        </div>

        {/* Account details */}
        <div className="col-md-4">
          <h3 style={{fontWeight:"400"}} className='mb-3'>Account details</h3>
          {fuser ? (
            <>
              <p className="mb-1">Name: <span className='ms-1 text-success'>{fuser.name}</span> </p>
              <p className="mb-1">Email: <span className='ms-1 text-success'>{fuser.email}</span></p>
              <p className="mb-1">Default address: <span className='ms-1 text-success'></span></p>
              <p className="text-muted">India</p>
              <a href="#" className="text-primary">View addresses (1) &rarr;</a>
            </>
          ) : (
            <p className="text-muted">Loading account details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
