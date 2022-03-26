const mongoose = require('mongoose');
const { config } = require('../../../config');

const uri = config.uri;
mongoose.Promise = global.Promise;

const connectMDB = async() => {
    try{
        await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('[DB] Success Connect')
    }catch(err){
        console.error(err)
    }

}



module.exports = connectMDB