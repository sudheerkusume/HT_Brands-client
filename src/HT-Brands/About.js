import React from 'react'
import video from './video/BrandPromoto.mp4'
import video1 from './video/small (1).mp4'
const About = () => {
  return (
    <div>
        <div className='text-center'>
            <h1 className='text-center text-dark mb-0 pb-0'>About Us</h1>
        <svg width="200" height="">
           <line x1="0" y1="13" x2="200" y2="1" stroke="red" stroke-width="8">
               <animate attributeName="x2" from="0" to="200" dur="2s" repeatCount="1"/>
            </line>
        </svg>
        </div>
        <div className='container pb-lg-5'>
            <div className='row text-dark'>
                <div className='col-lg-6 '>
                <video className='card-video'autoPlay loop muted src={video}alt="error"></video>
                </div>
                <div className='col-lg-6 p-lg-5'>
                  <h1> What We Are</h1>
                <h6 class="animated-line"></h6>
                   <p className='para'>At HT Brand, we are more than just a name—we are a symbol of quality, innovation, and trust. 
                    Our journey began with a vision to redefine excellence in every product and service we offer.
                     With a strong foundation built on integrity, craftsmanship, and customer satisfaction,
                      we strive to set new benchmarks in our industry.</p>
                </div>

            </div>
        </div>
        <div className='container pt-lg-5 pb-lg-5'>
            <div className='row text-dark'>
            <div className='col-lg-6 p-lg-5'>
                  <h1> Our Philosophy</h1>
                <h6 class="animated-line"></h6>
                <p className='para ps-lg-0'>We draw inspiration from the world around us, embracing colors, cultures, and creativity. Our name, " HT-BRAND " symbolizes the diversity of hues and shades in life and fashion, echoing our commitment to inclusivity and self-expression.</p>
                </div>

                <div className='col-lg-6 '>
                <video className='card-video'autoPlay loop muted src={video1}alt="error"></video>
                </div>

            </div>
        </div>
        
        <section className='container text-center text-dark pt-5'>
            <div>
                <h2>Join the HT_BRAND Family</h2>
                <span  className= "moving-line">__________</span>
                <p className='para'>Whether you're stepping into a casual day out, a festive celebration, or a stylish evening, HT-BRANDS <br/>
                 Fashion is your go-to destination for outfits that make you feel confident and unstoppable.<br/><br/>

                          Let's celebrate the tones of life - because every shade tells a story.</p>
            </div>
            <button className='main btn btn-primary'>Shop Now</button>
        </section>
    </div>
   
  )
}

export default About