import { Book } from './book.model';
import { IBook } from './book.interface';

const createBook = async (bookData: IBook): Promise<IBook> => {
  const result = await Book.create(bookData);
  return result;
};

const getAllBooks = async (): Promise<IBook[]> => {
  const result = await Book.find({});
  return result;
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (
  id: string,
  bookData: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findByIdAndUpdate(id, bookData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
