import axios from 'axios'

import React, { useEffect, useState } from 'react'


const Overal = () => {
    const [MainProduct, SetMainProduct] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4001/MainProduct")
        .then((res)=> SetMainProduct(res.data))
        .catch((err) => console.log(err)
        )
    })

  return (
    <div>
    <div className='container-fluid'>
    <div className='row'>
        <h6 className='h6-title  text-end text-dark '>{MainProduct.length} Material</h6>
 
        {
            MainProduct.map((MainProduct,index)=>{
                return(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className='card h-75'>
                            <img className='Cover card-img-top h-100' src={MainProduct.Album}   alt='error'/>
                        </div>
                        <div className='card-body p-3'>
                <h6 className='card-title '>
                 <strong className='text-dark'> {MainProduct.Title}</strong>
                </h6>
                <p className='card-text text-dark'><span className='linemarker pe-3'>{MainProduct.Tariff}</span> <span className='text-danger'>From {MainProduct.Offer}</span></p>
                <p className='text-warning'><strong>.</strong> {MainProduct.in_Stock}</p>
              </div>
                    </div>
                )
            })
        }
    </div>
</div>

    </div>
  )
}

export default Overal