import React from 'react'

const Welcome = () => {
  return (
    <div className='container-fluid p-4'>
    <h2 className='text-center p-3'>Welcome to SaiPriya <span className='text-danger'>Hotels</span></h2>
    <div className="welcomes"><h1 className='display-5 pt-4 mb-3'>Stay in Comfort, Live in Luxury*</h1>
     <p>"At Saipriya Hotel, we believe in offering more than just a stay—we offer an experience of
       unparalleled comfort and luxury. With our top-notch amenities, exceptional service, and a welcoming
        atmosphere, every moment spent with us is designed to feel like home.</p>
      <p>And a welcoming atmosphere, every moment spent with us is designed to feel like home.
         Whether you're here for business or leisure, Saipriya Hotel promises to make your stay memorable 
         nd stress-free.</p>
    </div>
    <div className='exit'>
    <h5 className='text-success mb-4'>
      <details>
        <summary>Learn more</summary>
        <p><span className='text-danger'>Hotel Overview </span><span className='text-dark'>: Is Saipriya Hotel an existing brand or a name you're planning to
          use for your project? If it's a concept for your landing page, we can create content or
           a brand story around it.</span></p>
      </details>
       </h5>
    </div>
  </div>

  )
}

export default Welcome