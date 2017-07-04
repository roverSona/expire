import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import AlertsAndSideMenuPanel from './AlertsAndSideMenuPanel.jsx';
import AlertDetailsPanel from '../components/AlertDetailsPanel.jsx';

export default class Investigator extends Component {

	render(){
		return (
		    <Switch>
		      <Route path='/home' component={AlertsAndSideMenuPanel}/>
		      <Route path='/AlertDetailsPanel/' component={AlertDetailsPanel}/>
		    </Switch>
		)
	}

}