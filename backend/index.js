const express = require("express");
const cors = require("cors")
const mainRouter = require("./routes/index");
const app = express();

app.use(cors);
app.use(express.json());




app.use("/api/v1", mainRouter);
const port = 8080;
app.listen(port, (req, res)=>{
    console.log(`The app is listening at port ${port}`);
})