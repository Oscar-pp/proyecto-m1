import routes from '../data/routes.js';

class RoutesModel{

    getRoutesList(origen){
        
        return routes.findIndex(element => (element.departure_airport_iata == origen))    
    }

}

export default new RoutesModel();