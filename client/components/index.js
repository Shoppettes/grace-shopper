/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './Navbar.jsx'
export {default as Sidebar} from './Sidebar.jsx'
export {default as Footer} from './Footer.jsx'
export {default as Home} from './Home.jsx'
export {default as Products} from './Products.jsx'
export {default as SingleProduct} from './SingleProduct.jsx'
export {default as MyStoreCheckout} from './MyStoreCheckout.jsx'
export {default as InjectedCheckoutForm} from './InjectedCheckoutForm.jsx'
export {default as Cart} from './Cart.jsx'
export {Login, Signup} from './AuthForm.jsx'
export {default as PaymentForm} from './PaymentForm.jsx'
export {default as AddressSection} from './AddressSection.jsx'
export {default as CardSection} from './CardSection.jsx'
