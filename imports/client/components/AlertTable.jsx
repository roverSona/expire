import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap'

export default class AlertTable extends Component {
	render(){
		return(
			<Jumbotron>
    			<h1>Scenario</h1>
			    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			    <p><Link to={`/AlertDetailsPanel/`}>Table</Link></p>
  			</Jumbotron>
		)
	}
}