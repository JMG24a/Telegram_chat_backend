const DB = require('../../store/message')
const {socket} = require('../../../socket')

const addMessage = (user,message,chat,file) => {
    return new Promise ((resolve, reject)=>{

        console.log('{FILE}: ',file)

        if(!user || !message || !chat){
            console.error('[addMessage] there is not user or message')
            reject('bad request')
            return false
        }

        let fileURL = '';
        if(file){
            fileURL = `http://localhost:3001/app/files/${file.filename}`
        }

        const createMessage =  {
            chat,
            user,
            message,
            fileURL,
            createdAt: new Date()
        }
    
        DB.add(createMessage)
        socket.io.emit('message', createMessage)
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