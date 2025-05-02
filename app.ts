import express from 'express';
import cors from 'cors';
import 'reflect-metadata';

// Import DB konekcije
import dbConnection from './common/db-connection';

const app = express();



// Inicijalizacija baze
dbConnection.initialize()
    .then(() => { console.log('Connected to DB!'); })
    .catch((err: any) => { console.log(err); })

app.listen(3000, () => {
    console.log('Server is listening at port 3000');
})