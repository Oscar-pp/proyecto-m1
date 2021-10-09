import users from '../data/users.js';

class User {

    createUser(newUser) {
        newUser.userId = users.length + 1;
        users.push(newUser);
        console.log(users);
        return users.find(element => element.username == newUser.username);
    }
    loginUser(user) {
        return users.find(element => (element.username == newUser.username))
    }
}

export default new User();