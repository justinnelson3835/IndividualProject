import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpsterFire } from '@fortawesome/free-solid-svg-icons';
import './RatingSystem.css';

const RatingSystem = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <p>Your Rating: {rating}</p>
      <div>
        {Array.from({ length: 5 }, (_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faDumpsterFire}
            className={`rating-icon ${index < rating ? 'active' : ''}`}
            onClick={() => handleRatingClick(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default RatingSystem;
