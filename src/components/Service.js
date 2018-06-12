import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ src, headline, tagline, to }) => {
  return (
    <div className="ServiceContent">
      <Link to={to}>
        <img src={src} alt="food 1" className="ServiceImage" />
        <div className="ServiceImageOverlay" />
        <div className="ServiceText">
          <div className="ServiceHeader">{headline}</div>
          <div className="ServiceTagline">{tagline}</div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
