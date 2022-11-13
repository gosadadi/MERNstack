// ========import express=======

const express=require('express');
const cors = require('cors')
const app=express();
const port= 8000;
const db="authors";
// middle where
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['Get','Post']
// }))
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }));

// =======require config========
require("./config/mongoose.config")(db)
//====== require routes======
require("./routes/author.routes")(app)

















// start the server
app.listen(8000, () => console.log("The server is all fired up on port 8000"));