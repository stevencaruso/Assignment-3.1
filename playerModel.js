// playerModel.js
var mongoose = require('mongoose');
// Setup schema
var playerschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dunks: {
        type: String,
        required: true
    },
    age: String,
    free_throws: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Player model
var Player = module.exports = mongoose.model('Player', playerschema);
module.exports.get = function (callback, limit) {
    Player.find(callback).limit(limit);
}