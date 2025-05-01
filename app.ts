import express from 'express';
import cors from 'cors';
import 'reflect-metadata';


const app = express();





app.listen(3000, () => {
    console.log('Server is listening at port 3000');
})