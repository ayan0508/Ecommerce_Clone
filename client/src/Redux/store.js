import {createStore,combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {getProductDetailsReducer, getProductsReducer} from './Reducers/getProductsReducer';
import { CartReducer} from './Reducers/cartReducer';




const reducer= combineReducers({
    getProducts: getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:CartReducer
})


const middleware=[thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;