/* Potentially update line 2 based on final decision on models */
const { db, User, Product, Category, Order, Review, Photo } = require('./server/db/models')

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
  imageURL: './dino-pics/dino-bow-tie.jpeg',
  isAvailable: true
} , {
  name: 'Brontasaurus bike',
  description: 'This classic dino bike will always be in style! Comes with an adjustable seat for all leg lengths.',
  price: 199.99,
  quantity: 68,
  isAvailable: true,
  imageURL: '/dino-pics/happy-trex-dirt-bike.jpg'
} , {
  name: 'Triceri-top hat',
  description: 'Perfect for the gentleman dino, carnivore or herbivore.',
  price: 33.99,
  quantity: 54,
  isAvailable: true,
  imageURL: '/dino-pics/dino-stealing-top-hat.jpeg'
} , {
  name: 'Tea-rex',
  description: 'Entertain your friends or just relax at home with this calming tea blend.',
  price: 5.99,
  quantity: 52,
  isAvailable: true,
  cartId: 2,
  imageURL: '/dino-pics/dinos-drinking-tea.jpeg'
}, {
  name: 'CAKE',
  description: 'Perfect for any and all special occasion! Yum!',
  price: 19.99,
  quantity: 90,
  isAvailable: true,
  cartId: 3,
  imageURL: '/dino-pics/dinosaur-eating-cake1.jpeg',
}, {
  name: 'First aid kit',
  description: 'Oopsies! Accidents happen, especially when you are a dinosaur. Help your boo-boos heal faster!',
  price: 6.00,
  quantity: 31,
  isAvailable: true,
  cartId: 1,
  imageURL: '/dino-pics/dinosaur-first-aid-kit.jpg'

},{
  name: 'Stegosaurus skateboard',
  description: 'You need the coolest wheels of any age, and we have them. ',
  price: 48.00,
  quantity: 25,
  isAvailable: true,
  imageURL: '/dino-pics/dinosaur-riding-skateboard.jpg'
}, {
  name: 'Lovely Lady Dino Lipstick',
  description: 'You need the coolest wheels of any age, and we have them. ',
  price: 48.00,
  quantity: 46,
  isAvailable: true,
  cartId: 1,
  imageURL: '/dino-pics/dinosaur-wearing-lipstick1.jpg'
}, {
  name: 'PIZZA',
  description: 'Need we say more? We think this is the best part of being a dinosaur in the modern age.',
  price: 5.00,
  imageURL: '/dino-pics/happy-trex-dirt-bike.jpg',
  quantity: 99,
  isAvailable: true,
  cartId: 2,
  imageURL: '/dino-pics/happy-trex-dirt-bike.jpg'
}, {
  name: 'Moto-saurus',
  description: 'Vrrooom vroom party starter! You are the coolest dino and you know it. Show it off with this hot set of two wheels.',
  price: 555.00,
  quantity: 15,
  isAvailable: true,
  imageURL: '/dino-pics/dinosaurs-riding-motorcycles.jpg'
}, {
  name: 'Beauty kit',
  description: 'Lady and gentleman dinos will both be thrilled with how they look after using this Dino-store beauty kit.',
  price: 25.50,
  quantity: 45,
  isAvailable: true,
  cartId: 1,
  imageURL: '/dino-pics/dinosaur-beauty-products1.jpg'
},
{
  name: 'Socks',
  description: 'Are your cold-blooded feetsies feeling a bit chilly? Get these socks and put them on your feet. Or head.',
  price: 4.50,
  quantity: 67,
  isAvailable: true,
  cartId: 1,
  imageURL: '/dino-pics/dinosaur-socks.jpg'
}];

const photos = [
  {imgURL: '/dino-pics/dino-bow-tie.jpeg', productId: 1},
  {imgURL: '/dino-pics/dino-with-cane.jpeg', productId: 1},
  {imgURL: '/dino-pics/dino-with-top-hat1.jpeg', productId: 3},
  {imgURL: '/dino-pics/dinos-with-multiple-hats.jpeg', productId: 3},
  {imgURL: '/dino-pics/dino-stealing-top-hat.jpeg', productId: 3},
  {imgURL: '/dino-pics/dinosaur-wearing-top-hat-and-dancing.jpeg', productId: 3},
  {imgURL: '/dino-pics/dinos-drinking-tea.jpeg', productId: 4},
  {imgURL: '/dino-pics/dinosaur-eating-cake1.jpeg', productId: 5},
  {imgURL: '/dino-pics/dinosaur-eating-cake2.jpeg', productId: 5},
  {imgURL: '/dino-pics/dinosaur-eating-cake3.jpg', productId: 5},
  {imgURL: '/dino-pics/dinosaur-first-aid-kit.jpg', productId: 6},
  {imgURL: '/dino-pics/dinosaur-riding-skateboard.jpg', productId: 7},
  {imgURL: '/dino-pics/dinosaur-wearing-lipstick1.jpg', productId: 8},
  {imgURL: '/dino-pics/dinosaur-wearing-lipstick2.jpg', productId: 8},
  {imgURL: '/dino-pics/dinosaurs-riding-motorcycles.jpg', productId: 9},
  {imgURL: '/dino-pics/happy-trex-dirt-bike.jpg', productId: 9},
  {imgURL: '/dino-pics/dinosaur-beauty-products1.jpg', productId: 10},
  {imgURL: '/dino-pics/dinosaur-shaving-cream.jpg', productId: 10},
  {imgURL: '/dino-pics/dinosaur-socks.jpg', productId: 11}
];

const categories = [
  {name: 'carnivore'},
  {name: 'herbivore'},
  {name: 'triassic'},
  {name: 'jurassic'},
  {name: 'cretaceous'},
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
  userId: 1,
  orderStatus: 'awaiting shipment'
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
  userId: 1,
  orderStatus: 'completed'
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
  subtotal: 21.99,
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
  Promise.all(categories.map(category =>
    Category.create(category))
  ))
  .then(() =>
  Promise.all(reviews.map(review =>
    Review.create(review))
  ))
  .then(() =>
  Promise.all(photos.map(photo =>
    Photo.create(photo))
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
