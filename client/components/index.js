/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './Navbar.jsx'
export {default as Sidebar} from './Sidebar.jsx'
export {default as Login} from './Login.jsx'
export {default as CreateAccount} from './CreateAccount.jsx'
export {default as AdminPanel} from './AdminPanel.jsx'
export {default as Cart} from './Cart.jsx'
export {default as Home} from './Home.jsx'
export {default as Products} from './Products.jsx'
export {default as SingleProduct} from './SingleProduct.jsx'
export {default as Checkout} from './Checkout.jsx'
export {default as MyStoreCheckout} from './MyStoreCheckout.jsx'
export {default as Footer} from './Footer.jsx'

/**our ROOT state object: 
 * {products: Array(12), chosenProduct: {…}, user: {…}, categories: Array(7), chosenCategory: {…}, …}
categories:(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
chosenCategory:{}
chosenProduct:{}
currentOrder: {
    billingAddress:null
    createdAt:"2018-01-16T17:04:48.794Z"
    creditCardCCV:null
    creditCardExpDate:null
    creditCardNumber:null
    deliveryDate:null
    estimatedDeliveryDate:"2018-01-26T17:04:48.861Z"
    estimatedShippingDate:"2018-01-18T17:04:48.861Z"
    id:17
    orderDate:"2018-01-16T17:04:48.000Z"
    orderStatus:"pending"
    products:[]
    shippingAddress:null
    shippingCost:null
    subtotal:null
    tax:null
    totalPrice:null
    updatedAt:"2018-01-16T17:04:48.794Z"
    user:null
    userId:null
    __proto__:Object

}
products:(12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
user:{}
 */