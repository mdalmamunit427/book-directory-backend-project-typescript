# Book Directory Project

A RESTful API for managing a book directory built with Node.js, Express, TypeScript, MongoDB and Mongoose.

## Features

- User authentication with JWT
- Book management (CRUD operations)
- MongoDB database integration
- TypeScript for type safety
- Express.js for API routing

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (or MongoDB Atlas account)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd book-directory-project
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=3000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

### Development Mode

To run the application in development mode with hot-reload:
```bash
npm run dev
```

### Production Mode

1. Build the TypeScript files:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

## Project Structure

- `src/` - Source code directory
  - `server.ts` - Main application entry point
  - `routes/` - API route definitions
  - `controllers/` - Route controllers
  - `models/` - Database models
  - `middleware/` - Custom middleware
  - `config/` - Configuration files
  - `types/` - TypeScript type definitions

## Dependencies

### Main Dependencies
- express: Web framework
- mongoose: MongoDB ODM
- bcryptjs: Password hashing
- jsonwebtoken: JWT authentication
- cors: Cross-origin resource sharing
- dotenv: Environment variable management

### Development Dependencies
- typescript: TypeScript compiler
- ts-node-dev: Development server with hot-reload
- @types/*: TypeScript type definitions

## API Documentation

The API documentation will be available at `http://localhost:3000/api-docs` when the server is running.

## License

ISC 
