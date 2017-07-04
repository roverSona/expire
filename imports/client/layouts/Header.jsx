import React ,{ Component } from 'react';
//import { Navbar ,NavItem,MenuItem,Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends Component {
	render(){
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <a className="navbar-brand" href="#">QUARULE | INVESTIGATOR</a>
				    </div>
				</div>
			</nav>
		)
	}

}