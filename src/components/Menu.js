import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHeartO, FaHeart } from 'react-icons/lib/fa';

const Favorites = [{"count":"1"}];

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<div className="MenuItem">
					<span className="MenuLinkMobile"><FaBars size={16} /></span>&nbsp;
				</div>
				<div className="MenuItem">
					<Link to="/" className="MenuLink">
						Hem
					</Link>
					<Link to="/lunch" className="MenuLink">
						Veckans lunch
					</Link>
					<Link to="/">
						<img src="logo.png" className="Logo" alt="Ediths Kök" />
					</Link>
					<Link to="/catering" className="MenuLink">
						Catering
					</Link>
					<Link to="/bakery" className="MenuLink">
						Bageri
					</Link>
				</div>
				<div className="MenuItem">
					<Link to="/favorites" className="MenuLink">
						Favoriter {Favorites.length ? <FaHeartO className="MenuLinkIcon" size={16} /> : <FaHeart className="MenuLinkIcon" size={16} /> }
					</Link>
					<Link to="/favorites" className="MenuLinkFavorite">
						{Favorites.length ? <FaHeartO className="MenuLinkIcon" size={16} /> : <FaHeart className="MenuLinkIcon" size={16} /> }
					</Link>
				</div>
			</div>
		);
	}
}

export default Menu;
