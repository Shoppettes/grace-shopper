/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../server/db')
const app = require('../server/index')
const Cart = db.model('cart')

describe('Cart routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/carts/', () => {

    beforeEach(() => {
      return Cart.create({
        subTotal: 12.34,
        total: 19
      })
    })

    it('GET /api/carts', () => {
      return request(app)
        .get('/api/carts')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].subTotal).to.be.equal('12.34')
        })
    })
    it('creates a new cart',  () => {

            return request.agent(app)
            .post('/api/carts')
            .send({
              subTotal: 12.32,
              total: 21.34
            })
            .expect(200)
            .expect(function (res) {
              //console.log(res.body);
              expect(res.body.id).to.not.be.an('undefined');
              expect(res.body.total).to.equal('21.34');
            });
    });
  })
  describe('PUT /api/carts/:id',  () => {

        var cart;

        beforeEach(function () {

          return Cart.create({
            subTotal: 12.32,
            total: 21.34
          })
          .then(function (createdCart) {
            cart = createdCart;
          });

        });

        it('updates a cart', () => {

                return request.agent(app)
                .put('/api/carts/' + cart.id)
                .send({
                  subTotal: 15.23
                })
                .expect(200)
                .expect(function (res) {
                  expect(res.body[1][0].id).to.not.be.an('undefined');
                  expect(res.body[1][0].subTotal).to.equal('15.23');
                  expect(res.body[1][0].total).to.equal('21.34');
                });

              });
      })
})
