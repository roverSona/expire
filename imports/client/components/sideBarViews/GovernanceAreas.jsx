import React,{ Component } from 'react';
import {Tracker} from 'meteor/tracker';
import { GAs } from '/imports/api/GAModel.js';
console.log(GAs);
const renderGAs = ()=>{
	return(
		GAs.map((GA)=>{
			<li>
				<label className="click accordion-section-title" title="#accordion-1">
					<input type="checkbox" />
					<i className="checkbox-style"></i>
						{GA.GAType}
				</label>
				<ul id="accordion-1" className="links submenu accordion-section-content">
					<li>
						<label>
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov.Element 1
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov.Element 2
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov.Element 3
						</label>
					</li>

				</ul>
			</li>
		})

	)}

export default class GovernanceArea extends Component{
	render(){
		return(
			<div>
			<strong className="sub-head">Governance Areas</strong>
			{/* search bar*/}
			<form className="search-bar">
				<div className="form-wrap">
					<input className="form-control" type="text" name="searchbar" placeholder="Search Gov. areas, elements" />
					<i className="icon-search"></i>
				</div>
			</form>
			{/* search bar*/}

			{/* main navigation*/}
			<div className="main-navigation accordion">
				<ul className="links accordion-section">
					{renderGAs()}
				</ul>
			</div>
			{/* main navigation*/}

			<button className="btn primary-btn">Apply</button>
			</div>
		)
	}
}
