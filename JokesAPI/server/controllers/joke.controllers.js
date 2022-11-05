// import the model
const Joke = require('../models/joke.models');
// controller responsible for making queries to the DB using the model
// all the CRUD
// 1.get all
module.exports.findAllJokes = (req, res) => {
    // use model to execute queries
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// 2.=======find one========
module.exports.findOneSingleJoke= (req, res) => {
    Joke.findOne({ _id: req.params._id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//======Create Jokes======= 

module.exports.createNewJoke = (req, res) => {
    // db.jokes.insertOne({setup:"afjkekfkjafjk",punchline:"sffkasklfm"})
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// ======update one=======

module.exports.updateExistingJoke= (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
//======delete one by ID========

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
