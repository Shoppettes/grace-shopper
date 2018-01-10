/* global describe beforeEach it */

const {expect, should} = require('chai')
const request = require('supertest')
const db = require('../server/db')
const app = require('../server/index')
const User = db.model('user')
const agent = request.agent(app);

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })


  describe('/api/users/', () => {
    let dinoEmail = 'swagasaurus@gmail.com'
    let dino;
    beforeEach(() => {
      return User.create({
        email: dinoEmail
      })
      .then((user) => dino = user)
    })

    it('GET /api/users', () => {
      return request(app)
        .get('/api/users')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array')
          expect(res.body[0].email).to.be.equal(dinoEmail)
        })
    })
    it('POST /api/users', (done) => {
      return request(app)
        .post('/users')
        .send(dino)
        .then(res => {
          expect(res.body[0].email).to.be.equal(dinoEmail)
        })
      })
    it('PUT /api/users/:userId', () => {
      return request(app)
        .put('/users/1')
        .send({email: 'ilovedinos@me.me'})
        .then(res => {
          expect(res.body[1][0].email).to.be.equal('ilovedinos@me.me')
        })
    it('DELETE /api/users/:userId', () => {
      return request(app)
        .delete('/users/1')
        .then(() => {
          expect(res.status().to.be.equal(204))
        })
      })    
    })
  }) // end describe('/api/users')
}) // end describe('User routes')

