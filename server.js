const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");
const htmlRoutes = require("./routes/HTMLroutes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);

app.use("/api", apiRoutes);

app.listen(process.env.PORT || 3001);
