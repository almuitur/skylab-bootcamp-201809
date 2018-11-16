const { Schema } = require('mongoose')

const Postit = new Schema({
    text: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    assignTo: {
        type: ObjectId,
        ref: 'User'
    }
})

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    buddies: [{
        type: ObjectId,
        ref: 'User'
    }]
})

module.exports = {
    Postit,
    User
}