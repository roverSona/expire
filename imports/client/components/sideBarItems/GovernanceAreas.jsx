import React,{ Component } from 'react';
//import styles from './sideBarItems/sidebar.css'

export default class GovernanceArea extends Component{
	render(){
		return(
			<form>
				<label>Governance Area</label>
			  	<nav className="nav" role="navigation">
				    <ul className="nav__list">
				      <li>
					      <input id="group-4" type="checkbox" hidden />
					      <label for="group-4"><span className="fa fa-angle-right"></span> First level</label>
					      	<ul className="group-list">
						        <li>
						        <li><a href="#">1st level item</a></li>
						        <input id="sub-group-4" type="checkbox" hidden />
						        <label for="sub-group-4"><span className="fa fa-angle-right"></span> Second level</label>
						        <ul className="sub-group-list">
						          <li><a href="#">2nd level nav item</a></li>
						          <li><a href="#">2nd level nav item</a></li>
						        </ul>
						        </li>
					      	</ul>
				      </li>
				    </ul>
				</nav>
			</form>			
		)
	}
}