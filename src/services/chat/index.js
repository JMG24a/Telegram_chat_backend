const DB = require('../../store/chat')

// const addChat = (chat) =>{
//     return new Promise ((resolve, reject)=>{
//         if(!chat || !Array.isArray(chat)){
//             reject('invalid list user')
//         }
//         const newChat = {
//             user: chat.users
//         }
//         resolve(DB.add(newChat))
//     })
// }
function addChat(users) {
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };
    return DB.add(chat);
}

function getChat(userId) {
    return DB.get(userId);
}

module.exports = {
    addChat,
    getChat
}