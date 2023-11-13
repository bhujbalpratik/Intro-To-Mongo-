
import express from "express";

import UserRouter from "./router/user.js";

import ejs from "ejs";
import bodyParser from "body-parser";





const PORT = 5000;
const HOSTNAME = "localhost";

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");



app.use("/user", UserRouter);

app.get('/', (req, res) => {
    res.send("Helloworld");
});




app.listen(PORT, HOSTNAME, () => {
    console.log(`server is working on http://${HOSTNAME}:${PORT}`);
})