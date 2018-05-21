import React, { Component } from 'react';

export default class DisplayItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render = ({ cartObj } = this.props) => {
        console.log("cartObj ==>", cartObj)

        return (
            <div key={`item`} className={`order-summary-cart-item`}>
                {/* <span>{cartObj.item}</span> */}
                <div>
                    <img src={cartObj.info.img} className={`order-summary-cart-item-img`}/>
                    <div>
                        <div className={`order-summary-cart-item-details`}>{cartObj.info.description}</div>
                        <div className={`order-summary-cart-item-price`}>${cartObj.info.price}</div>
                    </div>
                </div>
            </div>
        );
    }

}    