var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SizeBikeSchema = new Schema({
        size: {type: String, require: true, unique: true},
        available: {type: Boolean, require: true, default: true}
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    });

module.exports = mongoose.model('bike_sizes', SizeBikeSchema);
