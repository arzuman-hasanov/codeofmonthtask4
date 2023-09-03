import * as actionTypes from './action-types/actionTypes';

export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    };
}


export const deleteProductFromCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: product
    };
}