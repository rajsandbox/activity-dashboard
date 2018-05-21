export const getSubtotal= (itemList) => {
    return itemList.reduce((sum, item) => {
       return sum += item.info.price
    }, 0);
}

export const getPickupStoreDiscountTotal = (itemList) => {
    return itemList.reduce((sum, item) => {
        return (item.info.pickupStore ?  sum += item.info.pickupStoreDiscount: sum)
     }, 0);
}

export const getGrandTotal = (itemList, taxTotal, appliedPromos) => {
    let totalWithoutPromo = getSubtotal(itemList) + taxTotal - getPickupStoreDiscountTotal(itemList);
    return (totalWithoutPromo - (totalWithoutPromo * sumOfPromoPercent(appliedPromos) / 100));
}

export const sumOfPromoPercent = (appliedPromos) => {
    return appliedPromos.reduce((sum,promo) => {
           return  sum += promo.promoPercent
    },0);
}