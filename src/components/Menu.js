import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHeartO, FaHeart } from 'react-icons/lib/fa';

const Favorites = [];

class Menu extends Component {
	handleMenuMobile = () => {
		let menuMobile = document.querySelector('.MenuMobile');

		if (menuMobile.style.display === 'flex') {
			menuMobile.style.display = 'none';
		} else {
			menuMobile.style.display = 'flex';
		}
	}

	render() {
		return (
			<div>
				<div className="Menu">
					<div className="MenuItem">
						<span className="MenuLinkMobile" onClick={this.handleMenuMobile}><FaBars size={16} /></span>&nbsp;
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
							Favoriter {Favorites.length ? <FaHeart className="MenuLinkIcon" size={16} /> : <FaHeartO className="MenuLinkIcon" size={16} /> }
						</Link>
						<Link to="/favorites" className="MenuLinkFavorite">
							{Favorites.length ? <FaHeart className="MenuLinkIcon" size={16} /> : <FaHeartO className="MenuLinkIcon" size={16} /> }
						</Link>
					</div>
				</div>
				<div className="MenuMobile">
					<Link to="/" className="MenuMobileLink">
						Hem
					</Link>
					<Link to="/lunch" className="MenuMobileLink">
						Veckans lunch
					</Link>
					<Link to="/catering" className="MenuMobileLink">
						Catering
					</Link>
					<Link to="/bakery" className="MenuMobileLink">
						Bageri
					</Link>
				</div>
			</div>
		);
	}
}

export default Menu;
