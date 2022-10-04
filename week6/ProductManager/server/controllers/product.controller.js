const Product = require ('../models/product.model')

const index = (req, res) => {  //We are exporting a key:val pair of index : function
    res.json({     // This is where we're setting the API's response to the requesting client
       message: "Hello World"
    });
}

const createProduct = (req,res) => {
     Product.create(req.body)
     .then(product=> res.json(product))
     .catch(err => res.json(err))
    }

    const getAllProducts =(req,res) => {
        Product.find()
        .then(product=> 
            res.json(product))
        .catch(err=> console.log(err))
    }



module.exports = {
    index,
    createProduct,
    getAllProducts
}