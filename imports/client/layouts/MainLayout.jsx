import React,{ Component } from 'react';

import Header from './Header.jsx';
import Investigator from './Investigator.jsx';
import Footer from './Footer.jsx';

export default class MainLayout extends Component {
	render() {
		return (
				<div>
					<Header/>
					<Investigator/>
					{/*<Footer/>*/}
				</div>
			)

	}
}
