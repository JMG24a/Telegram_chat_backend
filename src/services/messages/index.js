const DB = require('../../store/message')

const addMessage = (user,message,chat) => {
    return new Promise ((resolve, reject)=>{

        if(!user || !message || !chat){
            console.error('[addMessage] there is not user or message')
            reject('bad request')
            return false
        }

        const createMessage =  {
            chat,
            user,
            message,
            createdAt: new Date()
        }

        DB.add(createMessage)
        resolve(createMessage)
    })
}

const getMessage = (filter) => {
    return new Promise ((resolve,reject)=>{
        const list = DB.list(filter)
        resolve(list)
    })
}

const editMessage = (id, body) => {
    return new Promise ((resolve,reject)=>{
        const edit = DB.edit(id,body)
        resolve(edit)
    })
}

const deleteMessage = (id) => {
    return new Promise ((resolve,reject)=>{
        const del = DB.delete(id)
        resolve(del)
    })
}


module.exports = {
    addMessage,
    getMessage,
    editMessage,
    deleteMessage
}