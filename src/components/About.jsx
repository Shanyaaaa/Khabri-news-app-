import React from 'react';
import { NavLink } from 'react-router-dom';
import shanyaImage from '../assets/shanya.jpeg'; 

const About = () => {
  return (
    <div style={{ marginTop: "55px" }}>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1525184990509-4fd44ed9e056?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ld3N8ZW58MHwwfDB8fHww"
              className="d-block w-100" alt="First slide" style={{ height: "70vh", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfDB8MHx8fDA%3D"
              className="d-block w-100" alt="Second slide" style={{ height: "70vh", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1560957123-e8e019c66980?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfDB8MHx8fDA%3D"
              className="d-block w-100" alt="Third slide" style={{ height: "70vh", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row justify-content-center m-5">
        <div className="text-body-secondary" style={{ fontSize: "30px" }}>About the founder</div>
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <img
            src={shanyaImage}
            alt="Shanya Shrivastava"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
          />
          <h2 className="fw-normal">Shanya Shrivastava</h2>
          <p className='text-center'>
          I am a passionate aspiring developer with a strong drive to create meaningful and efficient digital experiences. Continuously learning and exploring new technologies, I thrive in collaborative environments where ideas are shared, and innovation is encouraged. With a keen eye for detail and a commitment to personal and professional growth, I aim to build impactful solutions that make a difference.
          </p>
          <p>
            <NavLink className="btn btn-secondary" to="/">
              Explore Khabri »
            </NavLink>
          </p>
        </div>
      </div>

      {/* ... rest of the featurette section remains unchanged ... */}

      <div className="text-center m-3">
        <p>&copy; Shanya Shrivastava 2024</p>
      </div>
    </div>
  )
}

export default About;
