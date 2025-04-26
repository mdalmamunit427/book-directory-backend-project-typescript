import { Request, Response, NextFunction } from 'express';
import { Book } from './book.model';

export const BookController = {
  async getAllBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  },

  async getBookById(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  },

  async createBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  },

  async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  },

  async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
};