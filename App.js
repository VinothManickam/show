import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const Card = ({ imageUrl, title, createdDate, numberOfViews }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="content">
        <h2>Blog {title}</h2>
        <p>
          <FontAwesomeIcon icon={faCalendarAlt} /> {createdDate}
        </p>
        <p>
          <FontAwesomeIcon icon={faEye} />  {numberOfViews}
        </p>
      </div>
    </div>
  );
};

const CardModel = ({ title, lastUpdateDate }) => {
  const currentDate = new Date();
  const lastUpdate = new Date(lastUpdateDate);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="card-model">
      <h2>{title}</h2>
      <p>Last Update: {monthNames[lastUpdate.getMonth()]} {lastUpdate.getDate()}</p>
    </div>
  );
};

const App = () => {
  const [cardData, setCardData] = useState({
    imageUrl: '',
    title: '',
    createdDate: '',
    numberOfViews: 0,
  });

  useEffect(() => {
    // Fetch data from backend API
    fetch('YOUR_BACKEND_API_URL')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      <Card
        imageUrl={cardData.imageUrl}
        title={cardData.title}
        createdDate={cardData.createdDate}
        numberOfViews={cardData.numberOfViews}
      />
      <div className="drafts-section">
        <CardModel
          title="Inside Title"
          lastUpdateDate="2023-08-20"
        />
      </div>
    </div>
  );
};

export default App;
