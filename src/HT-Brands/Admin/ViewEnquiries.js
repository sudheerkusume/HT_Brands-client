import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [user, setUser] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [matter, setMatter] = useState('');
  const [message, setMessage] = useState('');
  const [ setStatus] = useState('');
  const [ setDate] = useState('');
  const [_id, setId] = useState('');

  // Fetch all enquiries on mount
  useEffect(() => {
    getAllEnquiries();
  }, []);

  const getAllEnquiries = async () => {
    try {
      const res = await axios.get('https://htbrands-server.onrender.com/enquiries');
      setEnquiries(res.data);
    } catch (err) {
      console.log('Error fetching enquiries:', err);
    }
  };

  // Fetch one record by _id
  const getonerecord = async (_id) => {
    try {
      const res = await axios.get(`https://htbrands-server.onrender.com/Enquiries/${_id}`);
      const data = res.data;
      setId(data._id || '');
      setUser(data.user || '');
      setMobile(data.mobile || '');
      setEmail(data.email || '');
      setMatter(data.matter || '');
      setMessage(data.message || '');
      setStatus(data.status || '');
      setDate(data.date ? new Date(data.date).toISOString().slice(0, 10) : '');
    } catch (err) {
      console.log('Error fetching single enquiry:', err);
    }
  };

  // Update the record
  const updateRecord = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://htbrands-server.onrender.com/Enquiries/${_id}`, {
        user,
        mobile,
        email,
        matter,
        message,
        status: 'Closed',
        date: new Date().toISOString(),
      });
      getAllEnquiries();
      alert('Updated successfully');
    } catch (err) {
      console.log('Error updating enquiry:', err);
    }
  };

  // Delete a record
  const deleteEnq = async (id) => {
    try {
      await axios.delete(`https://htbrands-server.onrender.com/Enquiries/${id}`);
      getAllEnquiries();
      alert('Deleted successfully');
    } catch (err) {
      console.log('Error deleting enquiry:', err);
    }
  };

  return (
    <div className='container mt-5'>
      <h4>View Enquiries</h4>
      <table className='table table-bordered mt-4'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Matter</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {Array.isArray(enquiries) && enquiries.length > 0 ? (
    enquiries.map((Enq, index) => (
      <tr key={Enq._id}>
        <td>{index + 1}</td>
        <td>{Enq.user}</td>
        <td>{Enq.mobile}</td>
        <td>{Enq.email}</td>
        <td>{Enq.matter}</td>
        <td>{Enq.message}</td>
        <td>{Enq.status}</td>
        <td>{new Date(Enq.date).toLocaleDateString()}</td>
        <td>
          <button
            onClick={() => getonerecord(Enq._id)}
            data-bs-toggle='modal'
            data-bs-target='#update'
            className='btn btn-outline-primary btn-sm me-2'
          >
            View
          </button>
          <button
            onClick={() => deleteEnq(Enq._id)}
            className='btn btn-outline-danger btn-sm'
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="9" className="text-center">No enquiries found</td>
    </tr>
  )}
</tbody>

      </table>

      {/* Modal for Update */}
      <div className='modal fade' id='update' tabIndex='-1'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Update Enquiry</h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={updateRecord}>
                <input
                  type='text'
                  placeholder='User'
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className='form-control mb-2'
                />
                <input
                  type='text'
                  placeholder='Mobile'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className='form-control mb-2'
                />
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control mb-2'
                />
                <input
                  type='text'
                  placeholder='Matter'
                  value={matter}
                  onChange={(e) => setMatter(e.target.value)}
                  className='form-control mb-2'
                />
                <textarea
                  placeholder='Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='form-control mb-2'
                />
                <input
                  type='text'
                  placeholder='Status'
                  value='Closed'
                  disabled
                  className='form-control mb-2'
                />
                <button
                  type='submit'
                  className='btn btn-success'
                  data-bs-dismiss='modal'
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEnquiries;
