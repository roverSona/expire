import React from 'react';

import SideBar from '../components/sidebar.jsx';
import KCQAlertSummary from '../components/KCQAlertSummary.jsx';

const AlertsAndSideMenuPanel = () =>
		<main>
				<div className="container-fluid">
					<aside className="sidebar">
						<SideBar/>
					</aside>
					<KCQAlertSummary/>
				</div>
		</main>;

export default AlertsAndSideMenuPanel
