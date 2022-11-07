// ========import controller and save us PersonController variable======

const PersonController = require('../controllers/person.controller');

module.exports = function(app){
    app.get('/api', PersonController.index);
    //=======route to create person======
    app.post('/api/people', PersonController.createPerson);
    // =======route to get all========
    app.get('/api/people', PersonController.getAllPeople);
    // =======route to get one=========
    app.get('/api/people/:id', PersonController.getPerson);
    // ========update======
    app.put('/api/people/:id', PersonController.updatePerson);
    // ======delete=====
    app.delete('/api/people/:id', PersonController.deletePerson);
}

