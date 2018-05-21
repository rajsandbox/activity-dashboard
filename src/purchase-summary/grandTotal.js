import React, { Component } from 'react';
import DisplayItem from './displayItem';
import { addPromoCode } from '../actions/index'

export default class GrandTotal extends Component {
    constructor(props) {
        super(props);
        this.state ={
            coupon : null,
            expand : true,
            showPromo : true
        }
        this.submitPromoCode = this.submitPromoCode.bind(this);
    }

    static get defaultProps() {
        return {
            submitPromoCode: () =>{}
        }
      }

    applyPromoCode = (e, { coupon } = this.state) => {
        let couponVal = e.target.value ;
        couponVal ? this.setState({ coupon : couponVal }) : null; 
    }

    submitPromoCode = () => {
       const {coupon} = this.state;
       let promoInfo = {
           coupon : coupon
       }
       this.props.addPromoCode(promoInfo);
       this.setState({ coupon : `` });
    }

    render = ({ expand, coupon, showPromo } = this.state, { grandTotal, ItemsList } = this.props) => {
        console.log("ItemsList =>", ItemsList)
        return (
            <div>
                <div className={`order-summary-grand-total order-summary-line`}>
                    <span className={`order-summary-hidden`}>Est. total</span>
                    <span className={`order-summary-total text-right`}>${grandTotal}</span>
                </div>

                {/* see item details */}
                <div onClick={() => this.setState({ expand : !expand })} className={`order-summary-cart`}>
                    {
                        expand ? <div> See Item details + </div> : 
                                 <div> Hide item details - 
                                     <div>
                                        {ItemsList.map((cartObj, index) => {
                                           return  <DisplayItem cartObj={cartObj} key={index}/>
                                        })}
                                     </div>
                                 </div>
                     }
                </div>

                {/* Apply promo code */}
                <div>
                {
                    showPromo ? <span  onClick={() => this.setState({ showPromo : !showPromo })}
                                       className={`order-summary-on-hover`}>Apply promo code + </span> :
                                <div>
                                    <span onClick={() => this.setState({ showPromo : !showPromo })}>Hide promo code -</span>
                                    <div className={`order-summary-promocode`}>
                                        <input onChange={e => this.applyPromoCode(e)} value={coupon} />
                                        <button onClick={this.submitPromoCode}>Apply</button>
                                    </div>
                                </div>
                }
                </div>
            </div>
        )
    }

}