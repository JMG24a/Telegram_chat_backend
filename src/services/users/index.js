const DB = require('../../store/user')

const getUsers = (filter) => {
    return new Promise((response,reject)=>{
        response(DB.get(filter))
    })
}

const addUser = (body) => {
    return new Promise((response,reject)=>{
        if(!body.name || !body.location){
            reject('Bad Request')
        }
        response(DB.add(body))
    })
}

module.exports = {
    getUsers,
    addUser
}