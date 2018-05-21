import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addPromoCode } from '../actions';
import GrandTotal from '../purchase-summary/grandTotal.js';
import {getGrandTotal } from '../util/calc'

const mapStateToProps = state => ({
    ItemsList : state.ItemsList,
    grandTotal : getGrandTotal(state.ItemsList, 8.92, state.AppliedPromos)
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addPromoCode
        },
        dispatch
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(GrandTotal);