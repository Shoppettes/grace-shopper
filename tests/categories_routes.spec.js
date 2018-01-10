/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../server/db')
const app = require('../server/index')
const Category = db.model('category')

describe('Category routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/categories/', () => {

    beforeEach(() => {
      return Category.create({
        type: 'color',
        name: 'white'
      })
    })

    it('GET /api/categories', () => {
      return request(app)
        .get('/api/categories')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].type).to.be.equal('color')
        })
    })
    it('creates a new category', () => {

            return request.agent(app)
            .post('/api/categories')
            .send({
              type: 'price',
              name: 'expensive'
            })
            .expect(200)
            .expect(function (res) {
              expect(res.body.id).to.not.be.an('undefined');
              expect(res.body.name).to.equal('expensive');
            });
    });
  })
  describe('PUT /api/categories/:id',  () => {

            var category;

            beforeEach(function () {

              return Category.create({
                type: 'size',
                name: 'M'
              })
              .then(function (createdCategory) {
                category = createdCategory;
              });

            });

            it('updates a Category', () => {

                    return request.agent(app)
                    .put('/api/categories/' + category.id)
                    .send({
                      name: 'X'
                    })
                    .expect(200)
                    .expect(function (res) {
                      expect(res.body[1][0].id).to.not.be.an('undefined');
                      expect(res.body[1][0].name).to.equal('X');
                      expect(res.body[1][0].type).to.equal('size');
                    });

                  });
          })
})
