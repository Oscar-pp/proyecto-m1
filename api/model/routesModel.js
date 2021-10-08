import routes from '../data/routes.js';

class RoutesModel{

    getRoutesList(){
        return routes;        
    }

}

export default new RoutesModel();