import express from "express"
import FeatureUsage from "../models/feature-tracking.model";

const router = express.Router()
// Route to increment feature usage count
router.post('/increment-feature-usage', async (req, res) => {
    try {
      const code = req.body.code;
      if (!code) {
        return res.status(400).send('Feature name is required');
      }
  
      const updatedFeatureUsage = await FeatureUsage.findOneAndUpdate(
        { code },
        { 
          $inc: { usageCount: 1 },
          $set: { lastUsed: new Date() }
        },
        { new: true, upsert: true }
      );
  
      res.status(200).json(updatedFeatureUsage);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  export default router;
