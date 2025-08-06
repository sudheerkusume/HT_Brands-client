import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Size =()=>{
    const [Phants, setPhants] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4001/Length")
        .then((res)=> setPhants(res.data))
        .catch((err) => console.log(err)
        )
    })
  return (
    <div className='container-fluid'>
    <div className='row'>
        <h6 className='h6-title  text-end text-dark'><span className='text-primary'>{Phants.length}</span> of  41 products</h6>
 
        {
            Phants.map((Phants,index)=>{
                return(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className='card h-75'>
                        {/* <button className='btn btn-primary ' style={{background : "bule", borderRadius: "100px", fontSize:"smaller"}}>Buy Now</button> */}

                            <img className='Cover card-img-top h-100' src={Phants.Album}  alt='error'/>

                        </div>
                        <div className='card-body p-3'>
                <h6 className='card-title '>
                 <strong className='text-dark'> {Phants.Title}</strong>
                </h6>
                <p className='card-text text-dark'><span className='linemarker pe-3'>{Phants.Tariff}</span> <span className='text-danger'>From {Phants.Offer}</span></p>
                <p className='text-warning'><strong>.</strong> {Phants.in_Stock}</p>
              </div>
                    </div>
                )
            })
        }
    </div>
</div>

  )
}
export default Size