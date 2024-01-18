import mongoose, { Schema, Document } from 'mongoose';

interface IFeatureUsage extends Document {
  code: string;
  usageCount: number;  
  lastUsed: Date; 
}

const featureUsageSchema: Schema = new Schema({
    code: { type: String, required: true, unique: true },
  usageCount: { type: Number, default: 0 },
  lastUsed: { type: Date, default: Date.now }
});

const FeatureUsage = mongoose.model<IFeatureUsage>('FeatureUsage', featureUsageSchema);

export default FeatureUsage;
