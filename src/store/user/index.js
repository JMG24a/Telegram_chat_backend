const model = require('../../../db/model/user')

const addUser = (body) => {
    const newUser = new model(body);
    newUser.save()
    return body
}

const getUsers = (filter) => {
    let options = {}
    if(filter !== null){
        options = { name: filter }
    }

    const newUser = model.find(options)
    return newUser
}

module.exports = {
    add: addUser,
    get: getUsers
}