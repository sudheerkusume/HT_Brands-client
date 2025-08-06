import axios from 'axios'

import React, { useEffect, useState } from 'react'

const Type = () => {
    const [Hoodies, setHoodies] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4001/Cargo")
        .then((res)=> setHoodies(res.data))
        .catch((err) => console.log(err)
        )
    })

  return (
    <div className='container-fluid'>
    <div className='row'>
        <h6 className='h6-title  text-end text-dark'><span className='text-primary'>{Hoodies.length}</span> of  41 products</h6>
 
        {
            Hoodies.map((Hoodies,index)=>{
                return(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className='card h-75'>
                        {/* <button className='btn btn-primary ' style={{background : "bule", borderRadius: "100px", fontSize:"smaller"}}>Buy Now</button> */}

                            <img className='Cover card-img-top h-100' src={Hoodies.Album}  alt='error'/>
                            <button className='btn btn-primary text-top ' style={{background : "bule", borderRadius: "100px", fontSize:"smaller", }}>Buy Now</button>

                        </div>
                        <div className='card-body p-3'>
                <h6 className='card-title '>
                 <strong className='text-dark'> {Hoodies.Title}</strong>
                </h6>
                <p className='card-text text-dark'><span className='linemarker pe-3'>{Hoodies.Tariff}</span> <span className='text-danger'>From {Hoodies.Offer}</span></p>
                <p className='text-warning'><strong>.</strong> {Hoodies.in_Stock}</p>
              </div>
                    </div>
                )
            })
        }
    </div>
</div>
    
  )
}

export default Type