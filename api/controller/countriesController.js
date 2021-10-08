import countriesModel from '../model/countriesModel.js';

const countriesList = (req,res) =>{
    const countries = countriesModel.getCountriesList();
    res.json(countries);
}

export default {
    countriesList
}