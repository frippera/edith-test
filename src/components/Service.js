import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ src, headline, tagline, to }) => {
	return (
		<div className="ServiceContent">
			<img src={src} alt="food 1" className="ServiceImage" />
			<div className="ServiceImageOverlay" />
			<div className="ServiceText">
				{headline && <div className="ServiceHeader">{headline}</div>}
				{tagline && <div className="ServiceTagline">{tagline}</div>}
				{to && (
					<Link to={to} className="ButtonOutline">
						Visa mer
					</Link>
				)}
			</div>
		</div>
	);
};

export default Service;
