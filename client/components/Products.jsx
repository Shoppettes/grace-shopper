import React from 'react';

let products = [
  {
    name: 'Dino bow tie',
    description: 'Impress all the lady dinos with this fashionable bow tie.',
    price: 12.99,
    quantity: 82,
    isAvailable: true,
    imgUrl: '<a href="http://tinypic.com?ref=ae9st0" target="_blank"><img src="http://i67.tinypic.com/ae9st0.jpg" border="0" alt="dinosaur with bow tie"></a>'
  
  } , {
    name: 'Brontasaurus bike',
    description: 'This classic dino bike will always be in style! Comes with an adjustable seat for all leg lengths.',
    price: 199.99,
    quantity: 68,
    isAvailable: true,
    imgUrl: '<a href="http://tinypic.com?ref=2nrm1rq" target="_blank"><img src="http://i63.tinypic.com/2nrm1rq.jpg" border="0" alt="dinosaur riding bike"></a>'
  } , {
    name: 'Triceri-top hat',
    description: 'Perfect for the gentleman dino, carnivore or herbivore.',
    price: 33.99,
    quantity: 54,
    isAvailable: true, 
    imgUrl: '<a href="http://tinypic.com?ref=21ah4rl" target="_blank"><img src="http://i65.tinypic.com/21ah4rl.jpg" border="0" alt="dino stealing top hat"></a>'
  } , {
    name: 'Tea-rex',
    description: 'Entertain your friends or just relax at home with this calming tea blend.',
    price: 5.99,
    quantity: 52,
    isAvailable: true, 
    imgUrl: '<a href="http://tinypic.com?ref=2s9twty" target="_blank"><img src="http://i66.tinypic.com/2s9twty.jpg" border="0" alt="dinosaurs drinking tea"></a>'
  }, {
    name: 'CAKE',
    description: 'Perfect for any and all special occasion! Yum!',
    price: 19.99,
    quantity: 90,
    isAvailable: true, 
    imgUrl: '<a href="http://tinypic.com?ref=107wgol" target="_blank"><img src="http://i65.tinypic.com/107wgol.jpg" border="0" alt="baby dinosaur eating birthday cake"></a>"></a>'
  }
];


const Products = (products) => {
  console.log('products', this.state.products)
  return (
    <div>
      <h3>This is the Products component.</h3>
      <div className="row">
        {products.map(product => (
          <div className="col-xs-4" key={product.id}>
            <a className="thumbnail" href="#"> 
              <img src= {product.imageUrl}/>
              <div className="caption">
                <h5>
                  <span>{product.name}</span>
                </h5>
              </div>
            </a>
          </div>
        ))}
      
      </div>
    </div>
  )
};

export default Products;
