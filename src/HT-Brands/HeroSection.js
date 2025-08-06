import React from 'react';
import Banner1 from './assets/WallBanner.png';
import Banner2 from './assets/WallBanner1.png';
import Banner3 from './assets/WallBanner2.png';

const HeroSection = () => {
  return (
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {[Banner1, Banner2, Banner3].map((img, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
            <img src={img} className="d-block w-100 hero-img" alt={`banner-${i}`} />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="display-4">Oversized</h2>
              <p className="lead">Print Season</p>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default HeroSection;
