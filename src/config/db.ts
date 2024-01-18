import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourDatabase';
console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
