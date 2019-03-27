import React, { Component } from 'react';
import ActivityGrid from '../container/activityGrid';
import './activityDashboard.css';

export default class ActivityDashboard extends Component {
    render = () => {
        return (
            <div className={`order-summary-wrapper`}>
                <div className={`order-summary-box`}>
                    <ActivityGrid />
                </div> 
            </div>  
        );
    }
}