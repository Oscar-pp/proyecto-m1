import routesModel from '../model/routesModel.js';

const routesList = (req,res) =>{
    const routes = routesModel.getRoutesList();
    res.json(routes);
}

export default {

    routesList
}