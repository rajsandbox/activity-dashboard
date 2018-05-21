import { ADD_PROMOCODE } from '../actions/index.js';
import { ItemsList } from '../itemsList';

const initialState = {
    AppliedPromos : [],
    ItemsList : ItemsList
};

function orderTotal(state = initialState, action) {
    switch (action.type) {
         case ADD_PROMOCODE :
         if (!checkPromoCodeExists(state.AppliedPromos, action.promoDetails)) {
            const newAppliedPromos = [...state.AppliedPromos,action.promoDetails];
             return Object.assign({},state,{AppliedPromos:newAppliedPromos });
         } else {
             return state
         }

        //  return Object.assign({}, state, {
        //     AppliedPromos : [action.promoDetails.promoCode]
        //  });
        //   !PROMOCODE_LIST.includes(action.data) ? 
       
        default:
            return state;
    }
}

function checkPromoCodeExists(appliedPromos,promoDetails) {
    let isExists = false
    appliedPromos.forEach(promo => {
        if( promo.promoCode === promoDetails.promoCode){
            isExists = true;
        }
    });
    return isExists;
}

export default orderTotal;