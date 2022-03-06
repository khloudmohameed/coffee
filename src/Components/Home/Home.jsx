import React from 'react'
import slide1 from './img/home-1-slider-image-1.jpg'
import slide2 from './img/home-1-slider-image-2.jpg'
import slide3 from './img/home-1-slider-image-3.jpg'

function Home() {
  return (
    <>
<div id="carouselExampleInterval  vh-100" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner  vh-100">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={slide1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={slide2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
    
    
    
    </>
  )
}

export default Home