"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_services_1 = require("./book.services");
const createBook = async (req, res) => {
    try {
        const bookData = req.body;
        const result = await book_services_1.BookService.createBook(bookData);
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to create book',
            error: error,
        });
    }
};
const getAllBooks = async (req, res) => {
    try {
        const result = await book_services_1.BookService.getAllBooks();
        res.status(200).json({
            success: true,
            message: 'Books retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to retrieve books',
            error: error,
        });
    }
};
const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await book_services_1.BookService.getSingleBook(id);
        if (!result) {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to retrieve book',
            error: error,
        });
    }
};
const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const bookData = req.body;
        const result = await book_services_1.BookService.updateBook(id, bookData);
        if (!result) {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to update book',
            error: error,
        });
    }
};
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await book_services_1.BookService.deleteBook(id);
        if (!result) {
            res.status(404).json({
                success: false,
                message: 'Book not found',
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to delete book',
            error: error,
        });
    }
};
exports.BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
