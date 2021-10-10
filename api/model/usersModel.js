import users from '../data/users.js';

class User {

    createUser(newUser) {
        newUser.userId = users.length + 1;
        users.push(newUser);
        return users.find(element => element.userId == newUser.userId);
    }
    loginUser(user) {
        return users.find(element => (element.username == user.username));
    }
}

export default new User();