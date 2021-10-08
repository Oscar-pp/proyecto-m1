import AirportModel from '../model/airportsModel.js';

const airportsList = (req,res) =>{
    const airports = AirportModel.getAirportsList();
    res.json(airports);
}



export default {

    airportsList
}