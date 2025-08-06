// import React, { useContext, useEffect, useMemo, useState } from 'react';
// import Welcome from './Welcome';
// import ViewProduct from './ViewProduct';
// import AddProduct from './AddProduct';
// import ViewEnquiries from './ViewEnquiries';
// import { loginStatus } from '../../App';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import ViewOrders from './ViewOrders';

// const Dashboard = () => {
//   const [view, setView] = useState('');
//   const [token, setToken] = useContext(loginStatus);
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   // Redirect if token is missing
//   useEffect(() => {
//     if (!token) {
//       navigate('/Checkin');
//     }
//   }, [token, navigate]);

//   // Fetch admin info when token exists
//   useEffect(() => {
//     if (token) {
//       axios.get(`https://htbrands-server.onrender.com/dashboard`, {
//         headers: {
//           "x-token": token
//         }
//       })
//       .then((res) => setUser(res.data))
//       .catch((err) => {
//         console.log(err);
//         // Optional: force logout on 401
//         if (err.response?.status === 401) {
//           setToken('');
//           navigate('/Checkin');
//         }
//       });
//     }
//   }, [token, setToken, navigate]);

//   const dashboardview = useMemo(() => {
//     if (view === '') return <Welcome />;
//     if (view === 'ViewProduct') return <ViewProduct />;
//     if (view === 'AddProduct') return <AddProduct />;
//     if (view === 'ViewEnquiries') return <ViewEnquiries />;
//     if (view === 'ViewOrders') return <ViewOrders/>
//     return <h2>Invalid View</h2>;
//   }, [view]);

//   // Show nothing temporarily if token is missing (redirect is happening)
//   if (!token) return null;

//   return (
//     <div className="dashboard-container">
//   <div className="dashboard-row">
//     {/* Sidebar */}
//     <aside className="dashboard-sidebar">
//       <h4 className='mb-4'>
//         Hello <span style={{ color: "green" }}>{user.name}</span>
//       </h4>
//       <ul className='list-unstyled'>
//         <li><button className='btn  w-100 text-start mb-2' onClick={() => setView('')}>Dashboard Home</button></li>
//         <li><button className='btn w-100 text-start mb-2' onClick={() => setView('AddProduct')}>Add Products</button></li>
//         <li><button className='btn w-100 text-start mb-2' onClick={() => setView('ViewProduct')}>View Products</button></li>
//         <li><button className='btn w-100 text-start mb-2' onClick={() => setView('ViewEnquiries')}>View Enquiries</button></li>
//         <li><button className='btn w-100 text-start mb-2' onClick={() => setView('ViewOrders')}>View Orders</button></li>
//         <li><button className='btn w-100 text-start mb-2' onClick={() => setToken('')}>LogOut</button></li>
//       </ul>
//     </aside>

//     {/* Content */}
//     <div className="dashboard-content">
//       {dashboardview}
//     </div>
//   </div>
// </div>

//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Welcome from './Welcome';
import ViewProduct from './ViewProduct';
import AddProduct from './AddProduct';
import ViewEnquiries from './ViewEnquiries';
import { loginStatus } from '../../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ViewOrders from './ViewOrders';
import { IoIosArrowDown } from 'react-icons/io';
import { FaClipboardList, FaEnvelopeOpenText, FaPlus } from 'react-icons/fa6';
import { MdViewList } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
  const [view, setView] = useState('');
  const [token, setToken] = useContext(loginStatus);
  const [user, setUser] = useState({});
  const [showHomeOptions, setShowHomeOptions] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');
  const navigate = useNavigate();

  // Redirect if token is missing
  useEffect(() => {
    if (!token) {
      navigate('/Checkin');
    }
  }, [token, navigate]);

  // Fetch admin info
  useEffect(() => {
    if (token) {
      axios.get('https://htbrands-server.onrender.com/dashboard', {
        headers: { 'x-token': token },
      })
        .then((res) => setUser(res.data))
        .catch((err) => {
          console.log(err);
          if (err.response?.status === 401) {
            setToken('');
            navigate('/Checkin');
          }
        });
    }
  }, [token, setToken, navigate]);

  // View switching
  const dashboardview = useMemo(() => {
    switch (view) {
      case '':
        return <Welcome />;
      case 'ViewProduct':
        return <ViewProduct />;
      case 'AddProduct':
        return <AddProduct />;
      case 'ViewEnquiries':
        return <ViewEnquiries />;
      case 'ViewOrders':
        return <ViewOrders />;
      default:
        return <h2>Invalid View</h2>;
    }
  }, [view]);

  // Close dropdown when other views are selected
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (view !== '' && isMobile) {
      setShowHomeOptions(false);
      setContentHeight('0px')
    }
  }, [view]);

  // Toggle dropdown and set height
  const handleHomeToggle = () => {
    setView('');
    setShowHomeOptions((prev) => {
      const next = !prev;
      setContentHeight(next ? `${contentRef.current.scrollHeight}px` : '0px');
      return next;
    });
  };

  if (!token) return null;

  return (
    <div className="dashboard-container">
      <div className="dashboard-row">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <h4 className="mb-4">
            Hello <span style={{ color: 'green' }}>{user.name}</span>
          </h4>
          <ul className="list-unstyled">
            <li>
              <button
                className="btn w-100 text-start mb-2 d-flex justify-content-between align-items-center hover-green"
                onClick={handleHomeToggle}
              >
                Dashboard Home
                <IoIosArrowDown
                  style={{
                    transform: showHomeOptions ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </button>
            </li>

            {/* Collapsible content */}
            <div
              ref={contentRef}
              style={{
                maxHeight: contentHeight,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <div className="px-2 pb-2">
                <li>
                  <button
                    className="btn btn-sm w-100 text-start mb-1 hover-green"
                    onClick={() => setView('AddProduct')}
                  >
                    <FaPlus className="me-2" /> Add Products
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm w-100 text-start mb-1 hover-green"
                    onClick={() => setView('ViewProduct')}
                  >
                   <MdViewList className="me-2" />  View Products
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm w-100 text-start mb-1 hover-green"
                    onClick={() => setView('ViewOrders')}
                  >
                   <FaClipboardList  className='me-2'/> View Orders
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-sm w-100 text-start mb-1 hover-green"
                    onClick={() => setView('ViewEnquiries')}
                  >
                    <FaEnvelopeOpenText className='me-2' /> View Enquiries
                  </button>
                </li>
              </div>
            </div>

            <li>
              <button
                className="btn w-100 text-start mt-3 logout-btn "
                onClick={() => setToken('')}
              >
              <FiLogOut className="me-2" />    LogOut
              </button>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="dashboard-content">
          {dashboardview}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
