import * as actionType from '../Constants/productConstant';

export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {products:action.payload}
        case actionType.GET_PRODUCT_FAILURE:
            return {error:action.payload}
        default:
            return state;
    }
}


export const getProductDetailsReducer=(state={ productDet:{} },action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false,productDet:action.payload}
        case actionType.GET_PRODUCT_DETAILS_FAILURE:
            return {loading:false,error:action.payload}
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return {productDet:{}}
        default:
            return state;
}
}
