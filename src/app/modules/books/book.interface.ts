import { Document } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  genre: string;
  publicationYear: number;
  description?: string;
  isbn: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
