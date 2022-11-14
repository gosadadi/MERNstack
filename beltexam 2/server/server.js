// ========import express=======
const express=require('express');
const cors = require('cors')
const app=express();
const port= 8000;
// =====db name======
const db="pirates";
// =======middle ware=======
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

// =======require config and invoke it with argument========
require("./config/mongoose.config")(db)
//====== require routes======
require("./routes/routes")(app)


// ========start the server===========
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));