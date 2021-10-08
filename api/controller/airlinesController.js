import AirlinesModel from '../model/airlinesModel.js';

const airlinesList = (req,res) =>{
    const airlines = AirlinesModel.getAirlinesList();
    res.json(airlines);
}



export default {

    airlinesList
}