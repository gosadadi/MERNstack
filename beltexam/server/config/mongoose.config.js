// ======connect to db using mongoose====
const mongoose = require('mongoose');

module.exports=(db)=>{
mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to the database ${db}`))
    .catch(err => console.log(`Something went wrong when connecting to the database ${db}`, err));
}