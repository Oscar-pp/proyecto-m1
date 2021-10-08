import citiesModel from '../model/citiesModel.js';

const citiesList = (req,res) =>{
    const cities = citiesModel.getCitiesList();
    res.json(cities);
}



export default {

    citiesList
}