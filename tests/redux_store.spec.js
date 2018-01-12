import {expect} from 'chai'
// import {createStore} from 'redux'
//import actions
// import store from '../../client/store'
import {GET_ALL_PRODUCTS, SET_CHOSEN_PRODUCT, GET_ALL_CATEGORIES, SET_CHOSEN_CATEGORY,
    GET_CART, ADD_TO_CART, DELETE_FROM_CART,  ADD_REVIEW, getAllProducts, setChosenProduct, deleteChosenProduct,
    addToCart
 } from '../client/store'

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

  }) //end Action Creator tests

  // describe('thunk creators', () => {
  //   let productsArr, chosenProduct;
  //   beforeEach('Create test products array, chosenProduct', () => {
  //       productsArr = [{'name': 'dino nail polish'}]
  //       chosenProduct = {'name': 'dino nail polish'}
  //   })
  //   describe('deleteChosenProductFromDb', () => {
  //     it ('deletes a chosenProduct from the products array', () => {
  //       deleteChosenProduct(chosenProduct)
  //       productsArr = getAllProducts(productsArr).productsArr
  //       expect(chosenProduct).to.be.deep.equal([])
  //     })
  //   })
  // }) //end thunk creator tests
 }) //end Redux Archtechture tests

