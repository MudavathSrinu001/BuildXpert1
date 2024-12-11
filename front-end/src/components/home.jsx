import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
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
  { name: 'Raw-Materials', imgSrc: '/raw.jpeg', altText: 'Raw Materials', description: 'Essential steel are crucial for creating strong and durable structures' }
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


const Home = () => {
  const { logout } = useAuth0();
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
            <li className="nav-item"><a href="#hero">Home</a></li>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#materials">Services</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
            <li className='nav-item'>
              <button className='lg-btn' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
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
      <section id="materials" className="materials">
        <h2 className="section-title">MATERIALS</h2>
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div key={index} className="material-card">
              <div className="material-card-content">
                <img src={material.imgSrc} alt={material.altText} className="material-image" />
                <h5 className="material-title">{material.name}</h5>
                <p className="material-description">{material.description}</p>
                <div className="button-wrapper">
                  <Link to={`/details/${material.name.toLowerCase()}`}>
                    <button className="btn fill">View Details</button>
                  </Link>
                </div>
              </div>
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
              <Link to={`/details/${worker.name.toLowerCase()}`}>
                <button className="view-details-button">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Transportation Section */}
      <section className="transportation">
        <h2>TRANSPORTATION</h2>
        <div className="transport-grid">
          {transportation.map((item, index) => (
            <div key={index} className="transport-card">
              <img src={item.imgSrc} alt={item.altText} className="transport-image" />
              <div className="transport-details">
                <h3>{item.name}</h3>
                <p>
                  <i>
                    {item.name} are crucial for efficiently moving construction
                    materials, tools, and equipment between sites.
                  </i>
                </p>
                <ul>
                  <li>
                    <strong>Usage:</strong>{" "}
                    {item.name === "Truck"
                      ? "Ideal for heavy-duty tasks like transporting bulk cement or steel rods."
                      : item.name === "Van"
                        ? "Used for small-scale deliveries like furniture, paint, or tiles."
                        : "Perfect for large projects needing materials in bulk, such as bricks or sand."}
                  </li>
                  <li>
                    <strong style={{ color: "#007BFF", fontWeight: "bold" }}>
                      Capacity:
                    </strong>{" "}
                    {item.name === "Truck"
                      ? "Up to 20 tons"
                      : item.name === "Van"
                        ? "1–3 tons"
                        : "Up to 40 tons"}
                  </li>
                </ul>
                <Link to={`/details/${item.name.toLowerCase()}`}>
                  <div className="button-container">
                    <button className="view-details-button">View Details</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* About Section */}
      <section id="about" className="about">
        <img src="./about.jpg" alt="about primary" />
        <div className="content">
          <h2 className="section-title">ABOUT</h2>
          <h3>We're Passionate About Delivery Growth Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolor molestiae maiores ducimus officiis nisi tempore nostrum quam porro, assumenda similique numquam maxime laboriosam consequatur quae sint quisquam consequuntur sunt.
          </p>
          <ul>
            <li>Everything we recommend has a direct positive impact</li>
            <li>You will become an important partner of our company</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-main">
          {/* Content Section */}
          <div className="content">
            <h2 className="section-title">CONTACT</h2>
            <h3>Get In Touch Using Form</h3>
            <p className='para'>You can stop by our office for a cup of coffee or use the contact form below for any questions and inquiries.</p>
            <div className="contact-info-list-container">
              <div className="contact-info-items">
                <p><i className="fa-solid fa-location-dot"></i> 22nd Innovative Street, Hyderabad, 500042, INDIA</p>
              </div>
              <div className="contact-info-items">
                <p><i className="fa-solid fa-phone"></i> +91 xxxxxxx368</p>
              </div>
              <div className="contact-info-items">
                <p><i className="fa-solid fa-phone"></i> +91 xxxxxxx873</p>
              </div>
              <div className="contact-info-items">
                <p><i className="fa-solid fa-envelope"></i> srinu@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="form">
            <form>
              <input type="text" placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <div className="terms">
                <input type="checkbox" name="contact_terms" id="contact_terms" value="1" />
                <label htmlFor="contact_terms">
                  I agree with BuildXpert's stated <span className="underline">Privacy Policy</span> and <span className="underline">Terms & Conditions</span>
                </label>
              </div>
              <button type="submit">Submit Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-list-container">
          <div className="footer-item wide">
            <h5>Few Words About BuildXpert</h5>
            <p>
              We're passionate about providing the best business growth services for companies just starting
              as startups or industry players that have established their market position a long time ago.
            </p>
          </div>
          <div className="footer-item">
            <h5>Links</h5>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-item">
            <h5>Tools</h5>
            <a href="#">Businessgrowth.com</a>
            <a href="#">influencers.com</a>
            <a href="#">optimizer.net</a>
          </div>
        </div>
        <div className="copyright">
          <span>Copyright &copy; 2040 All rights reserved - By BuildXpert</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;  