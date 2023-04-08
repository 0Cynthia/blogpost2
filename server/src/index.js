/**
* this file is the entry point of the application
* author: Cynthia
*/
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import SharkRouter from './routers/SharkRouter.js';

// create an instance of express
const app = express();

// bind middleware
app.use(cors());            // enables cross origin requests
app.use(express.json());    // enables express to parse JSON payloads
app.use(SharkRouter);       // binds the SharkRouter to this app

// binds host & port if the database connection is successful 
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/tutorials')
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('database connection successful!');
            console.log(`listening @ http://localhost:${process.env.PORT || 3000} 🐸`)
        });
    })
    .catch((error) => {
        console.log(error);
        console.log('program terminated');
    });