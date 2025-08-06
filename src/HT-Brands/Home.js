// import React from 'react'
// import small from './accets/video1.mp4'
// import small2 from './accets/video2.mp4'
// import small3 from './accets/video3.mp4'
// import small4 from './accets/video4.mp4'

// const Home = () => {
//   return (
//     <div>
//     <div className=' container-fluid pb-5'>
//       <div className='row'>
//         <div className=' bg col-lg-12 col-ms-6'>
//         </div>
//       </div>
//     </div>
//     <section className='container-fluid '>
//       <div className='row'>
//         <div className='col-3'>
//           <div className='card w-75'>
//             <video src={small} loop autoPlay muted/>
//           </div>
//         </div>
//         <div className='col-3 ms-0'>
//           <div className='card w-75'>
//             <video src={small2} loop autoPlay muted/>
//           </div>
//         </div>
//         <div className='col-md-2 col-lg-4 col-xl-3'>
//           <div className='card w-75'>
//             <video src={small3} loop autoPlay muted/>
//           </div>
//         </div>
//         <div className='col-md-2 col-lg-4 col-xl-3'>
//           <div className='card w-75'>
//             <video src={small4} loop autoPlay muted/>
//           </div>
//         </div>



        
//       </div>
//     </section>
//     </div>
//   )
// }

// export default Home

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "animate.css"
import bgvideo from './video/mainvideo.mp4'
import { FaArrowRight } from "react-icons/fa6";


const Home = () => {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    axios.get("https://htbrands-server.onrender.com/home")
    .then((res)=>setProduct(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div>
       <div className='container-fluid '>
       <div className='row'>
         <div className=' bg col-lg-12 col-ms-6'>
        </div>
        <div className='model container-fluid'>
          <div className='row p-5'>
            {
              product.map((product,index)=>{
                return(
                  <div key={index} className='col-md-3 mb-1'>
                    <div className='card'>
                      <video className='card-video'autoPlay loop muted src={product.video} alt="error"> </video>
                    <div className='card-title1'>
                      <h3 className='h2 video-heading-no-margin text-center'>{product.title}</h3>
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
       </div>
    <div className='container-fluid'>
       <div id="mainslide" className="carousel slide pb-0 mb-0" data-bs-ride="carousel">
          <div className="carousel-indicators">
    <li
      data-bs-target="#mainslide"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="First slide"
    ></li>
    <li
      data-bs-target="#mainslide"
      data-bs-slide-to="1"
      aria-label="Second slide"
    ></li>
    <li
      data-bs-target="#mainslide"
      data-bs-slide-to="2"
      aria-label="Third slide"
    ></li>
          </div>
           <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#mainslide"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
           </button>
           <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#mainslide"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
           </button>
       </div>
       </div>
 {/********** scroll-horizontal ********/}
    <div className="stock-ticker mb-4">
      <ul>
        <li className='minus'>
          <span className='company'>T-Shirts Combo @1999/-</span>
          <span className='price'>T-Shirts Combo @1999/-</span>
        </li>
        <li className='plus'>
          <span className='company'>T-Shirts Combo @1999/-</span>
          <span className='price'>T-Shirts Combo @1999/-</span>
        </li>
        <li className='plus'>
          <span className='company'>T-Shirts Combo @1999</span>
          <span className='price'>T-Shirts Combo @1999</span>
        </li>
        {/*<--- <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li>
        <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li>
        <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li>
        <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li> --->*/}
      </ul>
      <ul aria-hidden="true">
        <li className='minus'>
          <span className='company'>T-Shirts Combo @1999/-</span>
          <span className='price'>T-Shirts Combo @1999/-</span>
        </li>
        <li className='plus'>
          <span className='company'>T-Shirts Combo @1999/-</span>
          <span className='price'>T-Shirts Combo @1999/-</span>
        </li>
        <li className='plus'>
          <span className='company'>T-Shirts Combo @1999/-</span>
          <span className='price'>T-Shirts Combo @1999/-</span>
        </li>
        {/*<--- <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li>
        <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li>
        <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li>
        <li className='plus'>
          <span className='company'>T - Shirts Combo @1999</span>
          <span className='price'>T - Shirts Combo @1999</span>
        </li> --->*/}
      </ul>
    </div>
 
 {/********** Winter Collection *********/}
    
   {/* <div className="carousel-inner p-5" role="listbox">
  <div className='container'>
    <h3 className='text-dark'>New Arrivals</h3>
    </div>
    <div className="carousel-item active">
    <div className='row'>
    {
          product.map((product,index)=>{
            return(
              <div key={index} className='col-md-3'>
                <div className='card h-75'>
                  <img className='card-img-top h-100' autoPlay muted loop src={product.image_winter} alt='error'/>
              </div>
              <div className='card-body p-3'>
                <h5 className='card-title'>
                  {product.titles}
                </h5>
                <p className='card-text text-dark'><span className='linemarker pe-3'>{product.amount}</span><span className='text-danger'>From {product.discount}</span><p className='stock_winter'>{product.stock_winter}</p></p>
                <p><strong>.</strong> {product.ratinng}</p>
              </div>
              </div>
            )
          })
      }
    </div>
    </div>
   </div> */}

{/****** videos *******/}
  
   {/* <section className='backgvideo'>
      <div className='bc'>
        <video src={bgvideo} autoPlay loop muted></video>
      </div>
   </section> */}
    
{/* contact_details */}

  {/* <section className='email m-lg-5'>
      <div className='container text-center'>
        <h2>Join the Club</h2>
        <br/>
        <p>Stay tuned for more fashion updates and exclusive offers!</p>
      <form className='emailform'>
          <input  type='text' placeholder='Email'/>
           <FaArrowRight type='submit'/>
      </form>
      </div>
  </section> */}

 </div>
 
 
 
  )
}

export default Home
