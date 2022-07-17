


const mongoose = require('mongoose');
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const companyschema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        lowercase: true,
        minlength: [3, "minimum 3 letters"],
        maxlength: 10
    },

    lastname: {
        type: String,
        required: true,
        lowercase: true,                            
        minlength: [3, 'minimum 6 lettes'],
        maxlength: 10
    },
 
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    gender: {
        type: String,
        required: true,

    },

    phone: {
        type: Number,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 10,

    },
    age: {
        type: Number,
        minlength: 18,
        maxlength: 60
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 8,

    },
    confirmpassword: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 8,

    }

})

const Episode = new mongoose.model('Episode', companyschema);
module.exports = Episode;
