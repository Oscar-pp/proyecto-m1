import express from "express";
import dotenv from 'dotenv';
import airportsRoutes from './routes/airportsRoutes.js'


// Cuando pasemos a produccion Heroku hay que quitar
// import dotenv from 'dotenv' y dotenv.config(); 
// pasarlo al package.json
//"start": "node -r dotenv/config server.js"
dotenv.config();

const app = express();

app.use(express.json());

//app.use('/users',userRouter);
app.use('/api/airports',airportsRoutes)


export default app;