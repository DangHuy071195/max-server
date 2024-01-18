import express from 'express';
import connectDB from './config/db';
import userRoutes from './routes/user.routes'; 
import featureRoutes from './routes/feature.routes'; 
import cors from 'cors';

// Create a new express application instance
const app: express.Application = express();


// CORS configuration
app.use(cors({
    origin: 'chrome-extension://jendbamhljdcmpbapfalchhngoopaakf'
}));

const port = 3000; // Port number


connectDB();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/features', featureRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
