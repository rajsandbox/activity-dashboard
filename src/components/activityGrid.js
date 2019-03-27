import React, { Component } from 'react';
export default class ActivityGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render = ({ open } = this.state) => {
        return (
            <div>
                <div className={`order-summary-subtotal`}>
                        {this.props.activityData.map(station => (
                            <div className="station" key={station.severity}>
                                <span>{station.severity}</span>
                                <span>{station.ibx}</span>
                                <span>{station.assetlocation}</span>
                                <span>{station.datapoint}</span>
                                <span>{station.type}</span>
                                <span>{station.status}</span>
                                <span>{station.maintenance}</span>
                            </div>
                        ))}
                    </div>
            </div>
        )
    }
}