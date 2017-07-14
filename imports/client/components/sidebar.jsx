import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Filter from './sideBarViews/Filter.jsx';
import GovernanceArea from './sideBarViews/GovernanceAreas.jsx';

export default class SideBar extends Component{
	render(){
		return(
			<GovernanceArea/>
		)
	}
}
