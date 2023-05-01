import * as actionType from '../constants/productConstant'




export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
       case actionType.GET_PRODUCTS_SUCCESS:
            //products is array here     
           return {products: action.payload}
       case actionType.GET_PRODUCTS_FAIL:
             return {error:action.payload}
       default:
            return state

    }
}