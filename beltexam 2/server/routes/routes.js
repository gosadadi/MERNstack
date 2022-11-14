// ========import the controllers======
const Controller = require("../controllers/controller")

module.exports = app => {
    app.get('/api/pirates',Controller.findAll);
    app.post('/api/pirates/new', Controller.createNew);
    app.get('/api/pirates/:_id', Controller.findOneById);
    app.put('/api/pirates/update/:_id', Controller.update);
    app.delete('/api/pirates/delete/:_id',Controller.deletedOne);
    app.get('/api/authors/random',Controller.findRandomAuthor)
}
