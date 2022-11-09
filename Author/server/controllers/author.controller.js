// import the model
const Author = require('../models/author.model');
// controller responsible for making queries to the DB using the model
// all the CRUD

// 1.============get all===========


module.exports.findAllAuthors = (req, res) => {
    // =====use model to execute queries======
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// 2.=======find one========
module.exports.findOneSingleAuthor= (req, res) => {
    Author.findOne({ _id: req.params._id })
        .then(oneSingleAuthor => res.json({ author: oneSingleAuthor }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// 3.======Create Authors======= 

module.exports.createNewAuthor = (req, res) => {
    // db.jokes.insertOne({setup:"afjkekfkjafjk",punchline:"sffkasklfm"})
    Author.create(req.body)
        .then(newlyCreatedAuthor => res.json( newlyCreatedAuthor ))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// 4. ======update one=======

module.exports.updateExistingAuthor= (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => res.json({ author: updatedAuthor}))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}
// 6.======delete one by ID========

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// =========get one random========
module.exports.findRandomAuthor=(req,res)=>{
    Author.find()
    .then(authors=>{
        const randomAuthorIndex=Math.floor(Math.random()*authors.length);
        res.json({result:authors[randomAuthorIndex]})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

