import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import noAlertSelected from './noSelection.jsx';
import AlertTable from './AlertTable.jsx';

export default class KCQAlertSummary extends Component {
	render(){
		return(
			<Switch>
				<Route exact path='/home' component={noAlertSelected}/>
				<Route exact path='/home/KCQAlert/' component={AlertTable}/>		      
		    </Switch>
		)
	}
}