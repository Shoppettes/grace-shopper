import {expect} from 'chai'
import {createStore} from 'redux'
//import actions
// import store from '../../client/store'
import {GET_ALL_PRODUCTS, SET_CHOSEN_PRODUCT, GET_ALL_CATEGORIES, SET_CHOSEN_CATEGORY,
    GET_CART, ADD_TO_CART, DELETE_FROM_CART,  ADD_REVIEW, getAllProducts, setChosenProduct,
    addToCart, getProductsFromDb
 } from '../client/store/products'
 import {reducer} from '../client/store'
 

 describe('Redux architechture', () => {
  describe('action creators', () => {
    let productsArr, cartArr, newPurchase;
    beforeEach('Create test products array, purchase object, cart array', () => {
        productsArr = [{'name': 'dino nail polish'}]
        newPurchase = {product: 'scale glitter', quantity: 1, total: 3.99}
        cartArr = []
    })
    describe('getAllProducts', () => {
        it ('returns expected action', () => {
            expect(getAllProducts(productsArr)).to.be.deep.equal({
                type: 'GET_ALL_PRODUCTS',
                productsArr
            })
        })
    })
    describe('setChosenProduct', () => {
        it ('returns expected action', () => {
            const chosenProduct = productsArr[0];
            expect(setChosenProduct(chosenProduct)).to.be.deep.equal({
                type: 'SET_CHOSEN_PRODUCT',
                chosenProduct
            })
        })
    })
    describe('addToCart', () => {
        it ('returns expected action', () => {
            expect(addToCart(newPurchase)).to.be.deep.equal({
                type: ADD_TO_CART,
                purchase: newPurchase
            })
        })
    })

})

describe('Main reducer', () => {
    let testStore;
    beforeEach('Create mock store', () => {
        testStore = createStore(reducer);
    })
    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            user: {},
            products: [],
            // chosenCategory: {},
            // chosenProduct: {},
            // currentReview: '',
            // cart: []
        })
    })
    describe('products sub-reducer', () => {
        it('gets products array from the db via a thunk',() => {
           const store = testStore;
           const expectedAction = 'getAllProducts'

           return store.dispatch(getAllProducts())
           .then(() => {
               const actualAction = store.getActions().map(action => action.type)
               expect(actualAction).to.eql(expectedAction)
           })
        })
    })
})
