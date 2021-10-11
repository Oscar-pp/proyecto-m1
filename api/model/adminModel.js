import users from '../data/users.js';
import HttpError from 'http-errors';
class Admin {

    getUsers() {
        return users;
    }

    getId(idUser){
        return users.findIndex(element => element.userId == idUser);

    }
    deleteOneUser(idUser) {
            return users.splice(users.findIndex(element => element.userId == idUser), 1);

        
    }


}

export default new Admin();