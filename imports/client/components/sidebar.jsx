import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Filter from './sideBarItems/Filter.jsx';
import GovernanceArea from './sideBarItems/GovernanceAreas.jsx';

export default class SideBar extends Component{
	render(){
		return(
			<GovernanceArea/>
		)
	}
}
