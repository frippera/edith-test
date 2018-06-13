import React, { Component } from 'react';

import Menu from '../components/Menu';
import Divider from '../components/Divider';
import Footer from '../components/Footer';

const Data = [
	{
		src: 'images/food1.jpg',
		headline: 'Veckans lunch',
		week: 44,
		days: [
			{ day: 'Måndag', dish: 'Fisk' },
			{ day: 'Tisdag', dish: 'Kött' },
			{ day: 'Onsdag', dish: 'Pasta' },
			{ day: 'Torsdag', dish: 'Pizza' },
			{ day: 'Fredag', dish: 'Tacos' },
		],
	},
];

class Lunch extends Component {
	render() {
		return (
			<div className="Main">
				<div className="Container">
					<Menu />
					<Divider />
					<div className="Content">
						<div>VECKANS LUNCH</div>
						<div>v.{Data[0].week}</div>
						{Data[0].days.map(lunch => {
							return (
								<div>
									<div>{lunch.day}</div>
									<div>{lunch.dish}</div>
								</div>
							);
						})}
					</div>
					<Footer />
					<Divider />
				</div>
			</div>
		);
	}
}

export default Lunch;
