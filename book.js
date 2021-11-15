const mongoose = require("mongoose");

//creating a book schema
const BookSchema = mongoose.Schema({
    ISBN: String,
    title: String,
    authors: [Number],
    language: String,
    pubDate: String,
    numofPage: Number,
    category:[Number],
    publications: Number,
});

//create a book model
const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;