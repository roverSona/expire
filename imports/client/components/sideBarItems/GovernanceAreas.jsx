import React,{ Component } from 'react';
import {Tracker} from 'meteor/tracker';
import { Quarule } from '/imports/api/GAModel';
//const GAs;
Tracker.autorun(function(){
	//console.log("edfd",Quarule.find({type:'Run'},{ fields: { GA:1}}).fetch())
	//console.log(GAs);
	console.log(Quarule.find({type:'Run'},{ fields: { GA:1}}).fetch())
});


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
					<li>
						<label className="click accordion-section-title" title="#accordion-1">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Marketing Manipulation
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
					<li>
						<label className="click accordion-section-title" title="#accordion-2">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Churning
						</label>
						<ul id="accordion-2" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-3">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-3" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-4">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-4" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-5">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-5" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-6">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-6" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-7">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-7" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-8">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-8" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-9">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-9" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-10">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-10" className="links submenu accordion-section-content">
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
					<li>
						<label className="click accordion-section-title" title="#accordion-11">
							<input type="checkbox" />
							<i className="checkbox-style"></i>
								Gov. Area001
						</label>
						<ul id="accordion-11" className="links submenu accordion-section-content">
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
				</ul>
			</div>
			{/* main navigation*/}

			<button className="btn primary-btn">Apply</button>
			</div>
		)
	}
}
