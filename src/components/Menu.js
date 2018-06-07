import React, { Component } from 'react';

class Menu extends Component {
	render() {
		return (
			<div className="Menu">
				<div className="MenuItem">
					<span className="MenuLinkMobile">M</span>&nbsp;
				</div>
				<div className="MenuItem">
					<a href="/" className="MenuLink">
						Länk 1
					</a>
					<a href="/" className="MenuLink">
						Länk 2
					</a>
					<img src="logo.png" className="Logo" alt="Ediths Kök" />
					<a href="/" className="MenuLink">
						Länk 3
					</a>
					<a href="/" className="MenuLink">
						Länk 4
					</a>
				</div>
				<div className="MenuItem">
					<a href="/" className="MenuLink">
						Mina Favoriter
					</a>
				</div>
			</div>
		);
	}
}

export default Menu;
