/* Potentially update line 2 based on final decision on models */
const { db, User, Product, Category, Cart, Order, Review } = require('./server/db/models')

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
  name: 'Dino bow tie',
  description: 'Impress all the lady dinos with this fashionable bow tie.',
  price: 12.99,
  quantity: 82,
  isAvailable: true,
  cartId: 1
} , {
  name: 'Brontasaurus bike',
  description: 'This classic dino bike will always be in style! Comes with an adjustable seat for all leg lengths.',
  price: 199.99,
  quantity: 68,
  isAvailable: true,
} , {
  name: 'Triceri-top hat',
  description: 'Perfect for the gentleman dino, carnivore or herbivore.',
  price: 33.99,
  quantity: 54,
  isAvailable: true
} , {
  name: 'Tea-rex',
  description: 'Entertain your friends or just relax at home with this calming tea blend.',
  price: 5.99,
  quantity: 52,
  isAvailable: true,
  cartId: 2
}, {
  name: 'CAKE',
  description: 'Perfect for any and all special occasion! Yum!',
  price: 19.99,
  quantity: 90,
  isAvailable: true,
  cartId: 2
}, {
  name: 'First aid kit',
  description: 'Accidents happen, especially when you live in the Jurassic age. Help your boo-boos heal faster!',
  price: 6.00,
  quantity: 31,
  isAvailable: true,
  cartId: 2

},{
  name: 'Stegosaurus skateboard',
  description: 'You need the coolest wheels of any age, and we have them. ',
  price: 48.00,
  quantity: 25,
  isAvailable: true,
  cartId: 2

}, {
  name: 'Lovely Lady Dino Lipstick',
  description: 'You need the coolest wheels of any age, and we have them. ',
  price: 48.00,
  quantity: 46,
  isAvailable: true,
  cartId: 2
}, {
  name: 'PIZZA',
  description: 'Need we say more? We think this is the best part of being a dinosaur in the modern age.',
  price: 5.00,
  quantity: 99,
  isAvailable: true,
  cartId: 2
}, {
  name: 'Moto-saurus',
  description: 'Vrrooom vroom party starter! You are the coolest dino and you know it. Show it off with this hot set of two wheels.',
  price: 555.00,
  quantity: 15,
  isAvailable: true,
  cartId: 2
}


];

const categories = [
  {name: 'skincare' },
  {name: 'body lotions'},
  {name: 'exfoliants' },
  {name: 'hygiene'},
  {name: 'dental care'},
  {name: 'makeup'},
  {name: 'scales'},
  {name:'claws and talons'},
  {name: 'hair'},
  {name: 'carnivore'},
  {name: 'herbivore'},
  {name: 'triassic'},
  {name: 'jurassic'},
  {name: 'cretaceous'},
  {name: 'land-dwelling'},
  {name: 'airborne'},
  {name: 'water-dwelling'}
];

const reviews = [{
  text: 'helloo',
  rating: 3,
  productId: 1
} , {
  text: 'jkhfkjjs;lgk',
  rating: 2,
  productId: 1
}];

const carts = [{
  subTotal: 12.99,
  total: 14.99,
  userId: 1,
  orderId: 2
}, {
  subTotal: 13.99,
  total: 15.99,
  userId: 2,
  orderId: 1
} , {
  subTotal: 15.99,
  total: 17.99,
  userId: 3,
  orderId: 4
} , {
  subTotal: 21.99,
  total: 23.99,
  userId: 4,
  orderId: 2
}];

const orders = [{
  subTotal: 12.99,
  // total: 14.99,
  shippingCost: 2.99,
  tax: 1.99,
  shippingAddress: '156 asla Street, Hampersville, MN, 70809',
  billingAddress: '183 Hello Street, Hampersville, MN, 70809',
  creditCardNumber: 6789123457891234,
  CCV: 123,
  orderDate:new Date(),
  expirationDate: 08/18,
  userId: 1
}, {
  subTotal: 13.99,
  // total: 15.99,
  shippingCost: 3.99,
  tax: 2.49,
  shippingAddress: '123 aaa Street, Hampersville, MN, 70809',
  billingAddress: '192 Hello Street, Hampersville, MN, 70809',
  creditCardNumber: 6798123457891243,
  CCV: 234,
  expirationDate: 08/19,
  orderDate:new Date() + 1,
  userId: 2
} , {
  subTotal: 15.99,
  // total: 17.99,
  shippingCost: 3.99,
  tax: 3.49,
  shippingAddress: '182 75th Street, Hampersville, IA, 70243',
  billingAddress: '194 Hiya Street, Hampersville, IA, 70243',
  creditCardNumber: 6798123443291243,
  CCV: 345,
  expirationDate: 08/21,
  userId: 3
} , {
  subTotal: 21.99,
  // total: 23.99,
  shippingCost: 3.99,
  tax: 3.99,
  shippingAddress: '127 86th Street, Hampersville, RI, 70678',
  billingAddress: '128 Hey Street, Hampersville, RI, 73243',
  creditCardNumber: 6776523443291243,
  CCV: 3456,
  expirationDate: 08/22,
  orderDate:new Date("October 13, 2014 11:13:00"),
  userId: 2
}];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(orders.map(order =>
    Order.create(order))
  ))
  .then(() =>
  Promise.all(products.map(product =>
    Product.create(product))
  ))
  .then(() =>
  Promise.all(reviews.map(review =>
    Review.create(review))
));

const main = () => {
  console.log('Syncing db...');
  db.sync({force: true})
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
