import React,{ Component } from 'react';

export default class Filter extends Component{
	render(){
		return(
			<div>
				<div style={{float:'left' ,width:'80%'}}>
					<div>Key Complaints Questions(KCQ)</div>
					<div>All</div>
				</div>
				<div style={{float:'right',width:'20%'}}>
					<a href="#"><img src="" alt="filter"/></a>
				</div>
			</div>
		)
	}

}