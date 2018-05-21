import React, { Component } from 'react';
import GrandTotal from '../container/grandTotal';
import OrderSummary from '../container/orderSummary';
import './purchaseSummary.css';

export default class PurchaseSummary extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={`order-summary-wrapper`}>
                <div className={`order-summary-box`}>
                    <OrderSummary />
                    <GrandTotal />
                </div> 
            </div>  
        );
    }
}