const ProductController = require('../controllers/product.controller');
  //Import the code from Code Block 1



  module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.post('/api/products', ProductController.createProduct);
}