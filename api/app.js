import express from "express";
import dotenv from 'dotenv';
import airportsRoutes from './route/airportsRoutes.js'
import airlinesRoutes from './route/airlinesRoutes.js'
import citiesRoutes from './route/citiesRoutes.js'
import countriesRoutes from './route/countriesRoutes.js'
import routesRoutes from './route/routesRoutes.js'


// Cuando pasemos a produccion Heroku hay que quitar
// import dotenv from 'dotenv' y dotenv.config(); 
// pasarlo al package.json
//"start": "node -r dotenv/config server.js"
dotenv.config();

const app = express();

app.use(express.json());

//app.use('/users',userRouter);
app.use('/api/airports',airportsRoutes);
app.use('/api/airlines',airlinesRoutes);
app.use('/api/cities',citiesRoutes);
app.use('/api/countries',countriesRoutes);
app.use('/api/routes',routesRoutes);



export default app;