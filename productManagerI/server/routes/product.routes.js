// import the controllers
const ProductController = require("../controllers/product.controller")


module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:_id', ProductController.findOneSingleProduct);
    app.put('/api/products/update/:_id', ProductController.updateExistingProduct);
    app.post('/api/products/new', ProductController.createNewProduct);
    app.delete('/api/products/delete/:_id', ProductController.deleteAnExistingProduct);
}

