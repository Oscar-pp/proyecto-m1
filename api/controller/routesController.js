import routesModel from '../model/routesModel.js';

const routesList = (req,res) =>{

    const urlParameters = {origen:req.query.origen, destino:req.query.destino};
    const routesTravel = routesModel.getRoutesList(urlParameters);
    res.json(routesTravel);
}

export default {
    routesList
    
}