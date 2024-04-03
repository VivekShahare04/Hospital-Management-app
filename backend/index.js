import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.js";

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

const corsOptions ={
    origin:true
};

app.get('/', (req, res) => {
    res.send('API is working');
});

// Database connection
mongoose.set('strictQuery',false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection is successful');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute);//this route is used to encounter with any input api is coming

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
