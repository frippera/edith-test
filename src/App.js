import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu';
import Divider from './components/Divider';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="Container">
					<Menu />
					<Divider />
					<div className="Content" />
					<Footer />
					<Divider />
				</div>
			</div>
		);
	}
}

export default App;
