const express=require('express');
const app=express();
const port= 8000;
const db="jokes";
// middle where
app.use(express.json(), express.urlencoded({ extended: true }));

// =======require config========
require("./config/mongoos.config")(db)
//====== require controllers======
require("./routes/joke.routes")(app)

















// start the server
app.listen(8000, () => console.log("The server is all fired up on port 8000"));