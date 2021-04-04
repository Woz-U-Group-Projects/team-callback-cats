const mongoose =require('mongoose')
const Schema =mongoose.Schema 

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type:String
    },
    password: {
        type:String
    },
    email: {
        type: String
    }
}, {timestamps: true})

const user = mongoose.model('user', userSchema)
module.exports = user