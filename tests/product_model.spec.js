/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../server/testing-db')
const Product = db.model('product')

/*
const db = require('../db')
const app = require('../index')
const Product = db.model('Product')
*/

describe('Product model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let brush

      beforeEach(() => {
        return Product.create({
          name: 'Dino Wax',
          description: 'Get super silkly smooth Dino hands with this coconut-based wax.',
          price: 12.99,
          quantity: 82,
          isAvailable: true
        })
          .then( createdProduct => {
            brush = createdProduct
          })
      })

      it('returns true if the password is correct', () => {
        expect(brush.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(brush.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('Product model')
