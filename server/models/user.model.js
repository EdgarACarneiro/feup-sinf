const mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');
let secret = require('../config').secret;

const PBKDF2_ITERATIONS = 10000;
const PBKDF2_KEYLEN = 512;
const PBKDF2_DIGEST = 'sha512';

// User Schema Definition
let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true
    },
    hash: String,
    salt: String
});


// User Methods
UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST).toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST).toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
    let today = new Date();
    let exp = new Date(today);
    exp.setDate(today.getDate() + 60);  // token expires in 60 days

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function(){
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT()
    };
};

// Export the model
module.exports = mongoose.model('User', UserSchema);