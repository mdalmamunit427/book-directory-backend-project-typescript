import express, { Request, Response } from "express";

import cors from "cors";
import { BookRoutes } from "./app/modules/books/book.routes";
import { AuthRoutes } from "./app/modules/auth/user.routes";
import errorHandler from "./app/middlewares/errorHandler";



const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/auth', AuthRoutes);
app.use('/api/books', BookRoutes);

// Error handling
app.use(errorHandler);


// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Book Directory API is running");
});



export default app;