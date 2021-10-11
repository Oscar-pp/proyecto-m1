import airports from '../data/airports.js'

class AirportsModel {

    getAirportsList() {
        return airports;
    }

}


export default new AirportsModel();