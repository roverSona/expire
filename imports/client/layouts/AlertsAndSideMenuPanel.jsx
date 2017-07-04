import React from 'react';

import SideBar from '../components/sidebar.jsx';
import KCQAlertSummary from '../components/KCQAlertSummary.jsx';

const AlertsAndSideMenuPanel = () => 
	<div className="row">
		<div className="col-md-3">
			<SideBar/>
		</div>
		<div className="col-md-9">
			<KCQAlertSummary/>
		</div>
	</div>;

export default AlertsAndSideMenuPanel
