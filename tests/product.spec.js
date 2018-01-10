/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../server/db')
const Product = db.model('product')



describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('', () => {
      let product

      beforeEach(() => {
        return Product.create({
          name: 'Tea-rex',
          description: 'A calming tea for a testy T-rex',
          price: 3.99,
          quantity: 2,
          isAvailable: true
        })
          .then(tea => {
            product = tea
          })
      })

      it('assigns the correct name string to the product', () => {
        expect(product.name).to.be.equal('Tea-rex')
        // expect(product.name).to.be.('string'))
      })

      it('assigns the correct price to the product', () => {
        expect(product.price).to.be.equal('3.99')
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')


