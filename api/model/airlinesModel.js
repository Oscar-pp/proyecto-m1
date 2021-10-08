import airlines from '../data/airlines.js'

class AirlinesModel{

    getAirlinesList(){
        return airlines;        
    }

}

export default new AirlinesModel();