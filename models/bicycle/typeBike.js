var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TypeVeloSchema = new Schema({
        name: {type: String, require: true, unique: true},
        available: {type: Boolean, require: true, default: true}
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('bikes_types', TypeVeloSchema);
