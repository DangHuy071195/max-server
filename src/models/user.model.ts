import mongoose, { Schema, Document } from 'mongoose';

// Interface to define the type for a User document
interface IUser extends Document {
  username: string;
  os: string;
  browser: string;
  lastActive: Date;
  extVersion: string
}

// Schema definition for the User
const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  os: { type: String, required: true },
  browser: { type: String, required: true },
  lastActive: { type: Date, default: Date.now },
  extVersion: {type: String}
});

// Create the model from the schema
const User = mongoose.model<IUser>('User', userSchema);

export default User;
