var express =require("express");
var path = require("path");
var app = express();

app.get("/storefont", function(req, res) {
    path.join(__dirname,  "storefront.html")
});

app.get("/socialaggregation", function(req, res) {
    path.join(__dirname, "social.html")
});

app.get("/friendfinder", function(req, res) {
    path.join(__dirname, "friendfinder.html")
});

app.get("/train", function(req, res) {
    path.join(__dirname, "train.html")
});

app.get("/pokemon", function(req, res) {
    path.join(__dirname, "pokemon.html")
});