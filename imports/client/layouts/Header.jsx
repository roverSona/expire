import React ,{ Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import OrganizationFilter from '../components/headerViews/OrganisationFilter.jsx'
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends Component {
	render(){
		return (
			<header>
				{/* header section */}
				<div className="container-fluid">
					{/* site logo */}
					<a className="site-logo" href="#"><img src="images/logo.png" alt="site logo" /></a>
					{/* site logo */}
					<div className="pull-right">
						<OrganizationFilter/>
						{/* user box */}
						<div className="user-box">
							<figure className="user-icon">
								<img src="images/user-image.png" alt="user icon" width="31" height="31"/>
							</figure>
							<span className="user-name">Lucille Beck</span>
							<i className="icon-down-aero2"></i>
						</div>
						{/* user box */}
					</div>
				</div>
				{/* header section */}
			</header>

		)
	}

}
