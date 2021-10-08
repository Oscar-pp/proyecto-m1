import AirportsModel from '../model/airportsModel.js';

const airportsList = (req,res) =>{
    const airports = AirportsModel.getAirportsList();
    res.json(airports);
}



export default {

    airportsList
}