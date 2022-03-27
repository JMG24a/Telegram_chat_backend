const model = require('../../../db/model/chat')

function addChat(chat) {
    const myChat = new model(chat);
    return myChat.save();
}

// const getChat = (id)=>{
//     return new Promise((resolve, reject)=>{
//         let options = {users: id}

//         model.find(options)
//             .populate('users')
//             .exec((error, populated)=>{
//                 if(error){
//                     reject(error)
//                 }
//                 resolve(populated)
//             });
//     });
// }   

function getChat(userId) {
	return new Promise((resolve, reject) => {
		let filter = {};
		if (userId) {
			filter = {
				users: userId,
			}
		}
	    
	    model.find(filter)
	    	.populate('users')
	    	.exec((err, populated) => {
	    		if (err) {
	    			reject(err);
	    			return false;
	    		}

	    		resolve(populated);
	    	});
	});
}

module.exports = {
    add: addChat,
    get: getChat
}