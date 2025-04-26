"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("./book.model");
const createBook = async (bookData) => {
    const result = await book_model_1.Book.create(bookData);
    return result;
};
const getAllBooks = async () => {
    const result = await book_model_1.Book.find({});
    return result;
};
const getSingleBook = async (id) => {
    const result = await book_model_1.Book.findById(id);
    return result;
};
const updateBook = async (id, bookData) => {
    const result = await book_model_1.Book.findByIdAndUpdate(id, bookData, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteBook = async (id) => {
    const result = await book_model_1.Book.findByIdAndDelete(id);
    return result;
};
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
