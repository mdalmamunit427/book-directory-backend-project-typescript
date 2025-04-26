import { Router } from 'express';
import { BookController } from './book.controller';
import { auth, adminOnly } from '../../middlewares/auth.middleware';

const router = Router();

// Public routes
router.get('/', BookController.getAllBooks);
router.get('/:id', auth, BookController.getBookById);

// Admin only routes
router.post('/', auth, adminOnly, BookController.createBook);
router.put('/:id', auth, adminOnly, BookController.updateBook);
router.delete('/:id', auth, adminOnly, BookController.deleteBook);

export const BookRoutes = router;
