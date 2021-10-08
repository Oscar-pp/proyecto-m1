import routesModel from '../model/routesModel.js';

const routesList = (req,res) =>{

    origenCiudad = req.params.origen;
    console.log(origen);
    const routesOrigen = routesModel.getRoutesList(origenCiudad);
    res.json(routesOrigen);
}

export default {
    routesList
}