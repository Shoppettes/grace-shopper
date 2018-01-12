import axios from 'axios'

/**
* ACTION TYPES
*/
const CREATE_ORDER = 'CREATE_ORDER'

/**
* INITIAL STATE
*/
const order = [];

/**
* ACTION CREATORS
*/
export const createOrder = orderProuct => ({type: CREATE_ORDER, orderProuct})



/**
* THUNK CREATORS
*/
export const createOrderInstance = () => dispatch => axios.post(`api/orders`)
.then( res => dispatch(createOrder(res.data)))
.catch( err => console.log(err));


/**
* REDUCER
*/
export default function (state = defaultChosenProduct, action) {
 switch (action.type) {
   case SET_CHOSEN_PRODUCT:
     return action.chosenProduct
   default:
     return state
 }
}
