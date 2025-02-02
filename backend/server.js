import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})