/* global describe beforeEach it */

// const {expect, should} = require('chai')
// const request = require('supertest')
// const db = require('../server/db')
// const app = require('../server/index')
// const User = db.model('user')
// const agent = request.agent(app);

// describe('User routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   // afterEach(function() {
//   //   return Promise.all([
//   //     User.truncate({cascade:true})
//   //   ])
//   // })

//   describe('/api/users/', () => {
//     const codysEmail = 'cody@puppybook.com'

//     beforeEach(() => {
//       return User.create({
//         email: codysEmail
//       })
//     })

//     it('GET /api/users', () => {
//       return request(app)
//         .get('/api/users')
//         .expect(200)
//         .then(res => {
//           expect(res.body).to.be.an('array')
//           expect(res.body[0].email).to.be.equal(codysEmail)
//         })
//     })
//     it('POST /api/users', () => {
//       it ('creates a new user', function (done) {
//         let user = {
//           email: 'testyMcTest@gmail.com'
//         }

//         .post('/users')
//         .send({
//           email: 'testyMcTest@gmail.com'
//         })
//         .expect(200)
//         .expect(function(res) {
//           expect(res.body.user.id).to.not.be.an('undefined');
//           expect(res.body.user.email).to.equal('testyMcTest@gmail.com')
//         })
//       })
//       // let newUser = {
//         // password: 'testMe123',
//         // firstName: 'Testing',
//         // lastName: 'McTest',
//         // isAdmin: false,
//         // shippingAddress: '919 Chai Ln. Javascript, IL 77402',
//         // billingAddress: '919 Chai Ln. Javascript, IL 77402',
//         // creditCardNumber: 2134442907,
//         // CCV: 858,
//         // expirationDate: 11/18
//       // }
//       // chai.request(app)
//       //   .post('/api/users')
//       //   .send(newUser)
//       //   .end((err, res) => {
//       //     res.should.have.status(200);
//       //     res.body.should.have.property('email').eql('testyMcTest@gmail.com');
//       //     done();
//       //   })
//     })
//   }) // end describe('/api/users')
// }) // end describe('User routes')

'use strict';


var expect = require('chai').expect;
var request = require('supertest-as-promised');

var app = require('../server/index');
var agent = request.agent(app);

var db = require('../server/db');
var User = db.model('user')

/**
 *
 * Article Route Tests
 *
 * Do these after you finish the Article Model tests
 *
 */
describe('Users Route:', function () {

  /**
   * First we clear the database before beginning each run
   */
  before(function () {
    return db.sync({force: true});
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return Promise.all([
      User.truncate({ cascade: true })
    ]);
  });

  describe('GET /users', function () {
    /**
     * We'll run a GET request to /users
     * It should return JSON of all users in the db
     */
    it('responds with an array via JSON', function () {

      return agent
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function (res) {
        // res.body is the JSON return object
        expect(res.body).to.be.an.instanceOf(Array);
        expect(res.body).to.have.length(0);
      });

    });

    /**
     * should save a user in the database using our model and then retrieve it
     * using the GET /users route
     *
     */
    it('returns a user if there is one in the DB', function () {

      var user = User.build({
        email: 'tester@gmail.com'
      });

      return user.save().then(function () {

        return agent
        .get('/users')
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an.instanceOf(Array);
        });

      });

    });

    /** it should save a second user in the database using our model, then retrieve it
     * using the GET /users route
     *
     */
    it('returns another user if there is one in the DB', function () {

      var user1 = User.build({
        email: 'testOne@gmail.com'
      });

      var user2 = User.build({
        email: 'testTwo@hotmail.com'
      });

      return user1.save()
      .then(function () { return user2.save() })
      .then(function () {

        return agent
        .get('/users')
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an.instanceOf(Array);
          expect(res.body[0].email).to.equal('testOne@gmail.com');
          expect(res.body[1].email).to.equal('testTwo@hotmail.com');
        });

      });

    });

  });

  /**
   * Search for articles by ID
   */
  describe('GET /users/:userId', function () {

    var superCoolUser;

    beforeEach(function () {

      var creatingUsers = [{
        email: 'ilovedinos@gmail.com'
      }, {
        email: 'swagasaurus@aol.com'
      }, {
        email: 'me-rex@me.me'
      }]
      .map(data => User.create(data));

      return Promise.all(creatingArticles)
      .then(createdUsers => {
        superCoolUser = createdUsers[1];
      });

    });

    /**
     * This is a proper GET /users/ID request
     * where we search by the ID of the user created above
     */
    it('returns the JSON of the user based on the id', function () {

      return agent
      .get('/users/' + superCoolUser.id)
      .expect(200)
      .expect(function (res) {
        if (typeof res.body === 'string') {
          res.body = JSON.parse(res.body);
        }
        expect(res.body.email).to.equal('swagasaurus@aol.com');
      });

    });

    /**
     * Here we pass in a bad ID to the URL, we should get a 404 error
     */
    it('returns a 404 error if the ID is not correct', function () {

      return agent
      .get('/users/76142896')
      .expect(404);

    });

  });

  /**
   * Series of tests to test creation of new Articles using a POST
   * request to /articles
   */
  describe('POST /users', function () {

    /**
     * Test the creation of an user
     * Here we don't get back just the user, we get back an object of this type, which you construct:
     *  {
     *    message: 'Created successfully',
     *    user: <the created user instance>
     *  }
     *
     */
    it('creates a new user', function () {

      return agent
      .post('/users')
      .send({
        email: 'awesomedino@me.com',
        content: 'testing create dino user route'
      })
      .expect(200)
      .expect(function (res) {
        expect(res.body.user.id).to.not.be.an('undefined');
        expect(res.body.user.email).to.equal('awesomedino@me.com');
      });

    });

    // This one should fail with a 500 because we don't set the article.content
    it('does not create a new user without email', function () {

      return agent
      .post('/users')
      .send({
        firstName: 'T',
        lastName: 'Rex'
      })
      .expect(500);

    });

    // Check if the users were actually saved to the database
    it('saves the user to the DB', function () {

      return agent
      .post('/users')
      .send({
        email: 'savedDinoEmail@gmail.com'
      })
      .expect(200)
      .then(function () {
        return User.findOne({
          where: { email: 'savedDinoEmail@gmail.com'}
        });
      })
      .then(function (foundUser) {
        expect(foundUser).to.exist; // eslint-disable-line no-unused-expressions
        expect(foundUser.email).to.equal('savedDinoEmail@gmail.com');
      });

    });


  /**
   * Series of specs to test updating of Users using a PUT
   * request to /users/:userId
   */
  describe('PUT /users/:userId', function () {

    var user;

    beforeEach(function () {

      return User.create({
        email: 'iwillsoonbeedited@gmail.com'
      })
      .then(function (createdUser) {
        user = createdUser;
      });

    });

    /** Test the updating of a user
     **/
    it('updates an user', function () {

      return agent
      .put('/users/' + user.id)
      .send({
        email: 'lookimupdated@gmail.com'
      })
      .expect(200)
      .expect(function (res) {
        expect(res.body.user.id).to.not.be.an('undefined');
        expect(res.body.article.email).to.equal('lookimupdated@gmail.com');
      });

    });

    it('gets 500 for invalid update', function () {

      return agent
      .put('/users/' + user.id)
      .send({ email: '' })
      .expect(500);

    });
  });

  });

});
