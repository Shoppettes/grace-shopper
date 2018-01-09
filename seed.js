/* Potentially update line 2 based on final decision on models */
const { db, User, Product, Category, Cart, Order } = require('./server/models')

const users = [{
  email: '12345@gmail.com',
  password: 'testpassword1',
  salt: 'not_sure?',
  googleId: '12345',
  firstName: 'Jacquelyn',
  lastName: 'Wax',
  isAdmin: false,
  shippingAddress: '156 Main Street, Hampersville, MN, 70809',
  billingAddress: '183 Hello Street, Hampersville, MN, 70809',
  creditCardNumber: 6789123457891234,
  CCV: 123,
  expirationDate: 08/18
}, {
  email: '23456@gmail.com',
  password: 'testpassword2',
  salt: 'not_sure?',
  googleId: '23455',
  firstName: 'Oczane',
  lastName: 'Rivera',
  isAdmin: false,
  shippingAddress: '123 Main Street, Hampersville, MN, 70615',
  billingAddress: '192 Hello Street, Hampersville, MN, 70615',
  creditCardNumber: 6798123457891243,
  CCV: 234,
  expirationDate: 08/19
}, {
  email: '34567@gmail.com',
  password: 'testpassword3',
  salt: 'not_sure?',
  googleId: '34567',
  firstName: 'Sazi',
  lastName: 'Stoksari',
  isAdmin: true,
  shippingAddress: '182 75th Street, Hampersville, IA, 70243',
  billingAddress: '194 Hiya Street, Hampersville, IA, 70243',
  creditCardNumber: 6798123443291243,
  CCV: 345,
  expirationDate: 08/21
} , {
  email: '45678@gmail.com',
  password: 'testpassword4',
  salt: 'not_sure?',
  googleId: '45678',
  firstName: 'Erika',
  lastName: 'Weil',
  isAdmin: false,
  shippingAddress: '127 86th Street, Hampersville, RI, 70678',
  billingAddress: '128 Hey Street, Hampersville, RI, 73243',
  creditCardNumber: 6776523443291243,
  CCV: 3456,
  expirationDate: 08/22
}];

const products = [{
  name: 'Dino Wax',
  description: 'Get super silkly smooth Dino hands with this coconut-based wax.',
  price: 12.99,
  quantity: 82,
  isAvailable: true
} , {
  name: 'Dino Hair Creme',
  description: 'Get super silkly smooth Dino hair with this state-of-the-art hair creme.',
  price: 21.99,
  quantity: 68,
  isAvailable: true
} , {
  name: 'Dino Brush',
  description: 'Spend hours brushing your scales with this special brush.',
  price: 23.99,
  quantity: 54,
  isAvailable: true
} , {
  name: 'Dino Nail Polish',
  description: 'Be the talk of the town with this all natural nail polish.',
  price: 12.99,
  quantity: 52,
  isAvailable: true
}];

const categories = [];

const carts = [{
  subTotal: 12.99,
  total: 14.99
}, {
  subTotal: 13.99,
  total: 15.99
} , {
  subTotal: 15.99,
  total: 17.99
} , {
  subTotal: 21.99,
  total: 23.99
}];

const orders = [{
  subTotal: 12.99,
  total: 14.99,
  shippingCost: 2.99,
  tax: 1.99,
  shippingAddress: '156 Main Street, Hampersville, MN, 70809',
  billingAddress: '183 Hello Street, Hampersville, MN, 70809',
  creditCardNumber: 6789123457891234,
  CCV: 123,
  expirationDate: 08/18
}, {
  subTotal: 13.99,
  total: 15.99,
  shippingCost: 3.99,
  tax: 2.49,
  shippingAddress: '123 Main Street, Hampersville, MN, 70809',
  billingAddress: '192 Hello Street, Hampersville, MN, 70809',
  creditCardNumber: 6798123457891243,
  CCV: 234,
  expirationDate: 08/19
} , {
  subTotal: 15.99,
  total: 17.99,
  shippingCost: 3.99,
  tax: 3.49,
  shippingAddress: '182 75th Street, Hampersville, IA, 70243',
  billingAddress: '194 Hiya Street, Hampersville, IA, 70243',
  creditCardNumber: 6798123443291243,
  CCV: 345,
  expirationDate: 08/21
} , {
  subTotal: 21.99,
  total: 23.99,
  shippingCost: 3.99,
  tax: 3.99,
  shippingAddress: '127 86th Street, Hampersville, RI, 70678',
  billingAddress: '128 Hey Street, Hampersville, RI, 73243',
  creditCardNumber: 6776523443291243,
  CCV: 3456,
  expirationDate: 08/22
}];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(products.map(product =>
    Product.create(product))
  ))
  .then(() =>
  Promise.all(categories.map(category =>
    Category.create(category))
  ))
  .then(() =>
  Promise.all(carts.map(cart =>
    Cart.create(cart))
  ))
  .then(() =>
  Promise.all(orders.map(order =>
    Order.create(order))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
