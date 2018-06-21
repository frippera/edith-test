import React, { Component } from 'react';

import Menu from '../components/Menu';
import Divider from '../components/Divider';
import Service from '../components/Service';
import Footer from '../components/Footer';

const Services = [
	{
		src: 'images/food1.jpg',
		headline: 'VECKANS DAGENS',
		tagline: 'Klicka för att se veckans meny',
		to: '/lunch',
	},
	{
		src: 'images/food3.jpg',
		headline: 'CATERING',
		tagline: 'Beställ din catering här!',
		to: '/catering',
	},
	{
		src: 'images/food2.jpg',
		headline: 'RESTAURANG',
		tagline: 'food!',
		to: '/rest',
	},
	{
		src: 'images/food2.jpg',
		headline: 'Bageri',
		tagline: 'Mmm...capital of fika!',
		to: '/bakery',
	},
];

class Home extends Component {
	render() {
		return (
			<div className="Main">
				<div className="Container">
					<Menu />
					<Divider />
					<div className="Content">
						{Services.map(service => {
							return <Service key={service.to} {...service} />;
						})}
					</div>
					<Footer />
					<Divider />
				</div>
			</div>
		);
	}
}

export default Home;
