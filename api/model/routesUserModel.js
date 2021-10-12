import users from '../data/users.js';


class RoutesUser {

    listAllRoutesUser(idUser) {
        
        //const userData = users.routes.find(element => element.userId == idUser);
        //const allListRoutes = userData.routes;
        return users[1].routes;

    }


    postDatasRoute(datas) {
        users[1].routes.push(datas);
        return users;
    }



    deleteAllRoutesUser(idUser) {
        const position = users.findIndex(element => element.userId == idUser)
        //const userData = users[1].routes
        const userData = users[1].routes.splice(0,1);
        return users;
    }
} export default new RoutesUser();