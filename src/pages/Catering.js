import React, { Component } from 'react';

import Menu from '../components/Menu';
import Divider from '../components/Divider';
import Footer from '../components/Footer';

class Catering extends Component {
	render() {
		return (
			<div className="Main">
				<div className="Container">
					<Menu />
					<Divider />
					<div className="Content">
						Catering
					</div>
					<Footer />
					<Divider />
				</div>
			</div>
		);
	}
}

export default Catering;
