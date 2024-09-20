const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
    console.log("My Second Middleware");
    res.send("<h1>My First Product</h1>");
});

app.use("/", (req, res, next) => {
    console.log("My First Middleware");
    res.send("<h1>'/' page</h1>");
});


app.listen(2800);