import users from '../data/users.js';


class RoutesUser {

    putDatasRoute(datas) {
        return users.routes.push(datas);
    }

    listAllRoutesUser(idUser){
        const userData = users.find(element => element.userId == idUser);
        const allListRoutes = userData.routes;
        return allListRoutes;

    }

    deleteAllRoutesUser(idUser){
        const userData = users.find(element => element.userId == idUser);
        users.routes = [];
        return userData;
    }





} export default new RoutesUser();