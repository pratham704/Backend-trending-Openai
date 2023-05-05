const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },



    blogs: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;