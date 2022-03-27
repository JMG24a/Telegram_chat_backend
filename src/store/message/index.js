const Model = require('../../../db/model/message');

const addMessage = (message) =>{
    const myMessage = new Model(message)
    myMessage.save();
    return message
}

const getMessage = (filter) =>{
    return new Promise ((resolve,reject)=>{
        let options = {}
        if(filter !== null){
            options = { 'chat': filter }
        }

        console.log("[GET_MESSAGE]: ", options)
        Model.find(options)
            .populate('user')
            .exec((error,populated)=>{
                if(error){
                    reject(error)
                }
                resolve(populated)
            })
    })
}

const editMessage = async(id,body) =>{
    await Model.findOneAndUpdate({'_id': id},body)
    return "Success Edit"
}

const deleteMessage = async(id) =>{
    await Model.deleteOne({'_id': id})
    return "Success delete"
}

module.exports = {
    add: addMessage,
    list: getMessage,
    edit: editMessage,
    delete: deleteMessage
}