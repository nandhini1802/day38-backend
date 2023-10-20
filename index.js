import express from 'express';

import cors from 'cors';

import connectToDb  from './db/mongoose-connection.js';

import userRouter from './routes/users.js';

const app=express();

const PORT=process.env.PORT || 7000;


await connectToDb();


app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter);

app.listen(7000,()=>{
    console.log('Application started on 7000');
});