import React ,{ Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
//import { Navbar ,NavItem,MenuItem,Nav,NavDropdown} from 'react-bootstrap';
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
						{/* organisation filter */}
						<form className="organisation-search pull-left">
							<div className="form-wrap">
								<label>Filter by</label>
								<div className="select-style">
									<select className="form-control">
										<option>Select Organisation</option>
										<option>Organisation1</option>
										<option>Organisation2</option>
										<option>Organisation3</option>
									</select>
								</div>
							</div>
						</form>
						{/* organisation filter */}
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
