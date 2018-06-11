import React, { Component } from 'react';
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
					<a href="/" className="MenuLink">
						Veckans lunch
					</a>
					<a href="/" className="MenuLink">
						Catering
					</a>
					<img src="logo.png" className="Logo" alt="Ediths Kök" />
					<a href="/" className="MenuLink">
						Restaurang
					</a>
					<a href="/" className="MenuLink">
						Glass & Cafe
					</a>
				</div>
				<div className="MenuItem">
					<a href="/" className="MenuLink">
						Favoriter {Favorites.length ? <FaHeartO className="MenuLinkIcon" size={16} /> : <FaHeart className="MenuLinkIcon" size={16} /> }
					</a>
					<a href="/" className="MenuLinkFavorite">
						{Favorites.length ? <FaHeartO className="MenuLinkIcon" size={16} /> : <FaHeart className="MenuLinkIcon" size={16} /> }
					</a>
				</div>
			</div>
		);
	}
}

export default Menu;
