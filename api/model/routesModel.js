import routes from '../data/routes.js';

class RoutesModel{

    getRoutesList(dataParameters){
        
        const queryRoutes = routes.filter(element => (element.departure_airport_iata == dataParameters.origen)&&
                                                (element.arrival_airport_iata == dataParameters.destino));
        return queryRoutes;
    }

}

export default new RoutesModel();