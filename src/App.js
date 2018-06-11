import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import Divider from './components/Divider';
import Service from './components/Service';
import Footer from './components/Footer';

const Services = [
	{"src": "images/food1.jpg", "headline":"Veckans lunch", "tagline":"Varje vardag från 89:-"},
	{"src": "images/food2.jpg", "headline":"Glass & Cafe", "tagline":"Mmm...Marabou!"},
	{"src": "images/food3.jpg", "headline":"Catering", "tagline":"Hämtmat när den är som bäst..."},
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Container">
					<Menu />
					<Divider />
					<div className="Content">
						{
							Services.map((service) => {
								return <Service src={service.src} headline={service.headline} tagline={service.tagline} />;
							})
						}
					</div>
					<Footer />
					<Divider />
				</div>
			</div>
		);
	}
}

export default App;
