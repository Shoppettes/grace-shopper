import {expect} from 'chai'
// import {createStore} from 'redux'
//import actions
// import store from '../../client/store'
import {GET_ALL_PRODUCTS, SET_CHOSEN_PRODUCT, GET_ALL_CATEGORIES, SET_CHOSEN_CATEGORY,
    GET_CART, ADD_TO_CART, DELETE_FROM_CART,  ADD_REVIEW, getAllProducts, setChosenProduct,
    addToCart, getProductsFromDb
 } from '../client/store/products'

describe('action creators', () => {
    let productsArr, cartArr, newPurchase;
    beforeEach('Create test products array, purchase object, cart array', () => {
        productsArr = [{'name': 'dino nail polish'}]
        newPurchase = {product: 'scale glitter', quantity: 1, total: 3.99}
        cartArr = []
    })
    describe('getAllProducts', () => {
        it ('returns expected action', () => {
            const allProductsAction = {type: 'GET_ALL_PRODUCTS', products: productsArr};
            expect(getAllProducts(allProductsAction)).to.be.deep.equal({
                type: 'GET_ALL_PRODUCTS',
                products: productsArr
            })
        })
    })
    describe('setChosenProduct', () => {
        it ('returns expected action', () => {
            const chosenProduct = productsArr[0];
            const chosenProductAction = {type: 'SET_CHOSEN_PRODUCT', product: chosenProduct};
            expect(setChosenProduct(chosenProductAction)).to.be.deep.equal({
                type: 'SET_CHOSEN_PRODUCT',
                product: chosenProduct
            })
        })
    })
    describe('addToCart', () => {
        it ('returns expected action', () => {
            const purchaseToAdd = newPurchase;
            const addToCartAction = {type: 'ADD_TO_CART', purchase: purchaseToAdd};
            expect(addToCart(addToCartAction)).to.be.deep.equal({
                type: ADD_TO_CART,
                purchase: purchaseToAdd
            })
        })
    })

})
