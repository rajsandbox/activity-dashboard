import React, { Component } from 'react';

export default class OrderSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    render = ({ open } = this.state) => {
        const toolTip = open ? `show-tooltip` : `hide-tooltip`;
        return (
            <div>
                <div className={`order-summary-subtotal`}>
                        <span>Subtotal </span>
                        <span className={`Discount order-summary-price text-right`}>${this.props.subtotal}</span>
                    </div>
                    <div className={`order-summary-saving tooltip`}>
                        <span>
                        <a className={`order-summary-saving-text`} onClick={() => this.setState({open : !open})}>Pickup savings</a>
                        <span open={this.state.open} className={`order-summary-popover ` + toolTip}>Picking up your order in store helps cut cost, and we pass the saving on to you</span>
                        </span>
                        <span className={`order-summary-saving-red text-right`}>-${this.props.pickupStoreDiscount}</span>
                    </div>
                    <div className={`order-summary-tax`}>
                        <span className={`order-summary-label`}>Est. taxes &amp; fees</span>
                        <span className={`Discount order-summary-price text-right`}>$8.92</span>
                    </div>
                    <div className={`order-summary-line-extension zip-line`}>
                        <span>(Based on 94085)</span>
                    </div>
            </div>
        )
    }

}
