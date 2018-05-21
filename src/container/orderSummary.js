import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OrderSummary from '../purchase-summary/orderSummary';
import {getSubtotal,getPickupStoreDiscountTotal } from '../util/calc'

const mapStateToProps = state => ({
   subtotal: getSubtotal(state.ItemsList),
   pickupStoreDiscount:  getPickupStoreDiscountTotal(state.ItemsList)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);