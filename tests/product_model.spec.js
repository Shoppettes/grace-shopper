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

  //Emptying the table after each spec
  afterEach(function () {
    return Promise.all([
      Product.truncate({ cascade: true })
    ]);
  });

  describe('Attribute definitions', () => {


      it('requires name, price, quantity, isAvailable', () => {
        return brush.save()
          .then( savedBrush => {
            expect(savedBrush.name).to.equal('Dino Wax')
            expect(savedBrush.description).to.equal('Get super silkly smooth Dino hands with this coconut-based wax')
            expect(savedBrush.price).to.equal(12.99)
            expect(savedBrush.quantity).to.equal(82)
            expect(savedBrush.isAvailable).to.equal(true)
          })
      })
  }) //end describe('Attribute definitions')
}) //end describe('Product model')
