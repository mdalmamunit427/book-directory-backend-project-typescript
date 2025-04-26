


import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.inerface";

const userSchema = new Schema<IUser>(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
    },
    {
      timestamps: true,
    }
  );
  
  export const User = mongoose.model<IUser>('User', userSchema); 