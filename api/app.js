import express from "express";

import airportsRoutes from './routes/airportsRoutes.js';
import airlinesRoutes from './routes/airlinesRoutes.js';
import citiesRoutes from './routes/citiesRoutes.js';
import countriesRoutes from './routes/countriesRoutes.js';
import routesRoutes from './routes/routesRoutes.js';
import routesUserRoutes from './routes/routesUserRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import errorRoutes from './routes/errorRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import clientErrorHandler from './middleware/errorHandler.js';


// Cuando pasemos a produccion Heroku hay que quitar
// import dotenv from 'dotenv' y dotenv.config(); 
// pasarlo al package.json
//"start": "node -r dotenv/config server.js"

const app = express();
//dotenv.config()

app.use(express.json());


app.use('/api/airports', airportsRoutes);
app.use('/api/airlines', airlinesRoutes);
app.use('/api/cities', citiesRoutes);
app.use('/api/countries', countriesRoutes);
app.use('/api/routes', routesRoutes);
app.use('/api/routesUser', routesUserRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/admin', adminRoutes);


app.use('*', errorRoutes);
app.use(clientErrorHandler);

export default app;