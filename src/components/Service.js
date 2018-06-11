import React from 'react';

const Service = ({ src, headline, tagline }) => {
  return (
    <div className="ServiceContent">
      <img src={src} alt="food 1" className="ServiceImage" />
      <div className="ServiceImageOverlay" />
      <div className="ServiceText">
        <div className="ServiceHeader">{headline}</div>
        <div className="ServiceTagline">{tagline}</div>
      </div>
    </div>
  );
};

export default Service;
