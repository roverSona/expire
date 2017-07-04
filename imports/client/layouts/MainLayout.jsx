import React,{ Component } from 'react';

import Header from './Header.jsx';
import Investigator from './Investigator.jsx';
import Footer from './Footer.jsx';

export default class MainLayout extends Component {
	render() {
		return (
				<div className="container-fluid">
					<Header/>
					<div style={{'marginTop':'51px'}}>
						<Investigator/>
					</div>
					<Footer/>
				</div>
			)

	}
}



