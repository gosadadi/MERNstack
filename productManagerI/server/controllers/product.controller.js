// import the model
const Product = require('../models/product.model');
// controller responsible for making queries to the DB using the model
// all the CRUD

// 1.============get all===========

module.exports.findAllProducts = (req, res) => {
    // =====use model to execute queries======
    Product.find()
        .then(allProducts => res.json( allProducts ))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// 2.=======find one========
module.exports.findOneSingleProduct= (req, res) => {
    Product.findOne({ _id: req.params._id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// 3.======Create Products======= 

module.exports.createNewProduct = (req, res) => {
    // db.jokes.insertOne({setup:"afjkekfkjafjk",punchline:"sffkasklfm"})
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// 4. ======update one=======

module.exports.updateExistingProduct= (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct}))
        .catch(err => res.json({ message: 'Something went wrong findOneAndUpdate', error: err }));
}
// 6.======delete one by ID========

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// =========get one random========

