const ProductController = require('../controllers/product.controller');
  //Import the code from Code Block 1



  module.exports = (app) => {
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.post('/api/products', ProductController.createProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}