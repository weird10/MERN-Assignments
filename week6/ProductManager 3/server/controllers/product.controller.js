const Product = require ('../models/product.model')


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

    const getOneProduct = (req, res) => {
        Product.findOne({_id:req.params.id})
        .then(thisProd => res.json(thisProd))
        .catch(err => res.json(err))
    }

    const updateProduct = (req, res) => {
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedProd => res.json(updatedProd))
        .catch(err => res.json(err))
    }

    const deleteProduct = (req, res) => {
        Product.deleteOne({_id:req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
    }



module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}