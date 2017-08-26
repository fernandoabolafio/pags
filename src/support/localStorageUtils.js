import { updateObject } from './objectUtils';

const utils = {};


utils.store = function (key, value) {
    if (typeof value == "object") {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
};

utils.get = function (key) {
    var value = localStorage.getItem(key);
    // Returns string or JSON
    try {
        value = JSON.parse(value);
    }
    catch (err) {}
    return value;
};


utils.setActiveUser = function (user) {
  utils.store('activeUser', user);
};

utils.getActiveUser = function () {
  return utils.get('activeUser');
};

utils.saveUser = function (userData) {
  let users = utils.get('users');
  if (!users) {
    users = [userData];
  } else {
    users.push(userData);
  }
  utils.store('users', users);
};

utils.updateUser = function (userData) {
  const users = utils.get('users');
  if (!users) {
    utils.saveUser(userData);
  } else {
    const user = users.filter(u => u.id === userData.id)[0];
    if (user) {
      const newUsers = users.map(u => {
        if (u.id === userData.id) {
          return updateObject(
            u,
            userData
          );
        }
        return u;
      });
      utils.store('users', newUsers);
    } else {
      utils.saveUser(userData);
    }
  }
};


export default utils;
