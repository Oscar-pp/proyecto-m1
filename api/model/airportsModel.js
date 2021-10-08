import airports from '../data/airports.js'

class AirportModel{

    getAirportsList(){
        return airports;        
    }


}


export default new AirportModel();