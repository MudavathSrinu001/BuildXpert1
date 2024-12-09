import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import './home.css';

const materials = [
  { name: 'Iron', imgSrc: '/iron.jpg', altText: 'Iron Image', description: 'Used in construction for reinforcement and framework.' },
  { name: 'Cement', imgSrc: '/ceme.webp', altText: 'Cement Image', description: 'A binding material used in construction for making concrete.' },
  { name: 'Bricks', imgSrc: '/Bricks.jpg', altText: 'Bricks Image', description: 'Commonly used for building walls and foundations.' },
  { name: 'Furniture', imgSrc: '/furni.jpg', altText: 'Furniture Image', description: 'Used for interior design and functional needs in buildings.' },
  { name: 'Sand', imgSrc: '/beach-sand.jpg', altText: 'Sand Image', description: 'Used in making concrete, plaster, and for other construction purposes.' },
  { name: 'Marbles', imgSrc: '/marble.jpg', altText: 'Marbles Image', description: 'A decorative stone used in flooring, countertops, and sculptures.' },
  { name: 'Tiles', imgSrc: '/tiless.webp', altText: 'Tiles Image', description: 'Used for covering roofs, floors, walls, steps and countertops.' },
  { name: 'Paint', imgSrc: '/Paints.jpg', altText: 'Paint Image', description: 'Applied on surfaces for decoration, protection, and waterproofing.' },
];

const workers = [
  { name: 'Plumbers', imgSrc: '/plumbing.jpg', altText: 'Plumber Image' },
  { name: 'Painters', imgSrc: '/lpainter.jpg', altText: 'Painter Image' },
  { name: 'Designers', imgSrc: '/designers.jpg', altText: 'Designer Image' },
  { name: 'Electricians', imgSrc: '/electrian.jpg', altText: 'Electrician Image' },
];

const transportation = [
  { name: 'Truck', imgSrc: '/truck.jpeg', altText: 'Truck Image' },
  { name: 'Van', imgSrc: '/van.png', altText: 'Van Image' },
  { name: 'Lorry', imgSrc: '/lorry.jpg', altText: 'Lorry Image' },
];

const First = () => {
  const navigate = useNavigate();

  // Redirect to login page when View Details is clicked
  const handleViewDetails = () => {
    navigate('/login');
  };

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <h1 className="logo">BuildXpert</h1>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="content">
          <h1>
            <span className="highlight">We Construct</span>
            <br />
            your <span className="dream">Dream</span>
          </h1>
          <button className="contact-button">Contact us</button>
        </div>
      </section>

      {/* Materials Section */}
      <section className="materials">
        <h2 className="section-title">MATERIALS</h2>
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div key={index} className="material-card">
              <img src={material.imgSrc} alt={material.altText} className="material-image" />
              <h5 className="material-title">{material.name}</h5>
              <p className="material-description">{material.description}</p>
              <button className="view-details-button" onClick={handleViewDetails}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Workers Section */}
      <section className="workers">
        <h2 className="section-title">WORKERS</h2>
        <div className="worker-list-container">
          {workers.map((worker, index) => (
            <div key={index} className="worker-card">
              <img src={worker.imgSrc} alt={worker.altText} className="worker-image" />
              <h5 className="worker-title">{worker.name}</h5>
              <p className="worker-description">Highly skilled {worker.name.toLowerCase()} with experience in residential and commercial projects.</p>
              <button className="view-details-button" onClick={handleViewDetails}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Transportation Section */}
      <section className="transportation">
        <h2 className="section-title">TRANSPORTATION</h2>
        {transportation.map((item, index) => (
          <div key={index} className="transport-card">
            <img src={item.imgSrc} alt={item.altText} className="transport-image" />
            <h3 className="transport-title">{item.name}</h3>
            <p className="transport-description">{item.name} are essential for transporting construction materials and equipment efficiently.</p>
            <button className="view-details-button" onClick={handleViewDetails}>
              View Details
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default First;
