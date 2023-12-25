import express from "express";
import bodyParser from "body-parser";
import data from "./routes/data.js";

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/data", data);
app.listen(port, (req, res) => console.log(`Server running on port ${port}`));
