import React, { Component } from 'react';

import Menu from '../components/Menu';
import Divider from '../components/Divider';
import Service from '../components/Service';
import Footer from '../components/Footer';

const Services = [
	{
		src: 'images/food1.jpg',
		headline: 'Veckans lunch',
		tagline: 'Varje vardag från 89:-',
		to: '/lunch',
	},
	{
		src: 'images/food2.jpg',
		headline: 'Bageri',
		tagline: 'Mmm...capital of fika!',
		to: '/bakery',
	},
	{
		src: 'images/food3.jpg',
		headline: 'Catering',
		tagline: 'Hämtmat när den är som bäst...',
		to: '/catering',
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
							return <Service {...service} />;
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
