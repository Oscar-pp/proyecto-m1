import countries from '../data/countries.js';

class CountriesModel{

    getCountriesList(){
        return countries;        
    }

}

export default new CountriesModel();