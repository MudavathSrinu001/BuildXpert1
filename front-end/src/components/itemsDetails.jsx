import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiEndpoints } from './api'; // Import API Endpoints
import './detail.css';

const Details = () => {
  const { itemName } = useParams(); // Get the selected item from the URL
  const [itemDetails, setItemDetails] = useState(null); // Store the fetched data

  useEffect(() => {
    const fetchItemDetails = () => {
      const apiUrl = apiEndpoints[itemName.toLowerCase()]; // Get the corresponding API URL
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setItemDetails(data))
        .catch((error) => {
          console.error(`Error fetching ${itemName} details:`, error);
          setItemDetails(null); // Clear data in case of error
        });
    };

    fetchItemDetails(); // Fetch item details on mount
  }, [itemName]);

  return (
    <div className="details-page">
      <h2 className="details-title">{itemName.toUpperCase()} Details</h2>
      {itemDetails ? (
        <div className="details-container">
          {itemDetails.map((detail, index) => (
            <div key={index} className="detail-card">
              <img src={detail.shopimage} alt={detail.shopname} className="card-image" />
              <div className="card-info">
                <h3 className="card-title">{detail.shopname}</h3>
                <p className="card-location">
                  Location: 
                  <a 
                    href={`https://www.google.com/maps?q=${encodeURIComponent(detail.location)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Map {/* Link text updated to display "Map" */}
                  </a>
                </p>
                <p className="card-rating">Rating: {detail.rating}</p>
                <p className="card-phone">Phone: {detail.phoneno}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
};

export default Details;
