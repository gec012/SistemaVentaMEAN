var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    role: String,
});

module.exports = mongoose.model('user', UserSchema);