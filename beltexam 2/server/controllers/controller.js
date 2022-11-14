// =========import the model========
const Model = require('../models/model');
// =======controller responsible for making queries to the DB using the model======
// ============all the CRUD==============

// 1.============get all===========

module.exports.findAll = (req, res) => {
    // =====use model to execute queries======
    Model.find()
        .then(getAll => res.json(getAll))
        .catch(err => res.status(400).json(err ));
}

// 2.======Create Authors======= 

module.exports.createNew= (req, res) => {
    Model.create(req.body)
        .then(newlyCreated => res.json(newlyCreated ))
        .catch(err => res.status(400).json(err ));
}

// 3.=======find one========

module.exports.findOneById= (req, res) => {
    Model.findOne({ _id: req.params._id })
        .then(getOne => res.json(getOne))
        .catch(err => res.status(400).json(err));
}

// 4. ======update one=======

module.exports.update= (req, res) => {
    Model.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true })
        .then(updateOne => res.json(updateOne))
        .catch(err => res.status(400).json(err ));
}
// 5.======delete one by ID========

module.exports.deletedOne = (req, res) => {
    Model.deleteOne({ _id: req.params._id })
        .then(result => res.json(result ))
        .catch(err => res.status(400).json(err ));
}

// 6.=========get one random========
module.exports.findRandomAuthor=(req,res)=>{
    Model.find()
    .then(authors=>{
        const randomAuthorIndex=Math.floor(Math.random()*authors.length);
        res.json({result:authors[randomAuthorIndex]})
    })
    .catch(err => res.status(400).json( err ));
}

