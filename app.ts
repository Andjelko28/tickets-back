import express from 'express'; //web server
import cors from 'cors'; // komunikacija sa Angularom
import 'reflect-metadata';

// Import DB konekcije
import dbConnection from './common/db-connection';

// Import ruta
import userRouter from './routing/user-routes';


// Promjenljiva Expressa
const app = express();

app.use(userRouter);

// Inicijalizacija baze
dbConnection.initialize()
    .then(() => { console.log('Connected to DB!'); })
    .catch((err: any) => { console.log(err); })

// Pokretanje servera(Express)
app.listen(3000, () => {
    console.log('Server is listening at port 3000');
})