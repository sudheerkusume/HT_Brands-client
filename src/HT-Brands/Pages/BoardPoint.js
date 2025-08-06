import axios from 'axios'

import React, { useEffect, useState } from 'react'


const BoardPoint = () => {
    const [Shoes, setShoes] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4001/Shirts")
        .then((res)=> setShoes(res.data))
        .catch((err) => console.log(err)
        )
    })

  return (
    <div className='container-fluid'>
    <div className='row'>
    <h6 className='h6-title  text-end text-dark '>{Shoes.length} of 41 products</h6>

        {
            Shoes.map((Shoes,index)=>{
                return(
                    <div key={index} className='col-md-4 mb-4'>
                        <div className='card h-75'>
                            <img className='Cover card-img-top h-100' src={Shoes.Album}   alt='error'/>
                        </div>
                        <div className='card-body p-3'>
                <h6 className='card-title '>
                 <strong className='text-dark'> {Shoes.Title}</strong>
                </h6>
                <p className='card-text text-dark'><span className='linemarker pe-3'>{Shoes.Tariff}</span> <span className='text-danger'>From {Shoes.Offer}</span></p>
                <p className='text-warning'><strong>.</strong> {Shoes.in_Stock}</p>
              </div>
                    </div>
                )
            })
        }

    </div>
</div>

  )
}

export default BoardPoint