import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT,
    db_url: process.env.MONGODB_URL,
    jwt_secret: process.env.JWT_SECRET,
}

